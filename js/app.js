import { vocabData } from '../data/vocab.js';
import { grammarData } from '../data/grammar.js';

// State
let currentMode = 'vocab';
let currentLevel = 'hsk1Old';
let currentData = [];

// DOM Elements
const btnVocab = document.getElementById('btnVocab');
const btnGrammar = document.getElementById('btnGrammar');
const levelChips = document.getElementById('levelChips');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const tableHeader = document.getElementById('tableHeader');
const appBody = document.getElementById('appBody');
const tableWrapper = document.getElementById('tableWrapper');
const emptyState = document.getElementById('emptyState');
const wordCount = document.getElementById('wordCount');

// Tab switching
btnVocab.addEventListener('click', () => {
    currentMode = 'vocab';
    btnVocab.classList.add('active');
    btnGrammar.classList.remove('active');
    searchInput.placeholder = 'Tìm kiếm từ vựng...';
    loadLevel();
});

btnGrammar.addEventListener('click', () => {
    currentMode = 'grammar';
    btnGrammar.classList.add('active');
    btnVocab.classList.remove('active');
    searchInput.placeholder = 'Tìm kiếm ngữ pháp...';
    loadLevel();
});

// Level chip selection
levelChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    levelChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentLevel = chip.dataset.level;
    loadLevel();
});

// Load data for current level
function loadLevel() {
    const grammarLevel = currentLevel === 'hsk1Old' || currentLevel === 'hsk1New'
        ? 'hsk1'
        : currentLevel;

    currentData = currentMode === 'vocab'
        ? (vocabData[currentLevel] || [])
        : (grammarData[grammarLevel] || []);
    searchInput.value = '';
    searchClear.hidden = true;
    renderTable(currentData);
    updateWordCount(currentData.length);
}

// Update word count badge
function updateWordCount(count) {
    const label = currentMode === 'vocab' ? 'từ' : 'mẫu';
    wordCount.textContent = `${count} ${label}`;
}

// Render table
function renderTable(dataToRender) {
    appBody.innerHTML = '';
    tableHeader.innerHTML = '';

    if (currentMode === 'vocab') {
        tableHeader.innerHTML = `<tr><th>#</th><th>Hán tự</th><th>Pinyin</th><th>Tiếng Việt</th><th>English</th></tr>`;
    } else {
        tableHeader.innerHTML = `<tr><th>#</th><th>Cấu trúc</th><th>Cách dùng</th><th>Ví dụ</th></tr>`;
    }

    if (dataToRender.length === 0) {
        tableWrapper.hidden = true;
        emptyState.hidden = false;
        return;
    }

    tableWrapper.hidden = false;
    emptyState.hidden = true;

    const fragment = document.createDocumentFragment();

    dataToRender.forEach((item, index) => {
        const row = document.createElement('tr');

        if (currentMode === 'vocab') {
            row.innerHTML = `
                <td class="cell-index">${index + 1}</td>
                <td class="cell-hanzi">${item.hanzi}</td>
                <td><span class="cell-pinyin">${item.pinyin}</span></td>
                <td class="cell-vi">${item.vi}</td>
                <td class="cell-en">${item.en}</td>
            `;
        } else {
            row.innerHTML = `
                <td class="cell-index">${index + 1}</td>
                <td class="cell-structure">${item.structure}</td>
                <td class="cell-usage">${item.usage}</td>
                <td class="cell-example">
                    <span class="ex-cn">${item.ex_cn}</span>
                    <span class="ex-py">${item.ex_py}</span>
                    <span class="ex-vi">${item.ex_vi}</span>
                </td>
            `;
        }
        fragment.appendChild(row);
    });

    appBody.appendChild(fragment);
}

// Search functionality with debounce
let searchTimeout;
function handleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = searchInput.value.toLowerCase().trim();
        searchClear.hidden = !query;

        if (!query) {
            renderTable(currentData);
            updateWordCount(currentData.length);
            return;
        }

        const filtered = currentData.filter(item => {
            if (currentMode === 'vocab') {
                return item.hanzi.includes(query) ||
                       item.pinyin.toLowerCase().includes(query) ||
                       item.vi.toLowerCase().includes(query) ||
                       item.en.toLowerCase().includes(query);
            } else {
                return item.structure.toLowerCase().includes(query) ||
                       item.usage.toLowerCase().includes(query) ||
                       item.ex_cn.includes(query) ||
                       item.ex_vi.toLowerCase().includes(query);
            }
        });

        renderTable(filtered);
        updateWordCount(filtered.length);
    }, 150);
}

// Clear search
searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.hidden = true;
    renderTable(currentData);
    updateWordCount(currentData.length);
    searchInput.focus();
});

// Event listeners
searchInput.addEventListener('input', handleSearch);

loadLevel();
