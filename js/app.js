import { vocabData } from '../data/vocab.js';
import { grammarData } from '../data/grammar.js';

const standards = {
    new: {
        label: 'HSK 3.0',
        suffix: 'New',
        maxLevel: 9,
    },
    old: {
        label: 'HSK 2.0',
        suffix: 'Old',
        maxLevel: 6,
    },
};

const progressStorageKey = 'hskMasteryProgress.v1';

let currentMode = 'vocab';
let currentStandard = 'new';
let currentLevel = getFirstPopulatedLevel('vocab');
let currentData = [];
let currentFiltered = [];
let currentView = 'cards';
let currentCardIndex = 0;
let isCardFlipped = false;
let currentRoute = 'study';
let currentReviewFilter = 'all';
let progressState = loadProgressState();

const els = {
    navStudy: document.getElementById('navStudy'),
    navDecks: document.getElementById('navDecks'),
    navReview: document.getElementById('navReview'),
    coursePanel: document.getElementById('coursePanel'),
    btnVocab: document.getElementById('btnVocab'),
    btnGrammar: document.getElementById('btnGrammar'),
    btnHskNew: document.getElementById('btnHskNew'),
    btnHskOld: document.getElementById('btnHskOld'),
    standardPanel: document.getElementById('standardPanel'),
    btnFlashcards: document.getElementById('btnFlashcards'),
    btnListView: document.getElementById('btnListView'),
    cardViewBtn: document.getElementById('cardViewBtn'),
    tableViewBtn: document.getElementById('tableViewBtn'),
    levelChips: document.getElementById('levelChips'),
    levelHint: document.getElementById('levelHint'),
    searchInput: document.getElementById('searchInput'),
    searchClear: document.getElementById('searchClear'),
    tableHeader: document.getElementById('tableHeader'),
    appBody: document.getElementById('appBody'),
    tableWrapper: document.getElementById('tableWrapper'),
    emptyState: document.getElementById('emptyState'),
    deckPanel: document.getElementById('deckPanel'),
    reviewPanel: document.getElementById('reviewPanel'),
    reviewList: document.getElementById('reviewList'),
    reviewAll: document.getElementById('reviewAll'),
    reviewVocab: document.getElementById('reviewVocab'),
    reviewGrammar: document.getElementById('reviewGrammar'),
    wordCount: document.getElementById('wordCount'),
    totalVocab: document.getElementById('totalVocab'),
    totalGrammar: document.getElementById('totalGrammar'),
    bucketNew: document.getElementById('bucketNew'),
    bucketRepeat: document.getElementById('bucketRepeat'),
    resultMeta: document.getElementById('resultMeta'),
    activeLevelLabel: document.getElementById('activeLevelLabel'),
    courseTitle: document.getElementById('courseTitle'),
    surfaceTitle: document.getElementById('surfaceTitle'),
    progressFill: document.getElementById('progressFill'),
    previewHanzi: document.getElementById('previewHanzi'),
    previewPinyin: document.getElementById('previewPinyin'),
    studyCard: document.getElementById('studyCard'),
    cardCounter: document.getElementById('cardCounter'),
    cardHanzi: document.getElementById('cardHanzi'),
    cardPinyin: document.getElementById('cardPinyin'),
    cardAnswer: document.getElementById('cardAnswer'),
    cardMeaning: document.getElementById('cardMeaning'),
    cardExample: document.getElementById('cardExample'),
    prevCard: document.getElementById('prevCard'),
    nextCard: document.getElementById('nextCard'),
    flipCard: document.getElementById('flipCard'),
    studyNotePanel: document.getElementById('studyNotePanel'),
    cardLearned: document.getElementById('cardLearned'),
    cardNote: document.getElementById('cardNote'),
};

