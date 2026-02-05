// ADATOK

const stations = [
    { id: 0, x: 0, y: 0, type: "A", train: false, side: "Buda", district: 0 },
    { id: 1, x: 2, y: 0, type: "B", train: false, side: "Buda", district: 1 },
    { id: 2, x: 4, y: 0, type: "D", train: false, side: "Buda", district: 2 },
    { id: 3, x: 6, y: 0, type: "D", train: false, side: "Pest", district: 2 },
    { id: 4, x: 7, y: 0, type: "B", train: false, side: "Pest", district: 3 },
    { id: 5, x: 9, y: 0, type: "C", train: false, side: "Pest", district: 4 },
    { id: 6, x: 0, y: 1, type: "D", train: false, side: "Buda", district: 1 },
    { id: 7, x: 1, y: 1, type: "B", train: false, side: "Buda", district: 1 },
    { id: 8, x: 5, y: 1, type: "A", train: false, side: "Buda", district: 2 },
    { id: 9, x: 8, y: 1, type: "C", train: true, side: "Pest", district: 3 },
    { id: 10, x: 9, y: 1, type: "A", train: false, side: "Pest", district: 3 },
    { id: 11, x: 2, y: 2, type: "D", train: false, side: "Buda", district: 1 },
    { id: 12, x: 4, y: 2, type: "D", train: false, side: "Buda", district: 2 },
    { id: 13, x: 5, y: 2, type: "D", train: false, side: "Buda", district: 3 },
    { id: 14, x: 6, y: 2, type: "C", train: false, side: "Pest", district: 3 },
    { id: 15, x: 9, y: 2, type: "D", train: true, side: "Pest", district: 4 },
    { id: 16, x: 0, y: 3, type: "C", train: false, side: "Buda", district: 5 },
    { id: 17, x: 2, y: 3, type: "B", train: false, side: "Buda", district: 5 },
    { id: 18, x: 3, y: 3, type: "C", train: false, side: "Buda", district: 6 },
    { id: 19, x: 7, y: 3, type: "A", train: false, side: "Pest", district: 7 },
    { id: 20, x: 8, y: 3, type: "D", train: false, side: "Pest", district: 7 },
    { id: 21, x: 0, y: 4, type: "B", train: false, side: "Buda", district: 5 },
    { id: 22, x: 3, y: 4, type: "A", train: false, side: "Buda", district: 6 },
    { id: 23, x: 4, y: 4, type: "B", train: false, side: "Buda", district: 6 },
    { id: 24, x: 5, y: 4, type: "C", train: false, side: "Pest", district: 6 },
    { id: 25, x: 6, y: 4, type: "A", train: true, side: "Pest", district: 6 },
    { id: 26, x: 9, y: 4, type: "A", train: false, side: "Pest", district: 7 },
    { id: 27, x: 0, y: 5, type: "A", train: false, side: "Buda", district: 5 },
    { id: 28, x: 2, y: 5, type: "C", train: false, side: "Buda", district: 5 },
    { id: 29, x: 5, y: 5, type: "D", train: false, side: "Pest", district: 6 },
    { id: 30, x: 6, y: 5, type: "?", train: false, side: "Pest", district: 6 },
    { id: 31, x: 9, y: 5, type: "B", train: false, side: "Pest", district: 7 },
    { id: 32, x: 1, y: 6, type: "C", train: false, side: "Buda", district: 5 },
    { id: 33, x: 3, y: 6, type: "D", train: true, side: "Buda", district: 6 },
    { id: 34, x: 6, y: 6, type: "B", train: false, side: "Pest", district: 6 },
    { id: 35, x: 7, y: 6, type: "D", train: false, side: "Pest", district: 7 },
    { id: 36, x: 8, y: 6, type: "C", train: true, side: "Pest", district: 7 },
    { id: 37, x: 0, y: 7, type: "B", train: false, side: "Buda", district: 9 },
    { id: 38, x: 3, y: 7, type: "A", train: false, side: "Buda", district: 10 },
    { id: 39, x: 4, y: 7, type: "B", train: false, side: "Buda", district: 10 },
    { id: 40, x: 6, y: 7, type: "B", train: false, side: "Pest", district: 10 },
    { id: 41, x: 9, y: 7, type: "A", train: false, side: "Pest", district: 11 },
    { id: 42, x: 1, y: 8, type: "A", train: false, side: "Buda", district: 9 },
    { id: 43, x: 2, y: 8, type: "B", train: false, side: "Buda", district: 9 },
    { id: 44, x: 5, y: 8, type: "C", train: false, side: "Buda", district: 10 },
    { id: 45, x: 8, y: 8, type: "D", train: false, side: "Pest", district: 11 },
    { id: 46, x: 0, y: 9, type: "D", train: false, side: "Buda", district: 8 },
    { id: 47, x: 2, y: 9, type: "C", train: false, side: "Buda", district: 9 },
    { id: 48, x: 3, y: 9, type: "A", train: true, side: "Buda", district: 10 },
    { id: 49, x: 6, y: 9, type: "D", train: false, side: "Buda", district: 10 },
    { id: 50, x: 7, y: 9, type: "A", train: false, side: "Pest", district: 11 },
    { id: 51, x: 8, y: 9, type: "C", train: false, side: "Pest", district: 11 },
    { id: 52, x: 9, y: 9, type: "B", train: false, side: "Pest", district: 12 }
];

