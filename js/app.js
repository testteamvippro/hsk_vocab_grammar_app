import { vocabData } from '../data/vocab.js';
import { grammarData } from '../data/grammar.js';
import { testData } from '../data/tests.js';

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
const statsStorageKey = 'hskMasteryStats.v1';
const dailyGoalTarget = 20;
const reviewIntervals = [1, 3, 7, 14, 30];
const strokeBasics = [
    { mark: '一', name: 'Ngang', pinyin: 'heng', tip: 'Viết từ trái sang phải.' },
    { mark: '丨', name: 'Sổ', pinyin: 'shu', tip: 'Viết từ trên xuống dưới.' },
    { mark: '丿', name: 'Phẩy', pinyin: 'pie', tip: 'Kéo chéo xuống bên trái.' },
    { mark: '丶', name: 'Chấm', pinyin: 'dian', tip: 'Đặt nét ngắn, dứt khoát.' },
    { mark: '㇏', name: 'Mác', pinyin: 'na', tip: 'Kéo chéo xuống bên phải.' },
    { mark: '㇀', name: 'Hất', pinyin: 'ti', tip: 'Hất lên nhanh ở cuối nét.' },
    { mark: '㇆', name: 'Móc', pinyin: 'gou', tip: 'Đổi hướng và móc ở cuối nét.' },
    { mark: '㇕', name: 'Gập', pinyin: 'zhe', tip: 'Gập góc, không nhấc bút giữa nét.' },
];
const strokeRules = [
    { rule: 'Ngang trước, sổ sau', example: '十: 一 rồi 丨' },
    { rule: 'Phẩy trước, mác sau', example: '人: 丿 rồi ㇏' },
    { rule: 'Trên trước, dưới sau', example: '三: nét trên rồi đến nét dưới' },
    { rule: 'Trái trước, phải sau', example: '你: 亻 trước, 尔 sau' },
    { rule: 'Ngoài trước, trong sau', example: '同: khung ngoài rồi phần trong' },
    { rule: 'Vào trong trước, đóng khung sau', example: '国: viết 玉 rồi đóng nét dưới' },
    { rule: 'Giữa trước, hai bên sau', example: '小: 丨 trước rồi hai chấm' },
];
const toneGuide = [
    { tone: '1', mark: 'mā', shape: 'cao ngang', cue: 'Giữ giọng đều và cao.' },
    { tone: '2', mark: 'má', shape: 'đi lên', cue: 'Giống khi hỏi lại: hả?' },
    { tone: '3', mark: 'mǎ', shape: 'xuống rồi lên', cue: 'Hạ giọng thấp, rồi nhấc lên nhẹ.' },
    { tone: '4', mark: 'mà', shape: 'rơi mạnh', cue: 'Ngắn, dứt khoát như ra lệnh.' },
    { tone: '0', mark: 'ma', shape: 'nhẹ', cue: 'Đọc nhẹ, ngắn, không nhấn.' },
];
const pinyinInitials = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w'];
const pinyinFinals = ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ao', 'ou', 'an', 'en', 'ang', 'eng', 'ong', 'ia', 'ie', 'iao', 'iu', 'ian', 'in', 'iang', 'ing', 'iong', 'ua', 'uo', 'uai', 'ui', 'uan', 'un', 'uang', 'ueng', 'üe', 'üan', 'ün'];
const kangxiRadicals = Array.from({ length: 214 }, (_, index) => ({
    number: index + 1,
    symbol: String.fromCodePoint(0x2f00 + index),
}));
const radicalGroups = [
    {
        title: 'Con người & hành động',
        items: [
            { radical: '人 / 亻', pinyin: 'ren', meaning: 'người', examples: '你, 他, 休' },
            { radical: '口', pinyin: 'kou', meaning: 'miệng, nói', examples: '吗, 吃, 叫' },
            { radical: '心 / 忄', pinyin: 'xin', meaning: 'tim, cảm xúc', examples: '想, 忙, 怕' },
            { radical: '手 / 扌', pinyin: 'shou', meaning: 'tay, hành động', examples: '打, 找, 把' },
            { radical: '足', pinyin: 'zu', meaning: 'chân, di chuyển', examples: '跑, 路, 跟' },
        ],
    },
    {
        title: 'Tự nhiên & vật chất',
        items: [
            { radical: '水 / 氵', pinyin: 'shui', meaning: 'nước', examples: '没, 河, 洗' },
            { radical: '火 / 灬', pinyin: 'huo', meaning: 'lửa, nhiệt', examples: '热, 点, 照' },
            { radical: '木', pinyin: 'mu', meaning: 'cây, gỗ', examples: '杯, 校, 林' },
            { radical: '土', pinyin: 'tu', meaning: 'đất', examples: '地, 城, 坐' },
            { radical: '金 / 钅', pinyin: 'jin', meaning: 'kim loại, tiền', examples: '钱, 钟, 银' },
        ],
    },
    {
        title: 'Nhận thức & đời sống',
        items: [
            { radical: '日', pinyin: 'ri', meaning: 'mặt trời, ngày', examples: '明, 时, 昨' },
            { radical: '月', pinyin: 'yue', meaning: 'trăng, thịt/cơ thể', examples: '朋, 服, 脑' },
            { radical: '目', pinyin: 'mu', meaning: 'mắt, nhìn', examples: '看, 睡, 眼' },
            { radical: '言 / 讠', pinyin: 'yan', meaning: 'lời nói', examples: '说, 语, 请' },
            { radical: '食 / 饣', pinyin: 'shi', meaning: 'ăn uống', examples: '饭, 饮, 饿' },
        ],
    },
];
const writingPracticeWords = [
    { hanzi: '你', pinyin: 'ni3', display: 'nǐ', radical: '亻', hint: 'Trái trước phải sau: 亻 rồi 尔.' },
    { hanzi: '好', pinyin: 'hao3', display: 'hǎo', radical: '女', hint: '女 bên trái, 子 bên phải.' },
    { hanzi: '学', pinyin: 'xue2', display: 'xué', radical: '子', hint: 'Trên trước dưới sau; nhớ phần 子 ở dưới.' },
    { hanzi: '喝', pinyin: 'he1', display: 'hē', radical: '口', hint: 'Bộ 口 gợi nghĩa liên quan miệng/uống.' },
    { hanzi: '想', pinyin: 'xiang3', display: 'xiǎng', radical: '心', hint: '心 ở dưới gợi nghĩa suy nghĩ/cảm xúc.' },
    { hanzi: '钱', pinyin: 'qian2', display: 'qián', radical: '钅', hint: '钅 liên quan kim loại/tiền.' },
];

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
let showAllTests = false;
let progressState = loadProgressState();
let statsState = loadStatsState();
let currentExam = null;
let aiMessages = [];
let videoObjectUrl = '';
let subtitleCues = [];
let activeSubtitleIndex = -1;