const tableConfig = {
    vocab: {
        columns: ['#', 'Hán tự', 'Pinyin', 'Tiếng Việt', 'English', 'Đã học', 'Ghi chú'],
        placeholder: 'Tìm Hán tự, pinyin, nghĩa Việt hoặc English...',
        unit: 'từ',
        label: 'từ vựng',
        title: 'Flashcard từ vựng',
    },
    grammar: {
        columns: ['#', 'Cấu trúc', 'Cách dùng', 'Ví dụ', 'Đã học', 'Ghi chú'],
        placeholder: 'Tìm cấu trúc, cách dùng hoặc ví dụ...',
        unit: 'mẫu',
        label: 'ngữ pháp',
        title: 'Flashcard ngữ pháp',
    },
};

els.navStudy.addEventListener('click', () => showStudyRoute());
els.navDecks.addEventListener('click', () => {
    showStudyRoute();
    els.navStudy.classList.remove('active');
    els.navDecks.classList.add('active');
    setView('table');
});
els.navReview.addEventListener('click', () => showReviewRoute());
els.btnVocab.addEventListener('click', () => switchMode('vocab'));
els.btnGrammar.addEventListener('click', () => switchMode('grammar'));
els.btnHskNew.addEventListener('click', () => switchStandard('new'));
els.btnHskOld.addEventListener('click', () => switchStandard('old'));
els.btnFlashcards.addEventListener('click', () => setView('cards'));
els.btnListView.addEventListener('click', () => setView('table'));
els.cardViewBtn.addEventListener('click', () => setView('cards'));
els.tableViewBtn.addEventListener('click', () => setView('table'));
els.flipCard.addEventListener('click', flipCurrentCard);
els.prevCard.addEventListener('click', () => moveCard(-1));
els.nextCard.addEventListener('click', () => moveCard(1));
els.cardLearned.addEventListener('change', () => {
    const item = currentFiltered[currentCardIndex];
    if (!item) return;
    setProgressValue(getItemKey(currentMode, currentLevel, item), { learned: els.cardLearned.checked });
    renderTable(currentFiltered);
    updateMeta(els.searchInput.value.toLowerCase().trim());
});
els.cardNote.addEventListener('input', () => {
    const item = currentFiltered[currentCardIndex];
    if (!item) return;
    setProgressValue(getItemKey(currentMode, currentLevel, item), { note: els.cardNote.value });
});

els.appBody.addEventListener('change', (event) => {
    const target = event.target.closest('[data-progress-action="learned"]');
    if (!target) return;
    setProgressValue(target.dataset.key, { learned: target.checked });
    syncCardProgressControls();
    updateMeta(els.searchInput.value.toLowerCase().trim());
});

els.appBody.addEventListener('input', (event) => {
    const target = event.target.closest('[data-progress-action="note"]');
    if (!target) return;
    setProgressValue(target.dataset.key, { note: target.value });
    syncCardProgressControls();
});

els.reviewPanel.addEventListener('click', (event) => {
    const filterButton = event.target.closest('.review-filter');
    if (filterButton) {
        currentReviewFilter = filterButton.dataset.filter;
        renderReviewPage();
        return;
    }

    const unlearnButton = event.target.closest('[data-review-action="unlearn"]');
    if (!unlearnButton) return;
    setProgressValue(unlearnButton.dataset.key, { learned: false });
    renderReviewPage();
    renderTable(currentFiltered);
    syncCardProgressControls();
    updateMeta(els.searchInput.value.toLowerCase().trim());
});

els.reviewPanel.addEventListener('input', (event) => {
    const target = event.target.closest('[data-review-action="note"]');
    if (!target) return;
    setProgressValue(target.dataset.key, { note: target.value });
});

els.levelChips.addEventListener('click', (event) => {
    const chip = event.target.closest('.level-chip');
    if (!chip) return;
    currentLevel = chip.dataset.level;
    loadLevel();
});

els.searchClear.addEventListener('click', () => {
    els.searchInput.value = '';
    els.searchClear.hidden = true;
    filterAndRender();
    els.searchInput.focus();
});

let searchTimeout;
els.searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(filterAndRender, 120);
});