const lines = [
    { id: 0, name: "M1", color: "#FFD800", start: 19 },
    { id: 1, name: "M2", color: "#E41F18", start: 28 },
    { id: 2, name: "M3", color: "#005CA5", start: 3 },
    { id: 3, name: "M4", color: "#4CA22F", start: 39 }
];

const cardTypes = ["A", "B", "C", "D", "?", "A", "B", "C", "D", "?"];

// JÁTÉK ÁLLAPOT

let gameState = {
    playerName: "",
    startTime: null,
    timerInterval: null,
    roundOrder: [],
    currentRoundIndex: 0,
    cardsDrawn: 0,
    currentCard: null,
    cardDeck: [],
    segments: [],
    roundScores: [],
    pendingMove: null
};

// SEGÉDFÜGGVÉNYEK

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelector(`#${screenId}`).classList.add('active');
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getStationAt(x, y) {
    return stations.find(s => s.x === x && s.y === y);
}

function getStationById(id) {
    return stations.find(s => s.id === id);
}

function getCurrentLine() {
    return lines[gameState.roundOrder[gameState.currentRoundIndex]];
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// TÁBLA GENERÁLÁS

function renderBoard() {
    const table = document.querySelector('#board-table');
    table.innerHTML = '';
    
    for (let y = 0; y < 10; y++) {
        const row = document.createElement('tr');
        
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement('td');
            cell.dataset.x = x;
            cell.dataset.y = y;
            
            const station = getStationAt(x, y);
            
            if (station) {
                const stationDiv = document.createElement('div');
                stationDiv.className = 'station';
                
                const startLine = lines.find(l => l.start === station.id);
                if (startLine) {
                    stationDiv.classList.add(`start-${startLine.name}`);
                }
                
                if (station.type === '?') {
                    stationDiv.classList.add('joker');
                }
                
                stationDiv.textContent = station.type;
                
                if (station.train) {
                    const trainIcon = document.createElement('div');
                    trainIcon.className = 'train-icon';
                    stationDiv.appendChild(trainIcon);
                }
                
                cell.appendChild(stationDiv);
                cell.addEventListener('click', () => handleCellClick(station.id));
            }
            
            row.appendChild(cell);
        }
        
        table.appendChild(row);
    }
}

// JÁTÉK INDÍTÁSA

function startGame() {
    const nameInput = document.querySelector('#player-name');
    gameState.playerName = nameInput.value.trim() || 'Játékos';
    
    gameState.startTime = Date.now();
    gameState.roundOrder = shuffleArray([0, 1, 2, 3]);
    gameState.currentRoundIndex = 0;
    gameState.cardsDrawn = 0;
    gameState.currentCard = null;
    gameState.cardDeck = [];
    gameState.segments = [];
    gameState.roundScores = [];
    gameState.pendingMove = null;
    
    document.querySelector('#current-player').textContent = gameState.playerName;
    document.querySelector('#total-score').textContent = '0';
    
    showScreen('game-screen');
    renderBoard();
    
    const svg = document.querySelector('#lines-svg');
    if (svg) svg.innerHTML = '';
    
    document.querySelectorAll('.board-table td').forEach(cell => {
        cell.classList.remove('segment-M1', 'segment-M2', 'segment-M3', 'segment-M4');
    });
    
    startTimer();
    startRound();
}