const els = {
    navStudy: document.getElementById('navStudy'),
    navDecks: document.getElementById('navDecks'),
    navReview: document.getElementById('navReview'),
    navExam: document.getElementById('navExam'),
    navTests: document.getElementById('navTests'),
    navVideo: document.getElementById('navVideo'),
    navWriting: document.getElementById('navWriting'),
    navAi: document.getElementById('navAi'),
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
    reviewDue: document.getElementById('reviewDue'),
    reviewVocab: document.getElementById('reviewVocab'),
    reviewGrammar: document.getElementById('reviewGrammar'),
    examPanel: document.getElementById('examPanel'),
    examTitle: document.getElementById('examTitle'),
    examIntro: document.getElementById('examIntro'),
    startExam: document.getElementById('startExam'),
    examStudyLevel: document.getElementById('examStudyLevel'),
    examBody: document.getElementById('examBody'),
    testPanel: document.getElementById('testPanel'),
    testList: document.getElementById('testList'),
    testStudyLevel: document.getElementById('testStudyLevel'),
    videoPanel: document.getElementById('videoPanel'),
    learningVideo: document.getElementById('learningVideo'),
    videoFileInput: document.getElementById('videoFileInput'),
    subtitleFileInput: document.getElementById('subtitleFileInput'),
    prevSubtitle: document.getElementById('prevSubtitle'),
    replaySubtitle: document.getElementById('replaySubtitle'),
    nextSubtitle: document.getElementById('nextSubtitle'),
    videoSpeed: document.getElementById('videoSpeed'),
    subtitleText: document.getElementById('subtitleText'),
    loadSubtitleText: document.getElementById('loadSubtitleText'),
    subtitleOverlay: document.getElementById('subtitleOverlay'),
    activeSubtitleTime: document.getElementById('activeSubtitleTime'),
    activeSubtitleText: document.getElementById('activeSubtitleText'),
    activeSubtitleTranslation: document.getElementById('activeSubtitleTranslation'),
    videoVocabCount: document.getElementById('videoVocabCount'),
    videoVocabList: document.getElementById('videoVocabList'),
    subtitleList: document.getElementById('subtitleList'),
    writingPanel: document.getElementById('writingPanel'),
    writingContent: document.getElementById('writingContent'),
    aiPanel: document.getElementById('aiPanel'),
    aiMessages: document.getElementById('aiMessages'),
    aiQuickPrompts: document.getElementById('aiQuickPrompts'),
    aiForm: document.getElementById('aiForm'),
    aiInput: document.getElementById('aiInput'),
    wordCount: document.getElementById('wordCount'),
    dailyGoal: document.getElementById('dailyGoal'),
    streakCount: document.getElementById('streakCount'),
    xpCount: document.getElementById('xpCount'),
    dueCount: document.getElementById('dueCount'),
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
        columns: ['#', 'Hán tự', 'Pinyin', 'Tiếng Việt', 'English', 'Đã học'],
        placeholder: 'Tìm Hán tự, pinyin, nghĩa Việt hoặc English...',
        unit: 'từ',
        label: 'từ vựng',
        title: 'Flashcard từ vựng',
    },
    grammar: {
        columns: ['#', 'Cấu trúc', 'Cách dùng', 'Ví dụ', 'Đã học'],
        placeholder: 'Tìm cấu trúc, cách dùng hoặc ví dụ...',
        unit: 'mẫu',
        label: 'ngữ pháp',
        title: 'Flashcard ngữ pháp',
    },
};

