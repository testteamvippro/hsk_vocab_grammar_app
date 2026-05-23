import { vocabData }   from '../data/vocab.js';
import { grammarData } from '../data/grammar.js';

// ─── State ───────────────────────────────────────────────
let currentMode  = 'vocab';
let currentLevel = 'hsk1';
let currentView  = 'table'; // 'table' | 'card' | 'flash'
let currentData  = [];
let flashIndex   = 0;
let flashFlipped = false;

// ─── DOM ─────────────────────────────────────────────────
const btnVocab      = document.getElementById('btnVocab');
const btnGrammar    = document.getElementById('btnGrammar');
const levelChips    = document.getElementById('levelChips');
const searchInput   = document.getElementById('searchInput');
const searchClear   = document.getElementById('searchClear');
const tableHeader   = document.getElementById('tableHeader');
const appBody       = document.getElementById('appBody');
const tableWrapper  = document.getElementById('tableWrapper');
const cardGrid      = document.getElementById('cardGrid');
const flashArea     = document.getElementById('flashArea');
const flipCard      = document.getElementById('flipCard');
const flipFront     = document.getElementById('flipFront');
const flipBack      = document.getElementById('flipBack');
const flashCounter  = document.getElementById('flashCounter');
const flashProgress = document.getElementById('flashProgressFill');
const fcPrev        = document.getElementById('fcPrev');
const fcNext        = document.getElementById('fcNext');
const fcFlip        = document.getElementById('fcFlip');
const emptyState    = document.getElementById('emptyState');
const wordCount     = document.getElementById('wordCount');
const viewToggle    = document.getElementById('viewToggle');
const toastContainer= document.getElementById('toastContainer');

// ─── Tabs ─────────────────────────────────────────────────
btnVocab.addEventListener('click', () => {
    if (currentMode === 'vocab') return;
    currentMode = 'vocab';
    btnVocab.classList.add('active');
    btnGrammar.classList.remove('active');
    searchInput.placeholder = 'Tìm kiếm từ vựng...';
    // Hide flash-only mode for grammar — stay on table/card
    if (currentView === 'flash') setView('table');
    loadLevel();
});

btnGrammar.addEventListener('click', () => {
    if (currentMode === 'grammar') return;
    currentMode = 'grammar';
    btnGrammar.classList.add('active');
    btnVocab.classList.remove('active');
    searchInput.placeholder = 'Tìm kiếm ngữ pháp...';
    if (currentView === 'flash') setView('table');
    loadLevel();
});

// ─── Level chips ──────────────────────────────────────────
levelChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    levelChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentLevel = chip.dataset.level;
    loadLevel();
    showToast(`Đã chọn ${chip.textContent}`, 'info');
});

// ─── View toggle ──────────────────────────────────────────
viewToggle.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-btn');
    if (!btn) return;
    const view = btn.dataset.view;
    if (view === currentView) return;
    // grammar has no flashcard
    if (view === 'flash' && currentMode === 'grammar') {
        showToast('Flashcard chỉ hỗ trợ chế độ Từ Vựng', 'info');
        return;
    }
    setView(view);
    renderCurrentView(currentData);
});

function setView(view) {
    currentView = view;
    viewToggle.querySelectorAll('.view-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.view === view);
    });
}

// ─── Load level ───────────────────────────────────────────
function loadLevel() {
    currentData = currentMode === 'vocab'
        ? (vocabData[currentLevel]   || [])
        : (grammarData[currentLevel] || []);
    searchInput.value = '';
    searchClear.hidden = true;
    flashIndex   = 0;
    flashFlipped = false;
    renderCurrentView(currentData);
    updateWordCount(currentData.length);
}

// ─── Word count ───────────────────────────────────────────
function updateWordCount(count) {
    const label = currentMode === 'vocab' ? 'từ' : 'mẫu';
    wordCount.textContent = `${count} ${label}`;
    // Re-trigger animation
    wordCount.style.animation = 'none';
    wordCount.offsetWidth; // reflow
    wordCount.style.animation = '';
}

// ─── Route to correct renderer ───────────────────────────
function renderCurrentView(data) {
    if (currentView === 'table') {
        showSection('table');
        renderTable(data);
    } else if (currentView === 'card') {
        showSection('card');
        renderCards(data);
    } else {
        showSection('flash');
        renderFlashcard(data, flashIndex);
    }
}

function showSection(mode) {
    tableWrapper.hidden = true;
    cardGrid.hidden     = true;
    flashArea.hidden    = true;
    emptyState.hidden   = true;

    if (mode === 'table') tableWrapper.hidden = false;
    else if (mode === 'card') cardGrid.hidden = false;
    else if (mode === 'flash') flashArea.hidden = false;
    else emptyState.hidden = false;
}

// ─── TABLE VIEW ───────────────────────────────────────────
function renderTable(data) {
    appBody.innerHTML  = '';
    tableHeader.innerHTML = '';

    if (currentMode === 'vocab') {
        tableHeader.innerHTML = `<tr>
            <th>#</th><th>Hán tự</th><th>Pinyin</th><th>Tiếng Việt</th><th>English</th>
        </tr>`;
    } else {
        tableHeader.innerHTML = `<tr>
            <th>#</th><th>Cấu trúc</th><th>Cách dùng</th><th>Ví dụ</th>
        </tr>`;
    }

    if (data.length === 0) {
        tableWrapper.hidden = true;
        emptyState.hidden = false;
        return;
    }

    const frag = document.createDocumentFragment();

    data.forEach((item, i) => {
        const tr = document.createElement('tr');
        if (currentMode === 'vocab') {
            tr.innerHTML = `
                <td class="cell-index">${i + 1}</td>
                <td class="cell-hanzi">${item.hanzi}</td>
                <td class="cell-pinyin"><span class="pin">${item.pinyin}</span></td>
                <td class="cell-vi">${item.vi}</td>
                <td class="cell-en">${item.en}</td>
            `;
        } else {
            tr.innerHTML = `
                <td class="cell-index">${i + 1}</td>
                <td class="cell-structure">${item.structure}</td>
                <td class="cell-usage">${item.usage}</td>
                <td class="cell-example">
                    <span class="ex-cn">${item.ex_cn}</span>
                    <span class="ex-py">${item.ex_py}</span>
                    <span class="ex-vi">${item.ex_vi}</span>
                </td>
            `;
        }
        frag.appendChild(tr);
    });

    appBody.appendChild(frag);
}