function switchMode(mode) {
    if (currentMode === mode) return;

    showStudyRoute(false);
    currentMode = mode;
    currentLevel = getBestLevelForMode(mode, currentLevel);
    els.btnVocab.classList.toggle('active', mode === 'vocab');
    els.btnGrammar.classList.toggle('active', mode === 'grammar');
    els.standardPanel.hidden = mode !== 'vocab';
    els.searchInput.placeholder = tableConfig[mode].placeholder;
    loadLevel();
}

function switchStandard(standard) {
    if (currentStandard === standard) return;

    showStudyRoute(false);
    currentStandard = standard;
    currentLevel = getFirstPopulatedLevel(currentMode);
    els.btnHskNew.classList.toggle('active', standard === 'new');
    els.btnHskOld.classList.toggle('active', standard === 'old');
    loadLevel();
}

function setView(view) {
    if (currentRoute !== 'study') showStudyRoute(false);
    currentView = view;
    els.cardViewBtn.classList.toggle('active', view === 'cards');
    els.tableViewBtn.classList.toggle('active', view === 'table');
    els.deckPanel.hidden = view !== 'cards';
    els.tableWrapper.hidden = view !== 'table' || currentFiltered.length === 0;
    els.reviewPanel.hidden = true;
    els.surfaceTitle.textContent = view === 'cards' ? tableConfig[currentMode].title : 'Danh sách tra cứu';
    renderEmptyState();
}

function showStudyRoute(updateNav = true) {
    currentRoute = 'study';
    if (updateNav) {
        els.navStudy.classList.add('active');
        els.navDecks.classList.remove('active');
        els.navReview.classList.remove('active');
    }
    els.coursePanel.hidden = false;
    els.standardPanel.hidden = currentMode !== 'vocab';
    els.reviewPanel.hidden = true;
    els.emptyState.hidden = true;
    setView(currentView);
    updateMeta(els.searchInput.value.toLowerCase().trim());
}

function showReviewRoute() {
    currentRoute = 'review';
    els.navStudy.classList.remove('active');
    els.navDecks.classList.remove('active');
    els.navReview.classList.add('active');
    els.coursePanel.hidden = true;
    els.deckPanel.hidden = true;
    els.tableWrapper.hidden = true;
    els.emptyState.hidden = true;
    els.reviewPanel.hidden = false;
    renderReviewPage();
}

function getBestLevelForMode(mode, preferredLevel) {
    if (getLevelKeys(mode).includes(preferredLevel) && getData(mode, preferredLevel).length > 0) return preferredLevel;
    return getFirstPopulatedLevel(mode);
}

function getFirstPopulatedLevel(mode) {
    const levelKeys = getLevelKeys(mode);
    return levelKeys.find((level) => getData(mode, level).length > 0) || levelKeys[0];
}

function getData(mode, level) {
    return mode === 'vocab'
        ? (vocabData[level] || vocabData[getBaseLevelKey(level)] || [])
        : (grammarData[level] || []);
}

function getTotal(mode) {
    return getLevelKeys(mode).reduce((sum, level) => sum + getData(mode, level).length, 0);
}

function getLevelKeys(mode) {
    if (mode === 'grammar') {
        return Object.keys(grammarData)
            .filter((key) => /^hsk\d+$/.test(key))
            .sort(sortLevelKeys);
    }

    const { suffix, maxLevel } = standards[currentStandard];
    return Array.from({ length: maxLevel }, (_, index) => `hsk${index + 1}${suffix}`);
}

function getBaseLevelKey(level) {
    return level.replace(/(Old|New)$/, '');
}

function sortLevelKeys(a, b) {
    return getLevelNumber(a) - getLevelNumber(b);
}

function getLevelNumber(level) {
    return Number(level.match(/\d+/)?.[0] || 0);
}