const routeConfig = {
    study: {
        nav: 'navStudy',
        showCoursePanel: true,
    },
    review: {
        nav: 'navReview',
        panel: 'reviewPanel',
    },
    exam: {
        nav: 'navExam',
        panel: 'examPanel',
        forceVocab: true,
    },
    tests: {
        nav: 'navTests',
        panel: 'testPanel',
        forceVocab: true,
    },
    video: {
        nav: 'navVideo',
        panel: 'videoPanel',
        forceVocab: true,
    },
    writing: {
        nav: 'navWriting',
        panel: 'writingPanel',
    },
    ai: {
        nav: 'navAi',
        panel: 'aiPanel',
        forceVocab: true,
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
els.navExam.addEventListener('click', () => showExamRoute());
els.navTests.addEventListener('click', () => showTestRoute());
els.navVideo.addEventListener('click', () => showVideoRoute());
els.navWriting.addEventListener('click', () => showWritingRoute());
els.navAi.addEventListener('click', () => showAiRoute());
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

els.reviewPanel.addEventListener('click', (event) => {
    const filterButton = event.target.closest('.review-filter');
    if (filterButton) {
        currentReviewFilter = filterButton.dataset.filter;
        renderReviewPage();
        return;
    }

    const unlearnButton = event.target.closest('[data-review-action="unlearn"]');
    const reviewedButton = event.target.closest('[data-review-action="reviewed"]');
    if (!unlearnButton && !reviewedButton) return;
    if (unlearnButton) setProgressValue(unlearnButton.dataset.key, { learned: false });
    if (reviewedButton) setProgressValue(reviewedButton.dataset.key, { reviewed: true });
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

els.startExam.addEventListener('click', startExam);
els.examStudyLevel.addEventListener('click', () => showStudyRoute());
els.testStudyLevel.addEventListener('click', () => showStudyRoute());
els.examBody.addEventListener('click', (event) => {
    const option = event.target.closest('[data-exam-option]');
    if (option) {
        answerExamQuestion(Number(option.dataset.examOption));
        return;
    }

    if (event.target.closest('[data-exam-action="next"]')) {
        moveExam(1);
        return;
    }

    if (event.target.closest('[data-exam-action="restart"]')) {
        startExam();
    }
});

els.testPanel.addEventListener('click', (event) => {
    const allButton = event.target.closest('[data-test-all]');
    if (allButton) {
        showAllTests = true;
        renderTestPage();
        return;
    }

    const levelButton = event.target.closest('[data-test-level]');
    if (!levelButton) return;
    showAllTests = false;
    currentLevel = getLevelKeyForNumber(Number(levelButton.dataset.testLevel));
    renderLevelChips();
    renderTestPage();
});

els.videoFileInput.addEventListener('change', handleVideoFileChange);
els.subtitleFileInput.addEventListener('change', handleSubtitleFileChange);
els.prevSubtitle.addEventListener('click', () => seekRelativeSubtitle(-1));
els.replaySubtitle.addEventListener('click', replayActiveSubtitle);
els.nextSubtitle.addEventListener('click', () => seekRelativeSubtitle(1));
els.videoSpeed.addEventListener('change', () => {
    els.learningVideo.playbackRate = Number(els.videoSpeed.value) || 1;
});
els.loadSubtitleText.addEventListener('click', () => loadSubtitleText(els.subtitleText.value));
els.learningVideo.addEventListener('timeupdate', syncSubtitleToVideo);
els.learningVideo.addEventListener('seeked', syncSubtitleToVideo);
els.subtitleList.addEventListener('click', (event) => {
    const cueButton = event.target.closest('[data-subtitle-index]');
    if (!cueButton) return;
    seekSubtitle(Number(cueButton.dataset.subtitleIndex), true);
});
els.videoVocabList.addEventListener('click', (event) => {
    const learnedButton = event.target.closest('[data-video-vocab-key]');
    if (!learnedButton) return;
    setProgressValue(learnedButton.dataset.videoVocabKey, { learned: true });
    renderActiveSubtitle();
    renderMotivationStats();
});

els.aiQuickPrompts.addEventListener('click', (event) => {
    const promptButton = event.target.closest('[data-ai-prompt]');
    if (!promptButton) return;
    submitAiMessage(promptButton.dataset.aiPrompt);
});

els.aiForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitAiMessage(els.aiInput.value);
});

els.levelChips.addEventListener('click', (event) => {
    const chip = event.target.closest('.level-chip');
    if (!chip) return;
    currentLevel = chip.dataset.level;
    if (currentRoute === 'exam') {
        renderLevelChips();
        renderExamSetup();
        return;
    }
    if (currentRoute === 'tests') {
        renderLevelChips();
        renderTestPage();
        return;
    }
    if (currentRoute === 'video') {
        renderLevelChips();
        renderActiveSubtitle();
        return;
    }
    if (currentRoute === 'ai') {
        renderLevelChips();
        renderAiPanel(false);
        return;
    }
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

    const wasExam = currentRoute === 'exam';
    const wasTests = currentRoute === 'tests';
    const wasVideo = currentRoute === 'video';
    const wasAi = currentRoute === 'ai';
    if (!wasExam && !wasTests && !wasVideo && !wasAi) showStudyRoute(false);
    currentStandard = standard;
    currentLevel = getFirstPopulatedLevel(currentMode);
    els.btnHskNew.classList.toggle('active', standard === 'new');
    els.btnHskOld.classList.toggle('active', standard === 'old');
    if (wasExam) {
        renderLevelChips();
        renderExamSetup();
        return;
    }
    if (wasTests) {
        renderLevelChips();
        renderTestPage();
        return;
    }
    if (wasVideo) {
        renderLevelChips();
        renderActiveSubtitle();
        return;
    }
    if (wasAi) {
        renderLevelChips();
        renderAiPanel(false);
        return;
    }
    loadLevel();
}

function setView(view) {
    if (currentRoute !== 'study') showStudyRoute();
    currentView = view;
    els.cardViewBtn.classList.toggle('active', view === 'cards');
    els.tableViewBtn.classList.toggle('active', view === 'table');
    els.deckPanel.hidden = view !== 'cards';
    els.tableWrapper.hidden = view !== 'table' || currentFiltered.length === 0;
    hideRoutePanels();
    els.surfaceTitle.textContent = view === 'cards' ? tableConfig[currentMode].title : 'Danh sách tra cứu';
    renderEmptyState();
}

function showStudyRoute(updateNav = true) {
    activateRoute('study', { updateNav });
    setView(currentView);
    updateMeta(els.searchInput.value.toLowerCase().trim());
}

function showReviewRoute() {
    activateRoute('review');
    renderReviewPage();
}

function showExamRoute() {
    activateRoute('exam');
    renderExamSetup();
}

function showTestRoute() {
    activateRoute('tests');
    renderTestPage();
}

function showVideoRoute() {
    activateRoute('video');
    renderVideoPanel();
}

function showWritingRoute() {
    activateRoute('writing');
    renderWritingPage();
}

function showAiRoute() {
    activateRoute('ai');
    renderAiPanel();
}

function activateRoute(route, options = {}) {
    const config = routeConfig[route];
    currentRoute = route;
    document.body.dataset.route = route;

    if (config.forceVocab) {
        forceVocabMode();
    }

    if (options.updateNav !== false) {
        setActiveNav(config.nav);
    }

    hideRoutePanels();
    els.coursePanel.hidden = !config.showCoursePanel && !config.forceVocab;
    els.standardPanel.hidden = currentMode !== 'vocab';
    els.deckPanel.hidden = route !== 'study';
    els.tableWrapper.hidden = true;
    els.emptyState.hidden = true;

    if (config.panel) {
        els[config.panel].hidden = false;
    }
}

function forceVocabMode() {
    currentMode = 'vocab';
    currentLevel = getBestLevelForMode('vocab', currentLevel);
    els.btnVocab.classList.add('active');
    els.btnGrammar.classList.remove('active');
    els.searchInput.placeholder = tableConfig.vocab.placeholder;
    renderLevelChips();
}

function setActiveNav(activeKey) {
    Object.values(routeConfig).forEach((config) => {
        if (!config.nav) return;
        els[config.nav].classList.toggle('active', config.nav === activeKey);
    });
    els.navDecks.classList.toggle('active', activeKey === 'navDecks');
}

function hideRoutePanels() {
    els.reviewPanel.hidden = true;
    els.examPanel.hidden = true;
    els.testPanel.hidden = true;
    els.videoPanel.hidden = true;
    els.writingPanel.hidden = true;
    els.aiPanel.hidden = true;
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

    els.wordCount.textContent = `${visible} ${config.unit}`;
    els.activeLevelLabel.textContent = levelName;
    els.courseTitle.textContent = `${levelName} ${currentMode === 'vocab' ? `Vocabulary - ${standardName}` : 'Grammar'}`;
    els.levelHint.textContent = `${total} ${config.label} trong bộ hiện tại. Chọn thẻ, lật nghĩa, rồi chuyển sang mục kế tiếp.`;
    els.progressFill.style.width = `${progress}%`;
    renderMotivationStats();

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
    `;
}

function renderReviewPage() {
    const learnedItems = getLearnedItems()
        .filter((entry) => currentReviewFilter === 'all'
            || entry.mode === currentReviewFilter
            || (currentReviewFilter === 'due' && isDue(entry.progress)));

    els.reviewAll.classList.toggle('active', currentReviewFilter === 'all');
    els.reviewDue.classList.toggle('active', currentReviewFilter === 'due');
    els.reviewVocab.classList.toggle('active', currentReviewFilter === 'vocab');
    els.reviewGrammar.classList.toggle('active', currentReviewFilter === 'grammar');
    els.surfaceTitle.textContent = 'Ôn tập đã học';
    els.wordCount.textContent = `${learnedItems.length} mục`;
    els.activeLevelLabel.textContent = 'Review';
    els.courseTitle.textContent = 'Ôn tập từ vựng & ngữ pháp đã học';
    els.levelHint.textContent = 'Tất cả mục bạn đã đánh dấu "Đã học" sẽ xuất hiện ở đây để xem lại nhanh.';
    els.progressFill.style.width = learnedItems.length ? '100%' : '0%';
    els.resultMeta.textContent = learnedItems.length
        ? `Có ${learnedItems.length} mục trong danh sách ôn tập.`
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
            <button class="reviewed-action" type="button" data-review-action="reviewed" data-key="${escapeHtml(key)}">Đã ôn xong</button>
            <button class="unlearn-action" type="button" data-review-action="unlearn" data-key="${escapeHtml(key)}">Bỏ đã học</button>
        </div>
    `;
}

function renderEmptyState() {
    if (currentRoute === 'review' || currentRoute === 'exam' || currentRoute === 'tests' || currentRoute === 'writing' || currentRoute === 'ai') {
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
        learnedAt: progressState[key]?.learnedAt || '',
        reviewStage: Number(progressState[key]?.reviewStage || 0),
        dueAt: progressState[key]?.dueAt || '',
    };
}

function setProgressValue(key, patch) {
    const previous = getProgress(key);
    const isNewLearned = patch.learned === true && !previous.learned;
    const isReviewCompletion = patch.reviewed === true;
    const nextStage = isReviewCompletion ? Math.min(previous.reviewStage + 1, reviewIntervals.length - 1) : previous.reviewStage;

    progressState[key] = {
        ...previous,
        ...patch,
        ...(isNewLearned ? { learnedAt: new Date().toISOString(), reviewStage: 0 } : {}),
        ...(isNewLearned || isReviewCompletion ? { dueAt: getFutureDate(reviewIntervals[isReviewCompletion ? nextStage : 0]) } : {}),
        ...(isReviewCompletion ? { learned: true, reviewStage: nextStage } : {}),
        updatedAt: new Date().toISOString(),
    };

    delete progressState[key].reviewed;

    if (isNewLearned) recordStudyActivity(5);
    if (isReviewCompletion) recordStudyActivity(3);

    if (!progressState[key].learned && !progressState[key].note) {
        delete progressState[key];
    }

    saveProgressState();
    renderMotivationStats();
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

function loadStatsState() {
    if (typeof localStorage === 'undefined') return { xp: 0, days: {} };

    try {
        const parsed = JSON.parse(localStorage.getItem(statsStorageKey) || '{}');
        return {
            xp: Number(parsed.xp || 0),
            days: parsed.days && typeof parsed.days === 'object' ? parsed.days : {},
            exams: parsed.exams && typeof parsed.exams === 'object' ? parsed.exams : {},
        };
    } catch {
        return { xp: 0, days: {}, exams: {} };
    }
}

function saveStatsState() {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(statsStorageKey, JSON.stringify(statsState));
}

function recordStudyActivity(xp) {
    const today = getTodayKey();
    const current = statsState.days[today] || { learned: 0, reviews: 0 };
    statsState.days[today] = {
        ...current,
        learned: current.learned + 1,
    };
    statsState.xp += xp;
    saveStatsState();
}

function recordExamResult(score, total) {
    const key = `${currentStandard}:${currentLevel}`;
    statsState.exams[key] = {
        score,
        total,
        percent: total ? Math.round((score / total) * 100) : 0,
        finishedAt: new Date().toISOString(),
    };
    statsState.xp += score * 2;
    saveStatsState();
    renderMotivationStats();
}

function renderMotivationStats() {
    const today = statsState.days[getTodayKey()] || { learned: 0 };
    const learnedToday = Math.min(today.learned || 0, dailyGoalTarget);
    els.dailyGoal.textContent = `${learnedToday}/${dailyGoalTarget}`;
    els.streakCount.textContent = countStreak();
    els.xpCount.textContent = statsState.xp || 0;
    els.dueCount.textContent = getLearnedItems().filter((entry) => isDue(entry.progress)).length;
}

function countStreak() {
    let streak = 0;
    const date = new Date();

    while (true) {
        const key = formatDateKey(date);
        if (!statsState.days[key]?.learned) break;
        streak += 1;
        date.setDate(date.getDate() - 1);
    }

    return streak;
}

function getTodayKey() {
    return formatDateKey(new Date());
}

function formatDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function getFutureDate(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString();
}

function isDue(progress) {
    return progress.learned && (!progress.dueAt || new Date(progress.dueAt) <= new Date());
}

function renderExamSetup() {
    const levelName = formatLevel(currentLevel);
    const vocabCount = getData('vocab', currentLevel).length;
    const grammarLevel = getBaseLevelKey(currentLevel);
    const grammarCount = getData('grammar', grammarLevel).length;
    const lastExam = statsState.exams[`${currentStandard}:${currentLevel}`];

    currentExam = null;
    els.examBody.innerHTML = '';
    els.examTitle.textContent = `${levelName} Practice Exam`;
    els.examIntro.textContent = `${vocabCount} từ vựng và ${grammarCount} mẫu ngữ pháp có thể được dùng để tạo bài thi nhanh.`;
    els.surfaceTitle.textContent = 'Thi thử HSK';
    els.activeLevelLabel.textContent = levelName;
    els.courseTitle.textContent = `Thi thử ${levelName} - ${standards[currentStandard].label}`;
    els.levelHint.textContent = lastExam
        ? `Lần gần nhất: ${lastExam.score}/${lastExam.total} điểm (${lastExam.percent}%).`
        : 'Chọn cấp HSK bên trái, rồi bắt đầu bài thi thử.';
    els.resultMeta.textContent = 'Bài thi gồm câu hỏi chọn nghĩa, chọn pinyin và nhận diện ngữ pháp.';
    els.wordCount.textContent = 'Exam';
    els.progressFill.style.width = lastExam ? `${lastExam.percent}%` : '0%';
    renderMotivationStats();
}

function renderTestPage() {
    const activeLevelNumber = getLevelNumber(currentLevel);
    const activeTests = getTestsForCurrentLevel();
    const activeTest = activeTests[0];
    const visibleTests = showAllTests ? testData : activeTests;

    els.surfaceTitle.textContent = 'Đề thi đầy đủ';
    els.activeLevelLabel.textContent = showAllTests ? 'All HSK' : formatLevel(currentLevel);
    els.courseTitle.textContent = showAllTests
        ? `Toàn bộ thư viện đề thi HSK`
        : `Bộ đề ${formatLevel(currentLevel)} - ${standards[currentStandard].label}`;
    els.levelHint.textContent = showAllTests
        ? `${testData.length} đề cho HSK 1-6. Chọn một cấp để luyện tập trung.`
        : activeTest
        ? `${activeTests.length} đề cho ${formatLevel(currentLevel)}. Mở PDF, bật audio, rồi tự chấm theo file đề.`
        : `Chưa có file đề thi cho ${formatLevel(currentLevel)}.`;
    els.resultMeta.textContent = showAllTests
        ? `Đang hiển thị toàn bộ ${testData.length} đề thi trong thư viện.`
        : activeTests.length
        ? `${activeTests.length} đề đang sẵn sàng cho ${formatLevel(currentLevel)}. Tổng cộng có ${testData.length} đề trong thư viện.`
        : `${testData.length} bộ đề đã được tìm thấy trong thư mục data.`;
    els.wordCount.textContent = `${visibleTests.length || testData.length} đề`;
    els.progressFill.style.width = showAllTests || activeTest ? '100%' : '0%';

    els.testList.innerHTML = visibleTests.length
        ? `
            ${buildTestLevelTabs(activeLevelNumber)}
            ${showAllTests ? buildAllTestsView() : buildLevelTestView(activeTests)}
        `
        : buildNoTestsState();
    renderMotivationStats();
}

function buildTestLevelTabs(activeLevelNumber) {
    return `
        <div class="test-level-tabs" aria-label="Chọn cấp đề thi">
            <button class="test-level-tab${showAllTests ? ' active' : ''}" type="button" data-test-all="true">
                Tất cả
                <span>${testData.length} đề</span>
            </button>
            ${Array.from({ length: 6 }, (_, index) => {
                const levelNumber = index + 1;
                const count = testData.filter((test) => getLevelNumber(test.level) === levelNumber).length;
                return `
                    <button class="test-level-tab${!showAllTests && levelNumber === activeLevelNumber ? ' active' : ''}" type="button" data-test-level="${levelNumber}">
                        HSK ${levelNumber}
                        <span>${count} đề</span>
                    </button>
                `;
            }).join('')}
        </div>
    `;
}

function buildLevelTestView(activeTests) {
    return `
        <div class="test-set-header">
            <div>
                <span class="review-tag">${escapeHtml(formatLevel(currentLevel))}</span>
                <h4>${activeTests.length} đề thi đầy đủ</h4>
                <p>Mỗi đề gồm file PDF${activeTests.some((test) => test.audio) ? ' và audio nghe' : ''}. Làm lần lượt từ Test 01 đến Test 05 để mô phỏng luyện đề thật.</p>
            </div>
            <strong>${activeTests.length}/5</strong>
        </div>
        <div class="test-grid">
            ${activeTests.map((test) => buildTestCard(test)).join('')}
        </div>
    `;
}

function buildAllTestsView() {
    return Array.from({ length: 6 }, (_, index) => {
        const level = `hsk${index + 1}`;
        const tests = testData.filter((test) => test.level === level);
        return `
            <section class="test-level-section">
                <div class="test-level-section-header">
                    <h4>${escapeHtml(formatLevel(level))}</h4>
                    <span>${tests.length} đề</span>
                </div>
                <div class="test-grid">
                    ${tests.map((test) => buildTestCard(test)).join('')}
                </div>
            </section>
        `;
    }).join('');
}

function getTestsForCurrentLevel() {
    const activeLevelNumber = getLevelNumber(currentLevel);
    return testData.filter((test) => getLevelNumber(test.level) === activeLevelNumber);
}

function buildTestCard(test) {
    const pageLabel = test.pages ? `${test.pages} trang` : 'PDF';
    const audioMarkup = test.audio
        ? `<audio controls preload="none" src="${escapeHtml(test.audio)}"></audio>`
        : '<div class="audio-missing">Chưa có audio cho đề này</div>';
    const audioAction = test.audio
        ? `<a class="ghost-light-action" href="${escapeHtml(test.audio)}" target="_blank" rel="noopener">Mở audio</a>`
        : '';
    const audioMeta = test.audio ? 'Listening MP3' : 'PDF only';

    return `
        <article class="test-card">
            <div class="test-card-main">
                <div class="test-card-topline">
                    <span class="review-tag">Test ${String(test.number).padStart(2, '0')}</span>
                    <span class="test-active-label">${escapeHtml(formatLevel(test.level))}</span>
                </div>
                <h4>${escapeHtml(test.title)}</h4>
                <p>${escapeHtml(test.note)}</p>
                <div class="test-meta">
                    <span>${escapeHtml(pageLabel)}</span>
                    <span>${escapeHtml(audioMeta)}</span>
                    <span>PDF paper</span>
                </div>
            </div>
            <div class="test-player">
                ${audioMarkup}
                <div class="test-actions">
                    <a class="primary-action" href="${escapeHtml(test.pdf)}" target="_blank" rel="noopener">Mở PDF</a>
                    ${audioAction}
                </div>
            </div>
        </article>
    `;
}

function getLevelKeyForNumber(levelNumber) {
    const suffix = currentStandard === 'old' ? 'Old' : 'New';
    const preferred = `hsk${levelNumber}${suffix}`;
    return getData('vocab', preferred).length ? preferred : `hsk${levelNumber}`;
}

function buildNoTestsState() {
    return `
        <div class="review-empty">
            <strong>Chưa có đề cho cấp này</strong>
            <span>Thêm PDF và MP3 vào thư mục data, rồi khai báo trong data/tests.js.</span>
        </div>
    `;
}

function startExam() {
    const questions = buildExamQuestions(currentLevel);
    currentExam = {
        questions,
        index: 0,
        answers: Array(questions.length).fill(null),
    };
    renderExamQuestion();
}

function buildExamQuestions(level) {
    const vocabItems = shuffle(getData('vocab', level)).slice(0, 10);
    const grammarItems = shuffle(getData('grammar', getBaseLevelKey(level))).slice(0, 5);
    const allVocab = getData('vocab', level);

    const vocabQuestions = vocabItems.flatMap((item) => {
        const meaningOptions = buildOptions(getMeaning(item), allVocab.map(getMeaning));
        const pinyinOptions = buildOptions(item.pinyin, allVocab.map((entry) => entry.pinyin));
        return [
            {
                prompt: `Nghĩa của "${item.hanzi}" là gì?`,
                helper: item.pinyin,
                options: meaningOptions,
                answer: meaningOptions.indexOf(getMeaning(item)),
            },
            {
                prompt: `Pinyin đúng của "${item.hanzi}" là gì?`,
                helper: getMeaning(item),
                options: pinyinOptions,
                answer: pinyinOptions.indexOf(item.pinyin),
            },
        ];
    });

    const grammarQuestions = grammarItems.map((item) => {
        const options = buildOptions(item.structure, grammarItems.concat(getData('grammar', getBaseLevelKey(level))).map((entry) => entry.structure));
        return {
            prompt: `Cấu trúc nào phù hợp với ví dụ: ${item.ex_cn || item.usage}`,
            helper: getGrammarExampleDetail(item),
            options,
            answer: options.indexOf(item.structure),
        };
    });

    return shuffle(vocabQuestions.concat(grammarQuestions)).slice(0, 20);
}

function buildOptions(correct, candidates) {
    const pool = [...new Set(candidates.filter(Boolean).filter((value) => value !== correct))];
    return shuffle([correct, ...shuffle(pool).slice(0, 3)]);
}

function renderExamQuestion() {
    if (!currentExam || currentExam.questions.length === 0) {
        els.examBody.innerHTML = `
            <div class="review-empty">
                <strong>Chưa đủ dữ liệu để tạo đề</strong>
                <span>Hãy chọn cấp HSK có từ vựng hoặc ngữ pháp.</span>
            </div>
        `;
        return;
    }

    const question = currentExam.questions[currentExam.index];
    const selected = currentExam.answers[currentExam.index];
    const answered = selected !== null;

    els.examBody.innerHTML = `
        <article class="exam-question">
            <div class="exam-progress-line">
                <span>Câu ${currentExam.index + 1}/${currentExam.questions.length}</span>
                <strong>${getExamScore()}/${currentExam.questions.length}</strong>
            </div>
            <h4>${escapeHtml(question.prompt)}</h4>
            <p>${escapeHtml(question.helper)}</p>
            <div class="exam-options">
                ${question.options.map((option, index) => `
                    <button class="exam-option${answered && index === question.answer ? ' is-correct' : ''}${answered && index === selected && index !== question.answer ? ' is-wrong' : ''}" type="button" data-exam-option="${index}" ${answered ? 'disabled' : ''}>
                        ${escapeHtml(option)}
                    </button>
                `).join('')}
            </div>
            <div class="exam-footer">
                <span>${answered ? (selected === question.answer ? '+10 XP cảm giác rất đã.' : `Đáp án đúng: ${escapeHtml(question.options[question.answer])}`) : 'Chọn một đáp án để tiếp tục.'}</span>
                <button class="primary-action" type="button" data-exam-action="next" ${answered ? '' : 'disabled'}>${currentExam.index === currentExam.questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp'}</button>
            </div>
        </article>
    `;
}

function answerExamQuestion(optionIndex) {
    if (!currentExam) return;
    currentExam.answers[currentExam.index] = optionIndex;
    renderExamQuestion();
}

function moveExam() {
    if (!currentExam) return;

    if (currentExam.index < currentExam.questions.length - 1) {
        currentExam.index += 1;
        renderExamQuestion();
        return;
    }

    renderExamResult();
}

function renderExamResult() {
    const score = getExamScore();
    const total = currentExam.questions.length;
    const percent = total ? Math.round((score / total) * 100) : 0;
    recordExamResult(score, total);

    els.examBody.innerHTML = `
        <div class="exam-result">
            <span class="review-tag">Kết quả</span>
            <strong>${score}/${total}</strong>
            <p>${percent >= 80 ? 'Rất ổn. Cấp này đang vào guồng.' : percent >= 60 ? 'Khá tốt. Ôn lại các mục sai là lên nhanh.' : 'Chưa sao. Dùng kết quả này để biết mình cần ôn phần nào.'}</p>
            <button class="primary-action" type="button" data-exam-action="restart">Làm lại đề khác</button>
        </div>
    `;
    els.progressFill.style.width = `${percent}%`;
    els.levelHint.textContent = `Điểm vừa rồi: ${score}/${total} (${percent}%).`;
}

function renderVideoPanel() {
    els.surfaceTitle.textContent = 'Video phụ đề';
    els.wordCount.textContent = `${subtitleCues.length} câu`;
    els.activeLevelLabel.textContent = 'Video';
    els.courseTitle.textContent = 'Học HSK bằng video và phụ đề';
    els.levelHint.textContent = 'Tải video từ máy, thêm phụ đề SRT/VTT, rồi bấm từng câu để nghe lại và học từ trong ngữ cảnh.';
    els.resultMeta.textContent = subtitleCues.length
        ? `Đã có ${subtitleCues.length} dòng phụ đề. Từ vựng được dò theo cấp HSK đang chọn.`
        : 'Chưa có phụ đề. Bạn có thể tải file .srt/.vtt hoặc dán nội dung có mốc thời gian.';
    els.progressFill.style.width = subtitleCues.length ? '100%' : '24%';
    renderMotivationStats();
    renderSubtitleList();
    renderActiveSubtitle();
    updateVideoControlState();
}

function handleVideoFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('video/')) {
        els.resultMeta.textContent = 'File này không phải video. Hãy chọn file video như MP4, WebM hoặc MOV.';
        event.target.value = '';
        return;
    }

    if (videoObjectUrl) URL.revokeObjectURL(videoObjectUrl);
    videoObjectUrl = URL.createObjectURL(file);
    els.learningVideo.src = videoObjectUrl;
    els.learningVideo.load();
    els.resultMeta.textContent = `Đã chọn video: ${file.name}. Thêm phụ đề để bắt đầu học theo câu.`;
}

function handleSubtitleFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!/\.(srt|vtt|txt)$/i.test(file.name)) {
        els.resultMeta.textContent = 'File phụ đề nên là .srt, .vtt hoặc .txt có mốc thời gian.';
        event.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => {
        const text = String(reader.result || '');
        els.subtitleText.value = text;
        loadSubtitleText(text, file.name);
    });
    reader.readAsText(file);
}