// TIMER

function startTimer() {
    gameState.timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
        document.querySelector('#timer').textContent = formatTime(elapsed);
    }, 1000);
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
}

// FORDULÓK KEZELÉSE

function startRound() {
    gameState.cardsDrawn = 0;
    gameState.currentCard = null;
    gameState.cardDeck = shuffleArray([...cardTypes]);
    
    updateMetroIndicator();
    updateCardDisplay();
    updateScoring();
}

function updateMetroIndicator() {
    const line = getCurrentLine();
    const indicator = document.querySelector('#metro-indicator');
    
    indicator.textContent = `${line.name} Metróvonal`;
    indicator.className = 'metro-indicator';
    indicator.classList.add(`metro-${line.name}`);
}

// KÁRTYAHÚZÁS

function drawCard() {    
    if (gameState.cardsDrawn >= 8) {
        endRound();
        return;
    }
    
    if (gameState.currentCard !== null) {
        return;
    }
    
    if (gameState.cardDeck.length === 0) {
        gameState.cardDeck = shuffleArray([...cardTypes]);
    }
    
    gameState.currentCard = gameState.cardDeck.pop();
    gameState.cardsDrawn++;
    
    updateCardDisplay();
    highlightValidMoves();
    
    setTimeout(() => {
        checkForValidMoves();
    }, 50);
}

function checkForValidMoves() {
    if (!gameState.currentCard) return;
    
    let hasValidMove = false;
    
    for (const station of stations) {
        const result = isValidMove(station.id);
        if (result) {
            hasValidMove = true;
            break;
        }
    }
    
    if (!hasValidMove) {
        showNoValidMovesMessage();
        gameState.currentCard = null;
        // updateCardDisplay();
        
        document.querySelectorAll('.valid-move').forEach(cell => {
            cell.classList.remove('valid-move');
        });
    }
}