function renderLevelChips() {
    const fragment = document.createDocumentFragment();

    getLevelKeys(currentMode).forEach((level) => {
        const count = getData(currentMode, level).length;
        const chip = document.createElement('button');
        chip.className = `level-chip${level === currentLevel ? ' active' : ''}${count === 0 ? ' is-empty' : ''}`;
        chip.type = 'button';
        chip.dataset.level = level;
        chip.setAttribute('aria-pressed', String(level === currentLevel));
        chip.innerHTML = `
            <span>${formatLevel(level)}</span>
            <strong>${count || '-'}</strong>
        `;
        fragment.appendChild(chip);
    });

    els.levelChips.replaceChildren(fragment);
}

function loadLevel() {
    currentData = getData(currentMode, currentLevel);
    currentCardIndex = 0;
    isCardFlipped = false;
    els.searchInput.value = '';
    els.searchClear.hidden = true;
    renderLevelChips();
    filterAndRender();
}

function filterAndRender() {
    const query = els.searchInput.value.toLowerCase().trim();
    els.searchClear.hidden = !query;
    currentCardIndex = 0;
    isCardFlipped = false;

    currentFiltered = query
        ? currentData.filter((item) => matchesSearch(item, query))
        : currentData;

    renderTable(currentFiltered);
    renderCard();
    updateMeta(query);
    setView(currentView);
}

function matchesSearch(item, query) {
    if (currentMode === 'vocab') {
        return item.hanzi.includes(query)
            || item.pinyin.toLowerCase().includes(query)
            || getMeaning(item).toLowerCase().includes(query)
            || getEnglish(item).toLowerCase().includes(query);
    }

    return item.structure.toLowerCase().includes(query)
        || item.usage.toLowerCase().includes(query)
        || item.ex_cn.includes(query)
        || item.ex_py.toLowerCase().includes(query)
        || item.ex_vi.toLowerCase().includes(query)
        || (item.source || '').toLowerCase().includes(query);
}

function updateMeta(query) {
    const levelName = formatLevel(currentLevel);
    const standardName = currentMode === 'vocab' ? standards[currentStandard].label : 'Grammar';
    const config = tableConfig[currentMode];
    const total = currentData.length;
    const visible = currentFiltered.length;
    const learned = countLearned(currentMode, currentLevel, currentData);
    const progress = total ? Math.max(learned > 0 ? 8 : 0, Math.round((learned / total) * 100)) : 0;
    const newBucket = Math.max(0, total - learned);

    els.wordCount.textContent = `${visible} ${config.unit}`;
    els.activeLevelLabel.textContent = levelName;
    els.courseTitle.textContent = `${levelName} ${currentMode === 'vocab' ? `Vocabulary - ${standardName}` : 'Grammar'}`;
    els.levelHint.textContent = `${total} ${config.label} trong bộ hiện tại. Chọn thẻ, lật nghĩa, rồi chuyển sang mục kế tiếp.`;
    els.bucketNew.textContent = newBucket;
    els.bucketRepeat.textContent = learned;
    els.progressFill.style.width = `${progress}%`;

    if (query) {
        els.resultMeta.textContent = `Tìm thấy ${visible}/${total} ${config.unit} cho "${query}".`;
    } else if (total === 0) {
        els.resultMeta.textContent = `${levelName} chưa có dữ liệu ${config.label}.`;
    } else {
        els.resultMeta.textContent = `Đang học ${visible} ${config.unit} của ${levelName}.`;
    }
}