// ─── CARD VIEW ────────────────────────────────────────────
function renderCards(data) {
    cardGrid.innerHTML = '';

    if (data.length === 0) {
        cardGrid.hidden   = true;
        emptyState.hidden = false;
        return;
    }

    const frag = document.createDocumentFragment();

    data.forEach((item, i) => {
        const card = document.createElement('div');

        if (currentMode === 'vocab') {
            card.className = 'vocab-card';
            card.innerHTML = `
                <span class="card-num">${i + 1}</span>
                <div class="card-hanzi">${item.hanzi}</div>
                <div class="card-pinyin">${item.pinyin}</div>
                <div class="card-vi">${item.vi}</div>
                <div class="card-en">${item.en}</div>
            `;
        } else {
            card.className = 'grammar-card';
            card.innerHTML = `
                <div class="grammar-structure">${item.structure}</div>
                <div class="grammar-usage">${item.usage}</div>
                <div class="grammar-example">
                    <span class="ex-cn">${item.ex_cn}</span>
                    <span class="ex-py">${item.ex_py}</span>
                    <span class="ex-vi">${item.ex_vi}</span>
                </div>
            `;
        }
        frag.appendChild(card);
    });

    cardGrid.appendChild(frag);
}

// ─── FLASHCARD VIEW ───────────────────────────────────────
function renderFlashcard(data, idx) {
    if (data.length === 0) {
        flashArea.hidden  = true;
        emptyState.hidden = false;
        return;
    }

    const item  = data[idx];
    const total = data.length;

    flashCounter.textContent = `${idx + 1} / ${total}`;
    flashProgress.style.width = `${((idx + 1) / total) * 100}%`;

    // Reset flip
    flashFlipped = false;
    flipCard.classList.remove('flipped');

    // Front face — show hanzi only
    flipFront.innerHTML = `
        <div class="flip-hanzi">${item.hanzi}</div>
        <div class="flip-hint">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.55"/></svg>
            Nhấn để xem nghĩa
        </div>
    `;

    // Back face — pinyin + vi + en
    flipBack.innerHTML = `
        <div class="flip-back-pinyin">${item.pinyin}</div>
        <div class="flip-back-vi">${item.vi}</div>
        <div class="flip-back-en">${item.en}</div>
    `;

    fcPrev.disabled = idx === 0;
    fcNext.disabled = idx === total - 1;
}

// Flip card click / button
flipCard.addEventListener('click', toggleFlip);
fcFlip.addEventListener('click', toggleFlip);

function toggleFlip() {
    flashFlipped = !flashFlipped;
    flipCard.classList.toggle('flipped', flashFlipped);
}

fcPrev.addEventListener('click', () => {
    if (flashIndex > 0) {
        flashIndex--;
        renderFlashcard(currentData, flashIndex);
    }
});

fcNext.addEventListener('click', () => {
    if (flashIndex < currentData.length - 1) {
        flashIndex++;
        renderFlashcard(currentData, flashIndex);
    } else {
        showToast('Đã học xong tất cả thẻ! 🎉', 'success');
    }
});

// Keyboard nav for flashcard
document.addEventListener('keydown', (e) => {
    if (currentView !== 'flash') return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        fcNext.click();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        fcPrev.click();
    } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleFlip();
    }
});

// ─── Search ───────────────────────────────────────────────
let searchTimeout;

function handleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const q = searchInput.value.toLowerCase().trim();
        searchClear.hidden = !q;

        if (!q) {
            renderCurrentView(currentData);
            updateWordCount(currentData.length);
            return;
        }

        const filtered = currentData.filter(item => {
            if (currentMode === 'vocab') {
                return item.hanzi.includes(q)         ||
                       item.pinyin.toLowerCase().includes(q) ||
                       item.vi.toLowerCase().includes(q)     ||
                       item.en.toLowerCase().includes(q);
            } else {
                return item.structure.toLowerCase().includes(q) ||
                       item.usage.toLowerCase().includes(q)     ||
                       item.ex_cn.includes(q)                   ||
                       item.ex_vi.toLowerCase().includes(q);
            }
        });

        // Reset flash index on new search
        flashIndex = 0;
        renderCurrentView(filtered);
        updateWordCount(filtered.length);
    }, 150);
}

searchInput.addEventListener('input', handleSearch);

searchClear.addEventListener('click', () => {
    searchInput.value  = '';
    searchClear.hidden = true;
    flashIndex         = 0;
    renderCurrentView(currentData);
    updateWordCount(currentData.length);
    searchInput.focus();
});

// ─── Toast ────────────────────────────────────────────────
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hiding');
        toast.addEventListener('animationend', () => toast.remove(), { once: true });
    }, 2400);
}

// ─── Init ─────────────────────────────────────────────────
loadLevel();