function loadSubtitleText(rawText, sourceName = 'nội dung đã dán') {
    subtitleCues = parseSubtitleCues(rawText);
    activeSubtitleIndex = -1;
    renderVideoPanel();
    els.resultMeta.textContent = subtitleCues.length
        ? `Đã tạo ${subtitleCues.length} dòng phụ đề từ ${sourceName}.`
        : 'Chưa đọc được phụ đề. Hãy dùng định dạng SRT/VTT có dòng thời gian dạng 00:00:01 --> 00:00:04.';
    syncSubtitleToVideo();
}

function parseSubtitleCues(rawText) {
    const normalized = String(rawText || '')
        .replace(/\r/g, '')
        .replace(/^\uFEFF/, '')
        .replace(/^WEBVTT[^\n]*\n/i, '')
        .trim();
    if (!normalized) return [];

    return normalized
        .split(/\n{2,}/)
        .map(parseSubtitleBlock)
        .filter(Boolean)
        .sort((a, b) => a.start - b.start);
}

function parseSubtitleBlock(block) {
    const lines = block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .filter((line) => !/^(NOTE|STYLE|REGION)(\s|$)/i.test(line));
    const timeIndex = lines.findIndex((line) => line.includes('-->'));
    if (timeIndex === -1) return null;

    const [startRaw, endRaw] = lines[timeIndex].split('-->').map((part) => part.trim().split(/\s+/)[0]);
    const start = parseSubtitleTime(startRaw);
    const end = parseSubtitleTime(endRaw);
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return null;

    const textLines = lines
        .slice(timeIndex + 1)
        .map(cleanSubtitleText)
        .filter(Boolean);
    if (!textLines.length) return null;

    const chineseLines = textLines.filter((line) => /[\u3400-\u9fff]/.test(line));
    const translationLines = textLines.filter((line) => !/[\u3400-\u9fff]/.test(line));

    return {
        start,
        end,
        text: chineseLines.join(' ') || textLines[0] || '',
        translation: translationLines.join(' ') || textLines.slice(1).join(' '),
        rawText: textLines.join(' '),
    };
}