function renderCard() {
    const item = currentFiltered[currentCardIndex];
    const hasCards = Boolean(item);
    els.studyCard.classList.toggle('is-flipped', isCardFlipped);
    els.prevCard.disabled = !hasCards || currentFiltered.length < 2;
    els.nextCard.disabled = !hasCards || currentFiltered.length < 2;
    els.flipCard.disabled = !hasCards;
    els.studyNotePanel.hidden = !hasCards;

    if (!hasCards) {
        els.cardCounter.textContent = '0 / 0';
        els.cardHanzi.textContent = '...';
        els.cardPinyin.textContent = 'Không có thẻ';
        els.cardMeaning.textContent = 'Không tìm thấy nội dung phù hợp.';
        els.cardExample.textContent = 'Hãy thử từ khóa khác hoặc đổi cấp HSK.';
        els.previewHanzi.textContent = 'HSK';
        els.previewPinyin.textContent = 'ready';
        syncCardProgressControls();
        return;
    }

    els.cardCounter.textContent = `${currentCardIndex + 1} / ${currentFiltered.length}`;

    if (currentMode === 'vocab') {
        els.cardHanzi.textContent = item.hanzi;
        els.cardPinyin.textContent = item.pinyin;
        els.cardMeaning.textContent = getMeaning(item);
        els.cardExample.textContent = getEnglish(item);
        els.previewHanzi.textContent = item.hanzi;
        els.previewPinyin.textContent = item.pinyin;
        syncCardProgressControls();
        return;
    }

    els.cardHanzi.textContent = item.structure;
    els.cardPinyin.textContent = item.usage;
    els.cardMeaning.textContent = item.ex_cn || item.usage;
    els.cardExample.textContent = getGrammarExampleDetail(item);
    els.previewHanzi.textContent = '语法';
    els.previewPinyin.textContent = item.structure;
    syncCardProgressControls();
}

function flipCurrentCard() {
    isCardFlipped = !isCardFlipped;
    renderCard();
}

function moveCard(step) {
    if (currentFiltered.length === 0) return;
    currentCardIndex = (currentCardIndex + step + currentFiltered.length) % currentFiltered.length;
    isCardFlipped = false;
    renderCard();
}

function renderTable(dataToRender) {
    els.appBody.innerHTML = '';
    els.tableHeader.innerHTML = buildHeader(tableConfig[currentMode].columns);

    const fragment = document.createDocumentFragment();

    dataToRender.forEach((item, index) => {
        const row = document.createElement('tr');
        const key = getItemKey(currentMode, currentLevel, item);
        const progress = getProgress(key);
        const progressCells = buildProgressCells(key, progress);

        if (currentMode === 'vocab') {
            row.innerHTML = `
                <td class="cell-index" data-label="#">${index + 1}</td>
                <td class="cell-hanzi" data-label="Hán tự">${escapeHtml(item.hanzi)}</td>
                <td data-label="Pinyin"><span class="cell-pinyin">${escapeHtml(item.pinyin)}</span></td>
                <td class="cell-vi" data-label="Tiếng Việt">${escapeHtml(getMeaning(item))}</td>
                <td class="cell-en" data-label="English">${escapeHtml(getEnglish(item))}</td>
                ${progressCells}
            `;
        } else {
            row.innerHTML = `
                <td class="cell-index" data-label="#">${index + 1}</td>
                <td class="cell-structure" data-label="Cấu trúc">${escapeHtml(item.structure)}</td>
                <td class="cell-usage" data-label="Cách dùng">${escapeHtml(item.usage)}</td>
                <td class="cell-example" data-label="Ví dụ">
                    <span class="ex-cn">${escapeHtml(item.ex_cn)}</span>
                    <span class="ex-py">${escapeHtml(item.ex_py)}</span>
                    <span class="ex-vi">${escapeHtml(item.ex_vi)}</span>
                </td>
                ${progressCells}
            `;
        }

        fragment.appendChild(row);
    });

    els.appBody.appendChild(fragment);
}

function buildProgressCells(key, progress) {
    return `
        <td class="cell-learned" data-label="Đã học">
            <label class="learned-toggle">
                <input type="checkbox" data-progress-action="learned" data-key="${escapeHtml(key)}" ${progress.learned ? 'checked' : ''}>
                <span>Đã học</span>
            </label>
        </td>
        <td class="cell-note" data-label="Ghi chú">
            <textarea class="note-input" rows="2" data-progress-action="note" data-key="${escapeHtml(key)}" placeholder="Ghi chú...">${escapeHtml(progress.note)}</textarea>
        </td>
    `;
}