function showNoValidMovesMessage() {
    const cardDisplay = document.querySelector('.card-display');
    
    const oldMsg = cardDisplay.querySelector('.no-moves-warning');
    if (oldMsg) oldMsg.remove();
    
    const message = document.createElement('div');
    message.className = 'no-moves-warning';
    message.innerHTML = `Nincs érvényes lépés!<br>Húzz új kártyát.`;
    
    cardDisplay.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

function updateCardDisplay() {
    const cardEl = document.querySelector('#current-card');
    const countEl = document.querySelector('#card-count');
    
    cardEl.textContent = gameState.currentCard || '-';
    countEl.textContent = `${gameState.cardsDrawn}/8`;
}

//SZAKASZÉPÍTÉS

function getLineEndpoints(lineId) {
    const lineSegments = gameState.segments.filter(seg => seg.lineId === lineId);
    
    if (lineSegments.length === 0) {
        return [lines[lineId].start];
    }
    
    const stationConnections = {};
    
    lineSegments.forEach(seg => {
        stationConnections[seg.from] = (stationConnections[seg.from] || 0) + 1;
        stationConnections[seg.to] = (stationConnections[seg.to] || 0) + 1;
    });
    
    const endpoints = [];
    for (const [stationId, count] of Object.entries(stationConnections)) {
        if (count === 1) {
            endpoints.push(parseInt(stationId));
        }
    }
    
    return endpoints;
}

function getLineStations(lineId) {
    const lineSegments = gameState.segments.filter(seg => seg.lineId === lineId);
    const stationsSet = new Set();
    
    stationsSet.add(lines[lineId].start);
    
    lineSegments.forEach(seg => {
        stationsSet.add(seg.from);
        stationsSet.add(seg.to);
    });
    
    return Array.from(stationsSet);
}

function hasPathBetween(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    
    if (dy === 0 && dx !== 0) return true;
    if (dx === 0 && dy !== 0) return true;
    if (Math.abs(dx) === Math.abs(dy) && dx !== 0) return true;
    
    return false;
}

function getPointsOnSegment(x1, y1, x2, y2) {
    const points = [];
    const dx = Math.sign(x2 - x1);
    const dy = Math.sign(y2 - y1);
    
    let x = x1 + dx;
    let y = y1 + dy;
    
    while (x !== x2 || y !== y2) {
        points.push({ x, y });
        x += dx;
        y += dy;
    }
    
    return points;
}

function crossesStation(fromStation, toStation) {
    const points = getPointsOnSegment(fromStation.x, fromStation.y, toStation.x, toStation.y);
    
    for (const point of points) {
        const station = getStationAt(point.x, point.y);
        if (station) {
            return true;
        }
    }
    
    return false;
}

function crossesSegment(fromStation, toStation) {
    const currentLine = getCurrentLine();
    
    for (const seg of gameState.segments) {
        const segFrom = getStationById(seg.from);
        const segTo = getStationById(seg.to);
        
        if (seg.lineId === currentLine.id) continue;
        
        const points = getPointsOnSegment(fromStation.x, fromStation.y, toStation.x, toStation.y);
        
        for (const point of points) {
            const segPoints = getPointsOnSegment(segFrom.x, segFrom.y, segTo.x, segTo.y);
            
            for (const segPoint of segPoints) {
                if (point.x === segPoint.x && point.y === segPoint.y) {
                    if (!getStationAt(point.x, point.y)) {
                        return true;
                    }
                }
            }
        }
    }
    
    return false;
}

function isValidMove(stationId) {
    if (!gameState.currentCard) return false;
    
    const station = getStationById(stationId);
    const currentLine = getCurrentLine();
    
    if (gameState.currentCard !== '?' && station.type !== '?') {
        if (gameState.currentCard !== station.type) {
            return false;
        }
    }
    
    const lineStations = getLineStations(currentLine.id);
    if (lineStations.includes(stationId)) {
        return false;
    }
    
    const endpoints = getLineEndpoints(currentLine.id);
    const validEndpoints = [];
    
    for (const endpointId of endpoints) {
        const endpoint = getStationById(endpointId);
        
        if (!hasPathBetween(endpoint.x, endpoint.y, station.x, station.y)) {
            continue;
        }
        
        if (crossesStation(endpoint, station)) {
            continue;
        }
        
        if (crossesSegment(endpoint, station)) {
            continue;
        }
        
        validEndpoints.push(endpointId);
    }
    
    if (validEndpoints.length === 0) {
        return false;
    }
    
    if (validEndpoints.length === 1) {
        return { from: validEndpoints[0], to: stationId };
    }
    
    return { from: validEndpoints, to: stationId, multiple: true };
}

function handleCellClick(stationId) {
    if (gameState.pendingMove) {
        if (gameState.pendingMove.possibleFromIds.includes(stationId)) {
            addSegment(stationId, gameState.pendingMove.toStationId);            
            gameState.pendingMove = null;
            clearEndpointHighlight();
        } else {
            gameState.pendingMove = null;
            clearEndpointHighlight();
        }
        return;
    }
    
    if (!gameState.currentCard) {
        // console.log('Először húzz egy kártyát!');
        return;
    }
    
    const result = isValidMove(stationId);
    
    if (result) {
        if (result.multiple) {
            gameState.pendingMove = {
                toStationId: result.to,
                possibleFromIds: result.from
            };
            
            highlightEndpoints(result.from);
            showEndpointMessage(result.from.length);
        } else {
            addSegment(result.from, result.to);
            // console.log(`Szakasz építve: ${result.from} → ${result.to}`);
        }
    } else {
        console.log(`Érvénytelen lépés: ${stationId}`);
    }
}

function highlightEndpoints(endpointIds) {
    endpointIds.forEach(endpointId => {
        const endpoint = getStationById(endpointId);
        const cell = document.querySelector(`td[data-x="${endpoint.x}"][data-y="${endpoint.y}"]`);
        if (cell) {
            cell.classList.add('endpoint-choice');
        }
    });
}

function clearEndpointHighlight() {
    document.querySelectorAll('.endpoint-choice').forEach(cell => {
        cell.classList.remove('endpoint-choice');
    });
    
    const msg = document.querySelector('.endpoint-message');
    if (msg) msg.remove();
}

function showEndpointMessage(count) {
    const cardDisplay = document.querySelector('.card-display');
    
    const oldMsg = cardDisplay.querySelector('.endpoint-message');
    if (oldMsg) oldMsg.remove();
    
    const message = document.createElement('div');
    message.className = 'endpoint-message';
    message.innerHTML = 'Válaszd ki a kiindulási végpontot!';
    
    cardDisplay.appendChild(message);
}

function addSegment(fromId, toId) {
    const currentLine = getCurrentLine();
    
    gameState.segments.push({
        lineId: currentLine.id,
        from: fromId,
        to: toId
    });
    
    gameState.currentCard = null;
    
    updateCardDisplay();
    updateBoard();
    updateScoring();
    highlightValidMoves();
    
    gameState.pendingMove = null;
    clearEndpointHighlight();
}

function updateBoard() {
    document.querySelectorAll('.board-table td').forEach(cell => {
        cell.classList.remove('segment-M1', 'segment-M2', 'segment-M3', 'segment-M4');
    });
    
    const svg = document.querySelector('#lines-svg');
    svg.innerHTML = '';
    
    const table = document.querySelector('#board-table');
    const tableRect = table.getBoundingClientRect();
    const tableWidth = tableRect.width;
    const tableHeight = tableRect.height;
    
    svg.setAttribute('viewBox', `0 0 ${tableWidth} ${tableHeight}`);
    
    const cellWidth = tableWidth / 10;
    const cellHeight = tableHeight / 10;
    
    gameState.segments.forEach(seg => {
        const fromStation = getStationById(seg.from);
        const toStation = getStationById(seg.to);
        const line = lines[seg.lineId];
        
        const fromCell = document.querySelector(`td[data-x="${fromStation.x}"][data-y="${fromStation.y}"]`);
        const toCell = document.querySelector(`td[data-x="${toStation.x}"][data-y="${toStation.y}"]`);
        
        if (fromCell) fromCell.classList.add(`segment-${line.name}`);
        if (toCell) toCell.classList.add(`segment-${line.name}`);
        
        const points = getPointsOnSegment(fromStation.x, fromStation.y, toStation.x, toStation.y);
        points.forEach(point => {
            const cell = document.querySelector(`td[data-x="${point.x}"][data-y="${point.y}"]`);
            if (cell) {
                cell.classList.add(`segment-${line.name}`);
            }
        });
        
        const x1 = (fromStation.x + 0.5) * cellWidth;
        const y1 = (fromStation.y + 0.5) * cellHeight;
        const x2 = (toStation.x + 0.5) * cellWidth;
        const y2 = (toStation.y + 0.5) * cellHeight;
        
        const svgLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        svgLine.setAttribute('x1', x1);
        svgLine.setAttribute('y1', y1);
        svgLine.setAttribute('x2', x2);
        svgLine.setAttribute('y2', y2);
        svgLine.setAttribute('stroke', line.color);
        svgLine.setAttribute('class', 'metro-line');
        
        svg.appendChild(svgLine);
    });
}

function highlightValidMoves() {
    document.querySelectorAll('.board-table td').forEach(cell => {
        cell.classList.remove('valid-move');
    });
    
    if (!gameState.currentCard) return;
    
    stations.forEach(station => {
        const result = isValidMove(station.id);
        if (result) {
            const cell = document.querySelector(`td[data-x="${station.x}"][data-y="${station.y}"]`);
            if (cell) {
                cell.classList.add('valid-move');
            }
        }
    });
}

// PONTOZÁS

function updateScoring() {
    const currentLine = getCurrentLine();
    const score = calculateRoundScore(currentLine.id);
    
    document.querySelector('#score-pk').textContent = score.pk;
    document.querySelector('#score-pm').textContent = score.pm;
    document.querySelector('#score-pd').textContent = score.pd;
    document.querySelector('#score-fp').textContent = score.fp;
}

function calculateRoundScore(lineId) {
    const lineStations = getLineStations(lineId);
    
    if (lineStations.length === 0) {
        return { pk: 0, pm: 0, pd: 0, fp: 0 };
    }
    
    const districts = new Set();
    lineStations.forEach(stId => {
        const station = getStationById(stId);
        districts.add(station.district);
    });
    const pk = districts.size;
    
    const districtCounts = {};
    lineStations.forEach(stId => {
        const station = getStationById(stId);
        districtCounts[station.district] = (districtCounts[station.district] || 0) + 1;
    });
    const pm = Math.max(...Object.values(districtCounts));
    
    const lineSegments = gameState.segments.filter(seg => seg.lineId === lineId);
    let pd = 0;
    lineSegments.forEach(seg => {
        const from = getStationById(seg.from);
        const to = getStationById(seg.to);
        if (from.side !== to.side) {
            pd++;
        }
    });
    
    const fp = (pk * pm) + pd;
    
    return { pk, pm, pd, fp };
}

function endRound() {
    const currentLine = getCurrentLine();
    const score = calculateRoundScore(currentLine.id);
    gameState.roundScores.push(score);
    
    updateRoundScores();
    
    if (gameState.currentRoundIndex < 3) {
        gameState.currentRoundIndex++;
        startRound();
    } else {
        endGame();
    }
}

function updateRoundScores() {
    const roundElements = {
        'M1': document.querySelector('#round-M1'),
        'M2': document.querySelector('#round-M2'),
        'M3': document.querySelector('#round-M3'),
        'M4': document.querySelector('#round-M4')
    };
    
    gameState.roundOrder.forEach((lineIdx, roundIdx) => {
        if (roundIdx < gameState.roundScores.length) {
            const lineName = lines[lineIdx].name;
            const score = gameState.roundScores[roundIdx];
            roundElements[lineName].textContent = score.fp;
        }
    });
    
    const totalScore = gameState.roundScores.reduce((sum, s) => sum + s.fp, 0);
    document.querySelector('#total-score').textContent = totalScore;
}

function endGame() {
    stopTimer();
    
    const totalScore = gameState.roundScores.reduce((sum, s) => sum + s.fp, 0);
    const elapsedTime = Math.floor((Date.now() - gameState.startTime) / 1000);
    
    saveResult({
        name: gameState.playerName,
        score: totalScore,
        time: elapsedTime
    });
        
    const confirmed = confirm(`Játék vége!\n\nVégső pontszám: ${totalScore}\nIdő: ${formatTime(elapsedTime)}\n\nÚj játék?`);
    if (confirmed) {
        showScreen('menu-screen');
    } else {
        showScreen('menu-screen');
    }
}

//EREDMÉYNEK

function saveResult(result) {
    let results = JSON.parse(localStorage.getItem('metroResults') || '[]');
    results.push(result);
    results.sort((a, b) => b.score - a.score);
    localStorage.setItem('metroResults', JSON.stringify(results));
}

function loadLeaderboard() {
    const results = JSON.parse(localStorage.getItem('metroResults') || '[]');
    const tbody = document.querySelector('#leaderboard-body');
    
    tbody.innerHTML = '';
    
    if (results.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #999;">Még nincsenek eredmények</td></tr>';
    } else {
        results.forEach((result, idx) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${idx + 1}</td>
                <td>${result.name}</td>
                <td>${result.score}</td>
                <td>${formatTime(result.time)}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

// MENÜ

function backToMenu() {
    const confirmed = confirm('Biztosan visszamész a menübe? A játék elvész!');
    if (confirmed) {
        stopTimer();
        showScreen('menu-screen');
    }
}

// EVENT LISTENEREK

window.addEventListener('load', () => {
    document.querySelector('#start-btn').addEventListener('click', startGame);
    document.querySelector('#rules-btn').addEventListener('click', () => showScreen('rules-screen'));
    document.querySelector('#leaderboard-btn').addEventListener('click', () => {
        loadLeaderboard();
        showScreen('leaderboard-screen');
    });
    
    document.querySelector('#back-from-rules-btn').addEventListener('click', () => showScreen('menu-screen'));
    document.querySelector('#back-from-leaderboard-btn').addEventListener('click', () => showScreen('menu-screen'));
    document.querySelector('#back-btn').addEventListener('click', backToMenu);
    
    document.querySelector('#draw-card-btn').addEventListener('click', drawCard);
});