function cleanSubtitleText(value) {
    return String(value || '')
        .replace(/<[^>]+>/g, '')
        .replace(/\{\\[a-z0-9]+[^}]*\}/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function parseSubtitleTime(value) {
    const parts = String(value || '').replace(',', '.').split(':');
    if (parts.length < 2) return Number.NaN;
    const seconds = Number(parts.pop());
    const minutes = Number(parts.pop());
    const hours = Number(parts.pop() || 0);
    return hours * 3600 + minutes * 60 + seconds;
}

function syncSubtitleToVideo() {
    if (!subtitleCues.length) {
        renderActiveSubtitle();
        return;
    }

    const nextIndex = getCueIndexAtTime(els.learningVideo.currentTime || 0);
    if (nextIndex === activeSubtitleIndex) return;

    activeSubtitleIndex = nextIndex;
    renderActiveSubtitle();
    renderSubtitleList();
    updateVideoControlState();
}

function renderActiveSubtitle() {
    const cue = subtitleCues[activeSubtitleIndex] || null;
    els.subtitleOverlay.textContent = cue ? cue.text : (subtitleCues.length ? '...' : 'Chưa có phụ đề.');
    els.activeSubtitleTime.textContent = cue ? `${formatCueTime(cue.start)} - ${formatCueTime(cue.end)}` : '00:00';
    els.activeSubtitleText.textContent = cue ? cue.text : 'Chọn video và thêm phụ đề để bắt đầu.';
    els.activeSubtitleTranslation.textContent = cue?.translation || (cue ? 'Không có dòng dịch riêng trong phụ đề này.' : 'Các câu phụ đề sẽ hiện theo thời gian video.');
    renderVideoVocabulary(cue);
    updateVideoControlState();
}

function renderVideoVocabulary(cue) {
    const matches = cue ? getVideoVocabularyMatches(cue.rawText || cue.text) : [];
    els.videoVocabCount.textContent = `${matches.length} từ`;
    els.videoVocabList.innerHTML = matches.length
        ? matches.map((item) => {
            const progress = progressState[item.key] || {};
            return `
            <article class="video-vocab-item">
                <strong>${escapeHtml(item.hanzi)}</strong>
                <span>${escapeHtml(item.pinyin)} · ${escapeHtml(formatLevel(item.level))}</span>
                <p>${escapeHtml(getMeaning(item))}</p>
                <button class="mark-word-action" type="button" data-video-vocab-key="${escapeHtml(item.key)}" ${progress.learned ? 'disabled' : ''}>
                    ${progress.learned ? 'Đã học' : 'Đánh dấu đã học'}
                </button>
            </article>
        `;
        }).join('')
        : '<div class="review-empty video-empty"><strong>Chưa thấy từ HSK trong câu này</strong><span>Đổi cấp HSK hoặc chọn dòng phụ đề khác để dò thêm từ.</span></div>';
}

function getVideoVocabularyMatches(text) {
    const normalized = String(text || '');
    const seen = new Set();
    return getLevelKeys('vocab')
        .flatMap((level) => getData('vocab', level).map((item) => ({
            ...item,
            level,
            key: getItemKey('vocab', level, item),
        })))
        .filter((item) => item.hanzi && normalized.includes(item.hanzi))
        .filter((item) => {
            if (seen.has(item.hanzi)) return false;
            seen.add(item.hanzi);
            return true;
        })
        .slice(0, 12);
}

function renderSubtitleList() {
    if (!subtitleCues.length) {
        els.subtitleList.innerHTML = `
            <div class="review-empty">
                <strong>Chưa có danh sách phụ đề</strong>
                <span>Thêm phụ đề để xem từng câu, bấm vào câu để phát lại đúng đoạn.</span>
            </div>
        `;
        return;
    }

    els.subtitleList.innerHTML = subtitleCues.map((cue, index) => `
        <button class="subtitle-row${index === activeSubtitleIndex ? ' active' : ''}" type="button" data-subtitle-index="${index}">
            <span>${escapeHtml(formatCueTime(cue.start))}</span>
            <strong>${escapeHtml(cue.text || cue.rawText)}</strong>
            <em>${escapeHtml(cue.translation || '')}</em>
        </button>
    `).join('');
}

function seekRelativeSubtitle(direction) {
    if (!subtitleCues.length) return;
    const currentIndex = activeSubtitleIndex >= 0
        ? activeSubtitleIndex
        : getNearestCueIndex(els.learningVideo.currentTime || 0);
    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), subtitleCues.length - 1);
    seekSubtitle(nextIndex, true);
}