function renderReviewPage() {
    const learnedItems = getLearnedItems()
        .filter((entry) => currentReviewFilter === 'all' || entry.mode === currentReviewFilter);

    els.reviewAll.classList.toggle('active', currentReviewFilter === 'all');
    els.reviewVocab.classList.toggle('active', currentReviewFilter === 'vocab');
    els.reviewGrammar.classList.toggle('active', currentReviewFilter === 'grammar');
    els.surfaceTitle.textContent = 'Ôn tập đã học';
    els.wordCount.textContent = `${learnedItems.length} mục`;
    els.activeLevelLabel.textContent = 'Review';
    els.courseTitle.textContent = 'Ôn tập từ vựng & ngữ pháp đã học';
    els.levelHint.textContent = 'Tất cả mục bạn đã đánh dấu "Đã học" sẽ xuất hiện ở đây để xem lại nhanh.';
    els.progressFill.style.width = learnedItems.length ? '100%' : '0%';
    els.resultMeta.textContent = learnedItems.length
        ? `Có ${learnedItems.length} mục đã học trong danh sách ôn tập.`
        : 'Chưa có mục nào được đánh dấu đã học.';

    if (learnedItems.length === 0) {
        els.reviewList.innerHTML = `
            <div class="review-empty">
                <strong>Chưa có gì để ôn tập</strong>
                <span>Đánh dấu "Đã học" ở bảng hoặc flashcard, mục đó sẽ xuất hiện tại đây.</span>
            </div>
        `;
        return;
    }

    els.reviewList.innerHTML = learnedItems.map((entry) => buildReviewItem(entry)).join('');
}

function buildReviewItem(entry) {
    const note = entry.progress.note || '';
    const source = `${entry.mode === 'vocab' ? 'Từ vựng' : 'Ngữ pháp'} • ${formatLevel(entry.level)}${entry.standard ? ` • ${entry.standard}` : ''}`;

    if (entry.mode === 'vocab') {
        return `
            <article class="review-item">
                <div class="review-item-main">
                    <span class="review-tag">${escapeHtml(source)}</span>
                    <h4 class="review-hanzi">${escapeHtml(entry.item.hanzi)}</h4>
                    <p class="review-pinyin">${escapeHtml(entry.item.pinyin)}</p>
                    <p>${escapeHtml(getMeaning(entry.item))}</p>
                    <span>${escapeHtml(getEnglish(entry.item))}</span>
                </div>
                ${buildReviewControls(entry.key, note)}
            </article>
        `;
    }

    return `
        <article class="review-item">
            <div class="review-item-main">
                <span class="review-tag">${escapeHtml(source)}</span>
                <h4>${escapeHtml(entry.item.structure)}</h4>
                <p>${escapeHtml(entry.item.usage)}</p>
                <span>${escapeHtml(getGrammarExampleDetail(entry.item))}</span>
            </div>
            ${buildReviewControls(entry.key, note)}
        </article>
    `;
}

function buildReviewControls(key, note) {
    return `
        <div class="review-controls">
            <textarea class="note-input" rows="3" data-review-action="note" data-key="${escapeHtml(key)}" placeholder="Ghi chú ôn tập...">${escapeHtml(note)}</textarea>
            <button class="unlearn-action" type="button" data-review-action="unlearn" data-key="${escapeHtml(key)}">Bỏ đã học</button>
        </div>
    `;
}

function renderEmptyState() {
    if (currentRoute === 'review') {
        els.emptyState.hidden = true;
        return;
    }
    const isEmpty = currentFiltered.length === 0;
    els.emptyState.hidden = !isEmpty;
    if (isEmpty) {
        els.tableWrapper.hidden = true;
        els.deckPanel.hidden = true;
    } else {
        els.deckPanel.hidden = currentView !== 'cards';
        els.tableWrapper.hidden = currentView !== 'table';
    }
}

