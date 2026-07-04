const testSets = [
    { level: 'hsk1', pages: [10, 10, 10, 10, 10] },
    { level: 'hsk2', pages: [null, null, null, null, null] },
    { level: 'hsk3', pages: [15, 22, 22, 14, 14] },
    { level: 'hsk4', pages: [24, 24, 24, 24, 24], audioMissing: [5] },
    { level: 'hsk5', pages: [17, 17, 17, 17, 17] },
    { level: 'hsk6', pages: [19, 18, 18, 18, 18] },
];

export const testData = testSets.flatMap((set) => {
    return Array.from({ length: 5 }, (_, index) => {
        const number = index + 1;
        const padded = String(number).padStart(2, '0');
        const hasAudio = !(set.audioMissing || []).includes(number);

        return {
            level: set.level,
            number,
            title: `${formatLevel(set.level)} - Test ${padded}`,
            pdf: `./data/${set.level}-test-${padded}.pdf`,
            audio: hasAudio ? `./data/${set.level}-test-${padded}.mp3` : '',
            pages: set.pages[index],
            note: hasAudio ? 'Full paper with listening audio.' : 'PDF paper only. Listening audio is not available yet.',
        };
    });
});

function formatLevel(level) {
    return `HSK ${Number(level.replace('hsk', ''))}`;
}