function replayActiveSubtitle() {
    if (!subtitleCues.length) return;
    const index = activeSubtitleIndex >= 0
        ? activeSubtitleIndex
        : getNearestCueIndex(els.learningVideo.currentTime || 0);
    seekSubtitle(index, true);
}

function seekSubtitle(index, shouldPlay = false) {
    const cue = subtitleCues[index];
    if (!cue) return;
    activeSubtitleIndex = index;
    els.learningVideo.currentTime = Math.max(0, cue.start + 0.01);
    renderActiveSubtitle();
    renderSubtitleList();
    if (shouldPlay) els.learningVideo.play().catch(() => {});
}

function getCueIndexAtTime(time) {
    return subtitleCues.findIndex((cue) => time >= cue.start && time < cue.end);
}

function getNearestCueIndex(time) {
    const nextIndex = subtitleCues.findIndex((cue) => cue.start > time);
    if (nextIndex === -1) return subtitleCues.length - 1;
    if (nextIndex === 0) return 0;
    const previous = subtitleCues[nextIndex - 1];
    const next = subtitleCues[nextIndex];
    return Math.abs(time - previous.end) <= Math.abs(next.start - time) ? nextIndex - 1 : nextIndex;
}

function updateVideoControlState() {
    const hasCues = subtitleCues.length > 0;
    els.prevSubtitle.disabled = !hasCues || activeSubtitleIndex <= 0;
    els.replaySubtitle.disabled = !hasCues;
    els.nextSubtitle.disabled = !hasCues || activeSubtitleIndex >= subtitleCues.length - 1;
}

