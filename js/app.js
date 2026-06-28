import { defaultVocabSetKey, vocabSets } from "../data/vocab.js";

const STORAGE_KEY = "hsk-vocab-mastered";

let currentSourceKey = defaultVocabSetKey;
let currentView = "cards";
let quizIndex = 0;
let quizItems = [];
let masteredState = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
if (Array.isArray(masteredState)) {
  masteredState = { [defaultVocabSetKey]: masteredState };
}

const els = {
  sourceTitle: document.getElementById("sourceTitle"),
  sourceDescription: document.getElementById("sourceDescription"),
  searchInput: document.getElementById("searchInput"),
  practiceMode: document.getElementById("practiceMode"),
  cardsView: document.getElementById("cardsView"),
  tableView: document.getElementById("tableView"),
  tableBody: document.getElementById("tableBody"),
  quizView: document.getElementById("quizView"),
  emptyState: document.getElementById("emptyState"),
  visibleCount: document.getElementById("visibleCount"),
  todayCount: document.getElementById("todayCount"),
  completionRate: document.getElementById("completionRate"),
  masteredCount: document.getElementById("masteredCount"),
  totalCount: document.getElementById("totalCount"),
  quizIndex: document.getElementById("quizIndex"),
  quizHanzi: document.getElementById("quizHanzi"),
  quizPinyin: document.getElementById("quizPinyin"),
  quizMeaning: document.getElementById("quizMeaning"),
  answerBox: document.getElementById("answerBox"),
  answerToggle: document.getElementById("answerToggle"),
  prevButton: document.getElementById("prevButton"),
  nextButton: document.getElementById("nextButton"),
  knownButton: document.getElementById("knownButton"),
  shuffleButton: document.getElementById("shuffleButton"),
};

function getActiveSet() {
  return vocabSets[currentSourceKey];
}

function getActiveItems() {
  return getActiveSet().items;
}

function getMastered() {
  return new Set(masteredState[currentSourceKey] || []);
}

function normalize(value) {
  return value.toLocaleLowerCase("vi-VN").normalize("NFC");
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(masteredState));
}

function getFilteredItems() {
  const query = normalize(els.searchInput.value.trim());
  const mode = els.practiceMode.value;
  const mastered = getMastered();

  return getActiveItems().filter((item) => {
    const isMastered = mastered.has(item.id);
    if (mode === "unknown" && isMastered) return false;
    if (mode === "mastered" && !isMastered) return false;
    if (!query) return true;

    return [item.hanzi, item.pinyin, item.vi].some((field) =>
      normalize(field).includes(query),
    );
  });
}

function updateSummary(items) {
  const activeItems = getActiveItems();
  const mastered = getMastered();
  const learned = mastered.size;
  const unknown = activeItems.length - learned;
  els.visibleCount.textContent = items.length;
  els.todayCount.textContent = unknown;
  els.masteredCount.textContent = learned;
  els.totalCount.textContent = activeItems.length;
  els.completionRate.textContent = `${Math.round((learned / activeItems.length) * 100)}%`;
}

function makeToggle(item) {
  const mastered = getMastered();
  const button = document.createElement("button");
  button.type = "button";
  button.className = `learn-toggle${mastered.has(item.id) ? " is-on" : ""}`;
  button.textContent = mastered.has(item.id) ? "Mastered" : "Mark learned";
  button.addEventListener("click", () => {
    const nextMastered = getMastered();
    if (mastered.has(item.id)) {
      nextMastered.delete(item.id);
    } else {
      nextMastered.add(item.id);
    }
    masteredState[currentSourceKey] = [...nextMastered];
    saveProgress();
    render();
  });
  return button;
}

function renderCards(items) {
  els.cardsView.innerHTML = "";
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const mastered = getMastered();
    const card = document.createElement("article");
    card.className = `word-card${mastered.has(item.id) ? " is-mastered" : ""}`;
    card.innerHTML = `
      <span class="card-id">#${item.id}</span>
      <div class="hanzi">${item.hanzi}</div>
      <div class="pinyin">${item.pinyin}</div>
      <p class="meaning">${item.vi}</p>
    `;
    card.appendChild(makeToggle(item));
    fragment.appendChild(card);
  });

  els.cardsView.appendChild(fragment);
}