function syncCardProgressControls() {
    const item = currentFiltered[currentCardIndex];
    if (!item) {
        els.cardLearned.checked = false;
        els.cardNote.value = '';
        return;
    }

    const progress = getProgress(getItemKey(currentMode, currentLevel, item));
    els.cardLearned.checked = progress.learned;
    els.cardNote.value = progress.note;
}

function countLearned(mode, level, items) {
    return items.reduce((sum, item) => sum + (getProgress(getItemKey(mode, level, item)).learned ? 1 : 0), 0);
}

function getLearnedItems() {
    const entries = [];

    getReviewLevelKeys('vocab').forEach((level) => {
        getData('vocab', level).forEach((item) => {
            const key = getItemKey('vocab', level, item);
            const progress = getProgress(key);
            if (!progress.learned) return;
            entries.push({
                mode: 'vocab',
                level,
                standard: level.endsWith('New') ? 'HSK 3.0' : 'HSK 2.0',
                item,
                key,
                progress,
            });
        });
    });

    getReviewLevelKeys('grammar').forEach((level) => {
        getData('grammar', level).forEach((item) => {
            const key = getItemKey('grammar', level, item);
            const progress = getProgress(key);
            if (!progress.learned) return;
            entries.push({ mode: 'grammar', level, item, key, progress });
        });
    });

    return entries.sort((a, b) => (b.progress.updatedAt || '').localeCompare(a.progress.updatedAt || ''));
}

function getReviewLevelKeys(mode) {
    if (mode === 'grammar') {
        return Object.keys(grammarData)
            .filter((key) => /^hsk\d+$/.test(key))
            .sort(sortLevelKeys);
    }

    return Object.keys(vocabData)
        .filter((key) => /^hsk\d+(Old|New)$/.test(key))
        .sort((a, b) => {
            const numberDiff = getLevelNumber(a) - getLevelNumber(b);
            if (numberDiff !== 0) return numberDiff;
            return a.endsWith('New') ? -1 : 1;
        });
}

function getItemKey(mode, level, item) {
    if (mode === 'vocab') {
        return ['vocab', level, item.hanzi, item.pinyin].map(slugPart).join(':');
    }

    return ['grammar', level, item.structure, item.source || item.ex_cn || item.usage].map(slugPart).join(':');
}

function slugPart(value) {
    return encodeURIComponent(String(value ?? '').trim().toLowerCase());
}

function getProgress(key) {
    return {
        learned: Boolean(progressState[key]?.learned),
        note: progressState[key]?.note || '',
        updatedAt: progressState[key]?.updatedAt || '',
    };
}

function setProgressValue(key, patch) {
    progressState[key] = {
        ...getProgress(key),
        ...patch,
        updatedAt: new Date().toISOString(),
    };

    if (!progressState[key].learned && !progressState[key].note) {
        delete progressState[key];
    }

    saveProgressState();
}

function loadProgressState() {
    if (typeof localStorage === 'undefined') return {};

    try {
        const parsed = JSON.parse(localStorage.getItem(progressStorageKey) || '{}');
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    } catch {
        return {};
    }
}

function saveProgressState() {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(progressStorageKey, JSON.stringify(progressState));
}

function buildHeader(columns) {
    return `<tr>${columns.map((column) => `<th>${column}</th>`).join('')}</tr>`;
}

function getMeaning(item) {
    return item.vi || item.en || '';
}

function getEnglish(item) {
    return item.en || item.vi || '';
}

function getGrammarExampleDetail(item) {
    return [item.ex_py, item.ex_vi].filter(Boolean).join(' - ') || item.source || '';
}

function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function formatLevel(level) {
    return `HSK ${getLevelNumber(level)}`;
}

function init() {
    els.totalVocab.textContent = getTotal('vocab');
    els.totalGrammar.textContent = getTotal('grammar');
    els.searchInput.placeholder = tableConfig[currentMode].placeholder;
    loadLevel();
}

init();