function formatCueTime(value) {
    const totalSeconds = Math.max(0, Math.floor(value || 0));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return hours
        ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getExamScore() {
    if (!currentExam) return 0;
    return currentExam.answers.reduce((sum, answer, index) => {
        return sum + (answer === currentExam.questions[index].answer ? 1 : 0);
    }, 0);
}

function renderWritingPage() {
    const radicalCount = radicalGroups.reduce((sum, group) => sum + group.items.length, 0);

    els.surfaceTitle.textContent = 'Nền tảng chữ Hán';
    els.wordCount.textContent = `${radicalCount} bộ thủ`;
    els.activeLevelLabel.textContent = 'Writing';
    els.courseTitle.textContent = 'Viết chữ Hán, đọc pinyin, nhớ bộ thủ';
    els.levelHint.textContent = 'Nắm nét viết và bộ thủ giúp bạn đoán nghĩa, nhớ mặt chữ và tra từ nhanh hơn.';
    els.resultMeta.textContent = 'Bắt đầu từ nét cơ bản, sau đó luyện thanh điệu và nhận diện bộ thủ trong từ HSK.';
    els.progressFill.style.width = '100%';
    renderMotivationStats();

    els.writingContent.innerHTML = `
        <section class="writing-section writing-practice">
            <div class="writing-section-title">
                <span class="review-tag">Luyện viết</span>
                <h4>8 nét cơ bản</h4>
            </div>
            <div class="stroke-grid">
                ${strokeBasics.map((stroke) => `
                    <article class="stroke-card">
                        <strong>${escapeHtml(stroke.mark)}</strong>
                        <div>
                            <h5>${escapeHtml(stroke.name)}</h5>
                            <span>${escapeHtml(stroke.pinyin)}</span>
                            <p>${escapeHtml(stroke.tip)}</p>
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>

        <section class="writing-section">
            <div class="writing-section-title">
                <span class="review-tag">Bút thuận</span>
                <h4>Quy tắc viết dễ nhớ</h4>
            </div>
            <div class="rule-list">
                ${strokeRules.map((item, index) => `
                    <article class="rule-card">
                        <strong>${index + 1}</strong>
                        <div>
                            <h5>${escapeHtml(item.rule)}</h5>
                            <p>${escapeHtml(item.example)}</p>
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>

        <section class="writing-section">
            <div class="writing-section-title">
                <span class="review-tag">Pinyin</span>
                <h4>Âm đầu, âm cuối và thanh điệu</h4>
            </div>
            <div class="pinyin-layout">
                <div class="tone-grid">
                    ${toneGuide.map((tone) => `
                        <article class="tone-card">
                            <strong>${escapeHtml(tone.mark)}</strong>
                            <span>Thanh ${escapeHtml(tone.tone)} - ${escapeHtml(tone.shape)}</span>
                            <p>${escapeHtml(tone.cue)}</p>
                        </article>
                    `).join('')}
                </div>
                <div class="sound-board">
                    <h5>Âm đầu</h5>
                    <div class="sound-chips">${pinyinInitials.map((sound) => `<span>${escapeHtml(sound)}</span>`).join('')}</div>
                    <h5>Âm cuối</h5>
                    <div class="sound-chips">${pinyinFinals.map((sound) => `<span>${escapeHtml(sound)}</span>`).join('')}</div>
                </div>
            </div>
        </section>

        <section class="writing-section">
            <div class="writing-section-title">
                <span class="review-tag">Bộ thủ</span>
                <h4>Bộ thủ phổ biến trong HSK</h4>
            </div>
            <div class="radical-groups">
                ${radicalGroups.map((group) => `
                    <article class="radical-group">
                        <h5>${escapeHtml(group.title)}</h5>
                        <div class="radical-list">
                            ${group.items.map((item) => `
                                <div class="radical-row">
                                    <strong>${escapeHtml(item.radical)}</strong>
                                    <span>${escapeHtml(item.pinyin)}</span>
                                    <p>${escapeHtml(item.meaning)}</p>
                                    <em>${escapeHtml(item.examples)}</em>
                                </div>
                            `).join('')}
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>

        <section class="writing-section">
            <div class="writing-section-title">
                <span class="review-tag">Tra cứu</span>
                <h4>214 bộ thủ Kangxi</h4>
            </div>
            <div class="kangxi-grid">
                ${kangxiRadicals.map((item) => `
                    <span title="Radical ${item.number}">
                        <strong>${escapeHtml(item.symbol)}</strong>
                        <em>${item.number}</em>
                    </span>
                `).join('')}
            </div>
        </section>

        <section class="writing-section">
            <div class="writing-section-title">
                <span class="review-tag">Ứng dụng</span>
                <h4>6 chữ nên luyện hôm nay</h4>
            </div>
            <div class="character-practice-grid">
                ${writingPracticeWords.map((item) => `
                    <article class="character-practice-card">
                        <strong>${escapeHtml(item.hanzi)}</strong>
                        <span>${escapeHtml(item.display)} / ${escapeHtml(item.pinyin)}</span>
                        <p>Bộ: ${escapeHtml(item.radical)}</p>
                        <em>${escapeHtml(item.hint)}</em>
                    </article>
                `).join('')}
            </div>
        </section>
    `;
}

function renderAiPanel(keepConversation = true) {
    const levelName = formatLevel(currentLevel);
    const vocabItems = getData('vocab', currentLevel);
    const grammarItems = getData('grammar', getBaseLevelKey(currentLevel));

    els.surfaceTitle.textContent = 'AI Tutor';
    els.wordCount.textContent = `${vocabItems.length + grammarItems.length} mục`;
    els.activeLevelLabel.textContent = levelName;
    els.courseTitle.textContent = `${levelName} AI Tutor`;
    els.levelHint.textContent = `Hỏi tutor về ${vocabItems.length} từ vựng và ${grammarItems.length} mẫu ngữ pháp trong cấp đang chọn.`;
    els.resultMeta.textContent = 'Tutor đang dùng dữ liệu nội bộ của app để trả lời, tạo quiz và gợi ý luyện tập.';
    els.progressFill.style.width = vocabItems.length || grammarItems.length ? '100%' : '0%';
    renderMotivationStats();

    if (!keepConversation) aiMessages = [];
    if (aiMessages.length === 0) {
        aiMessages.push({
            role: 'assistant',
            text: `Chào bạn. Mình đang theo ngữ cảnh ${levelName}. Bạn có thể hỏi nghĩa một từ, yêu cầu giải thích ngữ pháp, hoặc bảo mình quiz nhanh.`,
        });
    }

    renderAiMessages();
}

function renderAiMessages() {
    els.aiMessages.innerHTML = aiMessages.map((message) => `
        <article class="ai-message ${message.role}">
            <span>${message.role === 'user' ? 'Bạn' : 'AI Tutor'}</span>
            <p>${escapeHtml(message.text)}</p>
        </article>
    `).join('');
    els.aiMessages.scrollTop = els.aiMessages.scrollHeight;
}

function submitAiMessage(rawPrompt) {
    const prompt = String(rawPrompt || '').trim();
    if (!prompt) return;

    aiMessages.push({ role: 'user', text: prompt });
    aiMessages.push({ role: 'assistant', text: generateAiReply(prompt) });
    els.aiInput.value = '';
    renderAiMessages();
}

function generateAiReply(prompt) {
    const normalized = prompt.toLowerCase();
    const context = getAiStudyContext();
    const vocabMatch = findVocabMatch(prompt);
    const grammarMatch = findGrammarMatch(prompt);

    if (vocabMatch) {
        return `${vocabMatch.hanzi} (${vocabMatch.pinyin}) nghĩa là "${getMeaning(vocabMatch)}". English: ${getEnglish(vocabMatch)}. Gợi ý luyện: tự đặt 1 câu ngắn với từ này, rồi đánh dấu đã học nếu bạn nhớ được sau khi che nghĩa.`;
    }

    if (grammarMatch) {
        return `${grammarMatch.structure}: ${grammarMatch.usage}. Ví dụ: ${grammarMatch.ex_cn || ''}${grammarMatch.ex_py ? ` (${grammarMatch.ex_py})` : ''}. Nghĩa: ${grammarMatch.ex_vi || grammarMatch.source || 'hãy đọc lại ví dụ trong bảng ngữ pháp.'}`;
    }

    if (normalized.includes('quiz') || normalized.includes('kiểm tra') || normalized.includes('test')) {
        return buildAiQuizReply(context);
    }

    if (normalized.includes('grammar') || normalized.includes('ngữ pháp') || normalized.includes('cấu trúc')) {
        return buildAiGrammarReply(context.grammarItems);
    }

    if (normalized.includes('vocab') || normalized.includes('từ vựng') || normalized.includes('từ ')) {
        return buildAiVocabReply(context.vocabItems);
    }

    if (normalized.includes('plan') || normalized.includes('kế hoạch') || normalized.includes('học')) {
        return buildAiPlanReply(context);
    }

    return `Mình có thể giúp theo 4 cách: tra nghĩa từ, giải thích ngữ pháp, tạo quiz nhanh, hoặc lập kế hoạch ôn ${formatLevel(currentLevel)}. Bạn thử hỏi: "quiz 3 câu", "giải thích một mẫu ngữ pháp", hoặc nhập trực tiếp một từ tiếng Trung.`;
}

function getAiStudyContext() {
    return {
        vocabItems: getData('vocab', currentLevel),
        grammarItems: getData('grammar', getBaseLevelKey(currentLevel)),
    };
}

function findVocabMatch(prompt) {
    const normalized = prompt.toLowerCase();
    const allLevelKeys = getReviewLevelKeys('vocab');
    const currentItems = getData('vocab', currentLevel);
    const allItems = [
        ...currentItems,
        ...allLevelKeys.flatMap((level) => level === currentLevel ? [] : getData('vocab', level)),
    ];

    return allItems.find((item) => item.hanzi && prompt.includes(item.hanzi))
        || allItems.find((item) => item.pinyin && normalized.includes(item.pinyin.toLowerCase()))
        || allItems.find((item) => getMeaning(item).toLowerCase().split(/[;,/()]/).some((part) => part.trim() && normalized.includes(part.trim())));
}

function findGrammarMatch(prompt) {
    const normalized = prompt.toLowerCase();
    return getReviewLevelKeys('grammar')
        .flatMap((level) => getData('grammar', level))
        .find((item) => prompt.includes(item.structure)
            || item.structure.toLowerCase().includes(normalized)
            || normalized.includes(item.usage.toLowerCase()));
}

function buildAiQuizReply(context) {
    const vocabQuestions = shuffle(context.vocabItems).slice(0, 3).map((item, index) => {
        return `${index + 1}. ${item.hanzi} (${item.pinyin}) nghĩa là gì?`;
    });

    if (vocabQuestions.length > 0) {
        return `Quiz nhanh ${formatLevel(currentLevel)}:\n${vocabQuestions.join('\n')}\nTrả lời trong đầu trước, rồi kiểm tra ở bảng/flashcard.`;
    }

    return 'Cấp này chưa có đủ từ vựng để tạo quiz. Hãy chọn HSK khác hoặc chuyển sang phần ngữ pháp.';
}

function buildAiGrammarReply(grammarItems) {
    const item = shuffle(grammarItems)[0];
    if (!item) return 'Cấp này chưa có dữ liệu ngữ pháp. Bạn có thể chọn HSK 1-6 ở phần ngữ pháp để học mẫu câu.';
    return `${item.structure}: ${item.usage}. Ví dụ: ${item.ex_cn || ''}${item.ex_py ? ` (${item.ex_py})` : ''}. Khi học, hãy đổi chủ ngữ/tân ngữ trong ví dụ để tạo 2 câu mới.`;
}

function buildAiVocabReply(vocabItems) {
    const items = shuffle(vocabItems).slice(0, 5);
    if (items.length === 0) return 'Cấp này chưa có từ vựng. Hãy đổi cấp HSK hoặc phiên bản HSK.';
    return `5 từ nên ôn ngay:\n${items.map((item) => `- ${item.hanzi} (${item.pinyin}): ${getMeaning(item)}`).join('\n')}`;
}

function buildAiPlanReply(context) {
    return `Kế hoạch 5 phút cho ${formatLevel(currentLevel)}:\n1. Học 8 flashcard mới.\n2. Đánh dấu "Đã học" cho từ/mẫu bạn nhớ được.\n3. Làm quiz nhanh 3 câu với tutor.\n4. Vào Ôn tập để xem lại mục đến hạn.\nHiện cấp này có ${context.vocabItems.length} từ vựng và ${context.grammarItems.length} mẫu ngữ pháp.`;
}

function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
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
    document.body.dataset.route = currentRoute;
    els.searchInput.placeholder = tableConfig[currentMode].placeholder;
    renderMotivationStats();
    loadLevel();
}

init();