function renderTable(items) {
  els.tableBody.innerHTML = "";
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.hanzi}</td>
      <td>${item.pinyin}</td>
      <td>${item.vi}</td>
      <td></td>
    `;
    row.lastElementChild.appendChild(makeToggle(item));
    fragment.appendChild(row);
  });

  els.tableBody.appendChild(fragment);
}

function renderQuiz(items) {
  quizItems = items.length ? items : [];
  if (quizIndex >= quizItems.length) quizIndex = 0;
  const item = quizItems[quizIndex];
  if (!item) return;
  const mastered = getMastered();

  els.answerBox.hidden = true;
  els.answerToggle.textContent = "Show answer";
  els.quizIndex.textContent = `${quizIndex + 1} / ${quizItems.length}`;
  els.quizHanzi.textContent = item.hanzi;
  els.quizPinyin.textContent = item.pinyin;
  els.quizMeaning.textContent = item.vi;
  els.prevButton.disabled = quizIndex === 0;
  els.nextButton.disabled = quizIndex === quizItems.length - 1;
  els.knownButton.textContent = mastered.has(item.id) ? "Unmark mastered" : "Mark mastered";
}

function setView(view) {
  currentView = view;
  document.querySelectorAll(".tab").forEach((tab) => {
    const active = tab.dataset.view === view;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  render();
}

function setSource(sourceKey) {
  if (!vocabSets[sourceKey] || sourceKey === currentSourceKey) return;
  currentSourceKey = sourceKey;
  quizIndex = 0;
  els.searchInput.value = "";
  els.practiceMode.value = "all";

  document.querySelectorAll(".source-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.source === sourceKey);
  });

  render();
}

function render() {
  const items = getFilteredItems();
  const activeSet = getActiveSet();
  els.sourceTitle.textContent = activeSet.label;
  els.sourceDescription.textContent = `${activeSet.description} Source: ${activeSet.source}.`;
  updateSummary(items);

  els.cardsView.hidden = currentView !== "cards" || items.length === 0;
  els.tableView.hidden = currentView !== "table" || items.length === 0;
  els.quizView.hidden = currentView !== "quiz" || items.length === 0;
  els.emptyState.hidden = items.length !== 0;

  if (currentView === "cards") renderCards(items);
  if (currentView === "table") renderTable(items);
  if (currentView === "quiz") renderQuiz(items);
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
});

document.querySelectorAll(".source-tab").forEach((tab) => {
  tab.addEventListener("click", () => setSource(tab.dataset.source));
});

els.searchInput.addEventListener("input", () => {
  quizIndex = 0;
  render();
});

els.practiceMode.addEventListener("change", () => {
  quizIndex = 0;
  render();
});

els.answerToggle.addEventListener("click", () => {
  els.answerBox.hidden = !els.answerBox.hidden;
  els.answerToggle.textContent = els.answerBox.hidden ? "Show answer" : "Hide answer";
});

els.prevButton.addEventListener("click", () => {
  if (quizIndex > 0) {
    quizIndex -= 1;
    renderQuiz(quizItems);
  }
});

els.nextButton.addEventListener("click", () => {
  if (quizIndex < quizItems.length - 1) {
    quizIndex += 1;
    renderQuiz(quizItems);
  }
});

els.knownButton.addEventListener("click", () => {
  const item = quizItems[quizIndex];
  if (!item) return;
  const nextMastered = getMastered();
  if (nextMastered.has(item.id)) {
    nextMastered.delete(item.id);
  } else {
    nextMastered.add(item.id);
  }
  masteredState[currentSourceKey] = [...nextMastered];
  saveProgress();
  render();
});

els.shuffleButton.addEventListener("click", () => {
  quizItems = [...getFilteredItems()].sort(() => Math.random() - 0.5);
  quizIndex = 0;
  renderQuiz(quizItems);
});

document.addEventListener("keydown", (event) => {
  if (currentView !== "quiz") return;
  if (event.key === "ArrowRight") els.nextButton.click();
  if (event.key === "ArrowLeft") els.prevButton.click();
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    els.answerToggle.click();
  }
});

render();
