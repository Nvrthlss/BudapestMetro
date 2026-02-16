const translations = {
    hu: {
        title: "Budapest Metrói",
        playerLabel: "Játékos neve:",
        playerPlaceholder: "Add meg a neved",
        playerDefault: "Játékos",
        start: "Start",
        rules: "Játékszabály",
        results: "Eredmények",
        back: "Vissza",
        backToMenu: "Vissza a menübe",

        nameLabel: "Név:",
        timeLabel: "Idő",
        scoreLabel: "Pont:",

        card: "Kártya:",
        drawCard: "Új kártya",

        currentRound: "Aktuális forduló",
        districts: "Kerületek (PK)",
        maxPerDistrict: "Max/kerület (PM)",
        danube: "Duna (PD)",
        total: "Összesen (FP)",
        rounds: "Fordulók",

        metroLine: "{line} Metróvonal",

        noResults: "Még nincsenek eredmények",
        noValidMoves: "Nincs érvényes lépés!<br>Húzz új kártyát.",
        chooseEndpoint: "Válaszd ki a kiindulási végpontot!",
        confirmBack: "Biztosan visszamész a menübe? A játék elvész!",
        gameOver: "Játék vége!\n\nVégső pontszám: {score}\nIdő: {time}\n\nÚj játék?",

        rankHeader: "#",
        nameHeader: "Név",
        scoreHeader: "Pont",
        timeHeader: "Idő",

        rulesTitle: "Játékszabály",
        ruleGoalTitle: "Cél",
        ruleGoalText: "Építsd fel Budapest 4 metróvonalát (M1-sárga, M2-piros, M3-kék, M4-zöld) úgy, hogy minél több pontot szerezz!",
        ruleGameplayTitle: "Játékmenet",
        ruleGameplayText: "A játék 4 fordulóból áll, mindegyikben egy metróvonalat építesz. Minden körben:",
        ruleGameplayItems: [
            "Húzz egy kártyát (A, B, C, D vagy Joker)",
            "Kattints egy megállóhelyre, ahova szakaszt szeretnél építeni",
            "A program automatikusan berajzolja, ha szabályos"
        ],
        ruleBuildingTitle: "Építési szabályok",
        ruleBuildingItems: [
            "Az első szakasz a kiinduló megállóhelyről indul (színes kör)",
            "Ezután a metróvonal valamelyik végéről építhetsz tovább",
            "Szakaszok vízszintesen, függőlegesen vagy átlósan (45°) haladnak",
            "Nem keresztezhetsz másik szakaszt",
            "Nem mehetsz át más megállóhelyen",
            "A Deák tér (?) Joker, bármilyen kártyával odaépíthetsz"
        ],
        ruleScoringTitle: "Pontozás",
        ruleScoringText: "Minden forduló végén:",
        ruleScoringItems: [
            "<strong>PK</strong> = Érintett kerületek száma",
            "<strong>PM</strong> = Legtöbb megállóhely egy kerületben",
            "<strong>PD</strong> = Duna átkelések száma",
            "<strong>Fordulópont</strong> = (PK × PM) + PD"
        ],
        ruleFinalScore: "A végső pontszám a 4 forduló pontjainak összege.",
        ruleControlsTitle: "Irányítás",
        ruleControlsText1: "<strong>Kattints</strong> egy megállóhelyre, ahova szakaszt szeretnél építeni. Ha szabályos, automatikusan berajzolódik.",
        ruleControlsText2: "<strong>Új kártya</strong> gombbal húzhatsz következő kártyát."
    },

    en: {
        title: "Budapest Metro",
        playerLabel: "Player name:",
        playerPlaceholder: "Enter your name",
        playerDefault: "Player",
        start: "Start",
        rules: "Rules",
        results: "Leaderboard",
        back: "Back",
        backToMenu: "Back to menu",

        nameLabel: "Name:",
        timeLabel: "Time",
        scoreLabel: "Score:",

        card: "Card:",
        drawCard: "Draw card",

        currentRound: "Current round",
        districts: "Districts (PK)",
        maxPerDistrict: "Max/district (PM)",
        danube: "Danube (PD)",
        total: "Total (FP)",
        rounds: "Rounds",

        metroLine: "{line} Metro Line",

        noResults: "No results yet",
        noValidMoves: "No valid moves!<br>Draw a new card.",
        chooseEndpoint: "Choose the starting endpoint!",
        confirmBack: "Are you sure you want to go back to the menu? The game will be lost!",
        gameOver: "Game over!\n\nFinal score: {score}\nTime: {time}\n\nNew game?",

        rankHeader: "#",
        nameHeader: "Name",
        scoreHeader: "Score",
        timeHeader: "Time",

        rulesTitle: "Rules",
        ruleGoalTitle: "Goal",
        ruleGoalText: "Build all 4 Budapest metro lines (M1-yellow, M2-red, M3-blue, M4-green) and score as many points as possible!",
        ruleGameplayTitle: "Gameplay",
        ruleGameplayText: "The game consists of 4 rounds, each building one metro line. Each turn:",
        ruleGameplayItems: [
            "Draw a card (A, B, C, D or Joker)",
            "Click on a station where you want to build a segment",
            "The program automatically draws it if it's valid"
        ],
        ruleBuildingTitle: "Building rules",
        ruleBuildingItems: [
            "The first segment starts from the starting station (colored circle)",
            "After that, you can build from either end of the metro line",
            "Segments can go horizontally, vertically or diagonally (45°)",
            "You cannot cross another segment",
            "You cannot pass through another station",
            "Deák tér (?) is a Joker — you can build there with any card"
        ],
        ruleScoringTitle: "Scoring",
        ruleScoringText: "At the end of each round:",
        ruleScoringItems: [
            "<strong>PK</strong> = Number of districts reached",
            "<strong>PM</strong> = Most stations in a single district",
            "<strong>PD</strong> = Number of Danube crossings",
            "<strong>Round score</strong> = (PK × PM) + PD"
        ],
        ruleFinalScore: "The final score is the sum of all 4 rounds.",
        ruleControlsTitle: "Controls",
        ruleControlsText1: "<strong>Click</strong> on a station to build a segment there. If valid, it will be drawn automatically.",
        ruleControlsText2: "<strong>Draw card</strong> button draws the next card."
    }
};

let currentLang = 'hu';

function t(key, params = {}) {
    let text = translations[currentLang][key];
    if (text === undefined) return key;
    if (typeof text === 'string') {
        Object.entries(params).forEach(([k, v]) => {
            text = text.replace(`{${k}}`, v);
        });
    }
    return text;
}

function setLanguage(lang) {
    currentLang = lang;

    document.documentElement.lang = lang;
    document.title = translations[lang].title;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = translations[lang][key];
        if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const val = translations[lang][key];
        if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = translations[lang][key];
        if (val !== undefined) el.placeholder = val;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    renderRules();

    if (document.querySelector('#game-screen').classList.contains('active')) {
        updateMetroIndicator();
        updateScoring();
    }
}

function renderRules() {
    const container = document.querySelector('#rules-content');
    if (!container) return;

    const lang = translations[currentLang];

    container.innerHTML = `
        <h2>${lang.ruleGoalTitle}</h2>
        <p>${lang.ruleGoalText}</p>

        <h2>${lang.ruleGameplayTitle}</h2>
        <p>${lang.ruleGameplayText}</p>
        <ul>${lang.ruleGameplayItems.map(item => `<li>${item}</li>`).join('')}</ul>

        <h2>${lang.ruleBuildingTitle}</h2>
        <ul>${lang.ruleBuildingItems.map(item => `<li>${item}</li>`).join('')}</ul>

        <h2>${lang.ruleScoringTitle}</h2>
        <p>${lang.ruleScoringText}</p>
        <ul>${lang.ruleScoringItems.map(item => `<li>${item}</li>`).join('')}</ul>
        <p>${lang.ruleFinalScore}</p>

        <h2>${lang.ruleControlsTitle}</h2>
        <p>${lang.ruleControlsText1}</p>
        <p>${lang.ruleControlsText2}</p>
    `;
}