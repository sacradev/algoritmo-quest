// ==================== ESTADO ====================
        // Estado global do jogo (todos os mundos)
        let globalProgress = {
            version: 1,
            worlds: {}
            // worlds[1] = { completedStages:[], bossCompleted:false, worldCompleted:false, totalErrors:0 }
            // worlds[2] = { ... }
        };

        // Estado da sessão atual (mundo aberto)
        let currentWorldId = null;
        let gameState = { completedStages: [], bossCompleted: false, worldCompleted: false, totalErrors: 0, currentAttempts: 0 };
        let currentStage = null;
        let selectedOption = null;
        let matchSelections = { left: null, right: null };
        let matchedPairs = [];
        let bossState = { questions: [], currentIndex: 0, answers: [], score: 0 };

        // ==================== PROGRESSO ====================
        const SAVE_KEY = 'algoritmoQuest_v1';

        function loadProgress() {
            // Primeiro carrega o save atual
            const saved = localStorage.getItem(SAVE_KEY);
            if (saved) {
                try { globalProgress = JSON.parse(saved); } catch(e) {}
            }

            // Migração: detecta save antigo do Mundo 1 (só se não tiver dados no M1 ainda)
            const oldSave = localStorage.getItem('algoritmoQuest_world1_v3');
            if (oldSave) {
                try {
                    const old = JSON.parse(oldSave);
                    // Só migra se o M1 não tiver progresso real ainda
                    if (!globalProgress.worlds[1] || !globalProgress.worlds[1].worldCompleted) {
                        globalProgress.worlds[1] = {
                            completedStages: old.completedStages || [],
                            bossCompleted: old.bossCompleted || false,
                            worldCompleted: old.worldCompleted || false,
                            totalErrors: old.totalErrors || 0
                        };
                        localStorage.setItem(SAVE_KEY, JSON.stringify(globalProgress));
                    }
                    localStorage.removeItem('algoritmoQuest_world1_v3');
                    console.log('✅ Progresso migrado do save antigo!');
                } catch(e) {}
            }
        }

        function getWorldState(worldId) {
            if (!globalProgress.worlds[worldId]) {
                globalProgress.worlds[worldId] = {
                    completedStages: [], bossCompleted: false, worldCompleted: false, totalErrors: 0
                };
            }
            return globalProgress.worlds[worldId];
        }

        function syncGameState() {
            // Sincroniza gameState local com globalProgress
            const ws = getWorldState(currentWorldId);
            ws.completedStages = gameState.completedStages;
            ws.bossCompleted = gameState.bossCompleted;
            ws.worldCompleted = gameState.worldCompleted;
            ws.totalErrors = gameState.totalErrors;
        }

        function saveProgress() {
            syncGameState();
            localStorage.setItem(SAVE_KEY, JSON.stringify(globalProgress));
        }

        function resetProgress() {
            if (confirm('⚠️ Tem certeza?\n\nTodo o progresso de TODOS os mundos será perdido!')) {
                localStorage.removeItem(SAVE_KEY);
                localStorage.removeItem('algoritmoQuest_world1_v3');
                location.reload();
            }
        }

        // ==================== HOME ====================
        function renderHome() {
            const word = "ALGORITMO";
            document.getElementById('homeProgressWord').innerHTML = word.split('').map((letter, i) => {
                const ws = getWorldState(i + 1);
                const unlocked = ws.worldCompleted;
                return `<span class="${unlocked ? 'unlocked' : ''}">${unlocked ? letter : '?'}</span>`;
            }).join('');

            let html = '';
            WORLDS_DATA.forEach((world, i) => {
                const ws = getWorldState(world.id);
                const prevWs = i === 0 ? null : getWorldState(world.id - 1);
                const isCompleted = ws.worldCompleted;
                const isUnlocked = i === 0 || (prevWs && prevWs.worldCompleted);
                const isImplemented = world.id <= 4;
                const isLocked = !isUnlocked || !isImplemented;
                const isCurrent = isUnlocked && isImplemented && !isCompleted;
                
                const checkBadge = isCompleted ? '<div class="planet-check">✓</div>' : '';
                html += `
                    <div class="planet-cell" onclick="${!isLocked ? `openWorld(${world.id})` : ''}">
                        <div class="planet world-${world.id} ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}">
                            <div class="planet-surface"></div>
                            <div class="planet-letter">${isLocked ? '?' : world.letter}</div>
                            ${checkBadge}
                        </div>
                        <div class="planet-number">${world.name}</div>
                    </div>
                `;
            });
            document.getElementById('worldsGrid').innerHTML = html;

            // Buraco negro da Danger Zone
            const m3Done = getWorldState(3).worldCompleted;
            document.getElementById('blackHole').className = 'black-hole' + (m3Done ? ' unlocked' : ' locked');
            document.getElementById('blackHoleLabel').textContent = m3Done ? '🌌 Danger Zone' : '🔒 Danger Zone';
        }

        function openWorld(worldId) {
            currentWorldId = worldId;
            const ws = getWorldState(worldId);
            gameState = {
                completedStages: ws.completedStages || [],
                bossCompleted: ws.bossCompleted || false,
                worldCompleted: ws.worldCompleted || false,
                totalErrors: ws.totalErrors || 0,
                currentAttempts: 0
            };
            document.getElementById('homeView').style.display = 'none';
            document.getElementById('mapView').style.display = 'block';
            document.getElementById('mapView').classList.add('active');
            const worldData = getCurrentWorldData();
            document.getElementById('mapTitle').textContent = `🎮 Mundo ${worldId}`;
            document.getElementById('mapSubtitle').textContent = worldData.title;
            renderMap();
            setTimeout(() => {
                const start = document.querySelector('.start-badge');
                if (start) start.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }

        function goToHome() {
            document.getElementById('mapView').classList.remove('active');
            document.getElementById('mapView').style.display = 'none';
            document.getElementById('homeView').style.display = 'block';
            currentWorldId = null;
            renderHome();
        }

        function openWorldIntro() {
            const worldData = getCurrentWorldData();
            const intro = worldData.intro;
            if (!intro) { openStage(0); return; }

            document.getElementById('modalContent').className = 'modal-content';
            document.getElementById('modalTitle').textContent = intro.title;
            document.getElementById('modalSubtitle').textContent = worldData.title;

            let html = `
                <div class="intro-card">
                    <p>${intro.description}</p>
                    ${intro.example ? `<pre>${intro.example}</pre>` : ''}
                </div>
                <div class="action-buttons">
                    <button class="btn btn-primary" onclick="closeModal(); openStage(0);">🚀 Começar — Casa 1</button>
                </div>`;

            document.getElementById('modalBody').innerHTML = html;
            document.getElementById('gameModal').classList.add('show');
        }

        function getCurrentWorldData() {
            if (currentWorldId === 1) return WORLD;
            if (currentWorldId === 2) return WORLD_2;
            if (currentWorldId === 3) return WORLD_3;
            if (currentWorldId === 4) return WORLD_4;
            return WORLD;
        }

        // ==================== MAP ====================
        function renderMap() {
            const worldData = getCurrentWorldData();

            // Separar stages por tipo
            const lightStages = worldData.stages
                .map((s, i) => ({ ...s, _i: i }))
                .filter(s => s.zone === 'light' && s.type !== 'card');
            const darkStages = worldData.stages
                .map((s, i) => ({ ...s, _i: i }))
                .filter(s => s.zone === 'dark' && s.type !== 'card');
            const playableCount = lightStages.length + darkStages.length;

            // Progress word
            const word = "ALGORITMO";
            document.getElementById('progressWord').innerHTML = word.split('').map((letter, i) => {
                const ws = getWorldState(i + 1);
                const unlocked = ws.worldCompleted;
                return `<span class="${unlocked ? 'unlocked' : ''}">${unlocked ? letter : '?'}</span>`;
            }).join('');

            document.getElementById('progressIndicator').innerHTML =
                `📊 ${gameState.completedStages.length}/${playableCount} casas • Erros: ${gameState.totalErrors}`;

            let html = '';

            // Boss
            const allLightDone = lightStages.every(s => gameState.completedStages.includes(s._i));
            const allDarkDone  = darkStages.every(s => gameState.completedStages.includes(s._i));
            const bossUnlocked = allLightDone && allDarkDone && !gameState.bossCompleted;
            const bossCompleted = gameState.bossCompleted;
            html += `<div class="stage boss ${bossCompleted ? 'completed' : ''} ${!bossUnlocked && !bossCompleted ? 'locked' : ''}" onclick="${bossUnlocked ? 'openBoss()' : ''}">
                <div class="stage-icon">${bossCompleted ? '✅' : '👑'}</div>
                <div class="stage-num">BOSS</div>
            </div>`;
            html += '<div class="path-line boss"></div>';

            // Dark Side (de trás pra frente)
            for (let d = darkStages.length - 1; d >= 0; d--) {
                const s = darkStages[d];
                const isCompleted = gameState.completedStages.includes(s._i);
                const prevCompleted = d === 0
                    ? allLightDone
                    : gameState.completedStages.includes(darkStages[d - 1]._i);
                const isLocked = !isCompleted && !prevCompleted;
                if (d < darkStages.length - 1) html += '<div class="path-line dark"></div>';
                html += `<div class="stage dark ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}" onclick="${!isLocked ? 'openStage(' + s._i + ')' : ''}">
                    <div class="stage-icon">${isCompleted ? '✅' : '💀'}</div>
                    <div class="stage-num">Nível ${d + 1}</div>
                </div>`;
            }

            html += '<div class="path-line dark"></div>';
            html += '<div class="dark-side-divider">⚡ DARK SIDE ⚡</div>';
            html += '<div class="path-line"></div>';

            // Light Side (de trás pra frente)
            for (let l = lightStages.length - 1; l >= 0; l--) {
                const s = lightStages[l];
                const isCompleted = gameState.completedStages.includes(s._i);
                const prevCompleted = l === 0 ? true : gameState.completedStages.includes(lightStages[l - 1]._i);
                const isLocked = !isCompleted && !prevCompleted;
                if (l < lightStages.length - 1) html += '<div class="path-line"></div>';
                html += `<div class="stage light ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}" onclick="${!isLocked ? 'openStage(' + s._i + ')' : ''}">
                    <div class="stage-icon">${isCompleted ? '✅' : '🚀'}</div>
                    <div class="stage-num">Nível ${l + 1}</div>
                </div>`;
            }

            html += '<div class="path-line"></div>';
            html += '<div class="start-badge" onclick="openWorldIntro()" style="cursor:pointer">🚀 INÍCIO</div>';
            document.getElementById('mapContainer').innerHTML = html;
        }

        // ==================== STAGES ====================
        function openStage(index) {
            const worldData = getCurrentWorldData();
            const stage = worldData.stages[index];

            // Se o stage anterior for um card e ainda não foi visto, mostrar card primeiro
            if (index > 0 && worldData.stages[index - 1].type === 'card') {
                const cardKey = `card_seen_${currentWorldId}_${index - 1}`;
                if (!sessionStorage.getItem(cardKey)) {
                    sessionStorage.setItem(cardKey, '1');
                    const card = worldData.stages[index - 1];
                    // Mostrar card, ao continuar abrir este stage
                    currentStage = { index, data: stage }; // guarda destino
                    document.getElementById('modalContent').className = `modal-content ${card.zone === 'dark' ? 'dark-mode' : ''}`;
                    renderCardAndThen(card, index - 1, () => openStage(index));
                    document.getElementById('gameModal').classList.add('show');
                    return;
                }
            }

            // Se for card direto, mostrar e voltar ao próximo
            if (stage.type === 'card') {
                document.getElementById('modalContent').className = `modal-content ${stage.zone === 'dark' ? 'dark-mode' : ''}`;
                renderCard(stage, index);
                document.getElementById('gameModal').classList.add('show');
                return;
            }

            // Resolver bank → sorteia questão
            let resolvedStage = stage;
            if (stage.type === 'bank') {
                const bank = stage.questions;
                const picked = bank[Math.floor(Math.random() * bank.length)];
                resolvedStage = { ...picked, zone: stage.zone, _bankIndex: index };
            }

            currentStage = { index, data: resolvedStage };
            gameState.currentAttempts = 0;
            selectedOption = null;
            matchSelections = { left: null, right: null };
            matchedPairs = [];

            document.getElementById('modalContent').className = `modal-content ${resolvedStage.zone === 'dark' ? 'dark-mode' : ''}`;
            renderStage(resolvedStage, index);
            document.getElementById('gameModal').classList.add('show');
        }

        function renderCardAndThen(card, cardIndex, callback) {
            const isDark = card.zone === 'dark';
            window._cardCallback = callback;
            const html = `<div class="question-area">
                <div class="card-display ${isDark ? 'card-dark' : 'card-light'}">
                    <div class="card-icon">${isDark ? '😈' : '📖'}</div>
                    <div class="card-title">${card.title}</div>
                    <div class="card-body">${card.content}</div>
                </div>
                <div id="feedback" class="feedback"></div>
                <div class="action-buttons">
                    <button class="btn-next" onclick="window._cardCallback && window._cardCallback()">Entendido, vamos lá →</button>
                </div>
            </div>`;
            document.getElementById('modalTitle').textContent = isDark ? '😈 Atenção' : '📖 Conceito';
            document.getElementById('modalSubtitle').textContent = isDark ? 'Dark Side' : 'Zona Clara';
            document.getElementById('modalBody').innerHTML = html;
        }

        function openDangerZone() {
            const m3Done = getWorldState(3).worldCompleted;
            if (!m3Done) {
                alert('⚠️ Complete o Mundo 3 — Operadores — para acessar a Danger Zone!');
                return;
            }
            document.getElementById('homeView').style.display = 'none';
            document.getElementById('dangerZoneView').style.display = 'block';
            renderDangerZone();
        }

        function closeDangerZone() {
            document.getElementById('dangerZoneView').style.display = 'none';
            document.getElementById('homeView').style.display = 'block';
        }

        function renderDangerZone() {
            const galaxies = [
                { id: 1, name: 'Galáxia Alpha', subtitle: 'M1 + M2 + M3', requiredWorld: 3, color: 'galaxy-1' },
                { id: 2, name: 'Galáxia Beta', subtitle: 'Mundo 4', requiredWorld: 4, color: 'galaxy-2' },
                { id: 3, name: 'Galáxia Gamma', subtitle: 'Mundo 5', requiredWorld: 5, color: 'galaxy-3' },
                { id: 4, name: 'Galáxia Delta', subtitle: 'Mundo 6', requiredWorld: 6, color: 'galaxy-4' },
                { id: 5, name: 'Galáxia Epsilon', subtitle: 'Mundo 7', requiredWorld: 7, color: 'galaxy-5' },
                { id: 6, name: 'Galáxia Zeta', subtitle: 'Mundo 8', requiredWorld: 8, color: 'galaxy-6' },
                { id: 7, name: 'Galáxia Omega', subtitle: 'Mundo 9', requiredWorld: 9, color: 'galaxy-7' },
            ];
            const word = 'GALÁXIA';
            document.getElementById('dangerProgressWord').innerHTML = word.split('').map((l, i) => {
                const done = getGalaxyState(i + 1).completed;
                return `<span class="${done ? 'unlocked' : ''}">${done ? l : '?'}</span>`;
            }).join('');

            let html = '';
            galaxies.forEach(g => {
                const unlocked = getWorldState(g.requiredWorld).worldCompleted;
                const done = getGalaxyState(g.id).completed;
                html += `
                    <div class="galaxy-cell" onclick="${unlocked ? `openGalaxy(${g.id})` : `alert('Complete o Mundo ${g.requiredWorld} primeiro!')`}">
                        <div class="nebula ${g.color} ${done ? 'completed' : ''} ${!unlocked ? 'locked' : ''}">
                            <div class="nebula-core"></div>
                            ${done ? '<div class="nebula-check">✓</div>' : ''}
                        </div>
                        <div class="galaxy-name">${unlocked ? g.name : '???'}</div>
                        <div class="galaxy-subtitle">${unlocked ? g.subtitle : '🔒'}</div>
                    </div>
                `;
            });
            document.getElementById('galaxiesGrid').innerHTML = html;
        }

        function getGalaxyState(id) {
            return globalProgress.galaxies?.[id] || { completed: false, attempts: 0 };
        }

        function openGalaxy(id) {
            if (id === 1) openGalaxy1();
        }

        function openGalaxy1() {
            startGalaxy1();
        }
        // ==================== GALÁXIA 1 ====================
        let galaxySession = null;

        function shuffle(arr) {
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        function startGalaxy1() {
            // Sorteia 10 de M1 + 15 de M2 + 15 de M3
            const m1 = shuffle(GALAXY_1.bankM1).slice(0, 10);
            const m2 = shuffle(GALAXY_1.bankM2).slice(0, 15);
            const m3 = shuffle(GALAXY_1.bankM3).slice(0, 15);
            const questions = shuffle([...m1, ...m2, ...m3]);

            // Embaralha opções de múltipla escolha
            questions.forEach(q => {
                if (q.type === 'multiple') {
                    const indices = q.options.map((_, i) => i);
                    for (let i = indices.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [indices[i], indices[j]] = [indices[j], indices[i]];
                    }
                    q._shuffledOptions = indices.map(i => q.options[i]);
                    q._shuffledCorrect = indices.indexOf(q.correct);
                }
            });

            galaxySession = {
                questions,
                current: 0,
                correct: 0,
                selectedOption: null
            };

            document.getElementById('dangerZoneView').style.display = 'none';
            document.getElementById('galaxyView').style.display = 'block';
            renderGalaxyQuestion();
        }

        function renderGalaxyQuestion() {
            const s = galaxySession;
            const q = s.questions[s.current];
            const total = s.questions.length;

            // Progress bar
            const pct = (s.current / total) * 100;
            document.getElementById('galaxyProgressFill').style.width = pct + '%';
            document.getElementById('galaxyStatus').textContent =
                `Questão ${s.current + 1} de ${total} • Acertos: ${s.correct}`;

            const typeLabel = q.type === 'write' ? '✍️ Escrever' : '🔵 Múltipla Escolha';
            let html = `<div class="stage-type-badge">${typeLabel}</div>`;

            if (q.type === 'multiple') {
                html += `<div class="gq-context">${q.question}</div>`;
                if (q.code) html += `<div class="question-code">${q.code}</div>`;
                html += '<div class="gq-options">';
                (q._shuffledOptions || q.options).forEach((opt, i) => {
                    html += `<div class="gq-option" id="gqOpt${i}" onclick="selectGalaxyOption(${i})">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span>${opt}</span>
                    </div>`;
                });
                html += '</div>';
            } else if (q.type === 'write') {
                html += `<div class="gq-context">${q.context}</div>`;
                if (q.code) html += `<div class="question-code">${q.code}</div>`;
                html += `<div class="gq-prompt">${q.prompt}</div>`;
                html += `<textarea id="gqWrite" class="write-input" rows="3" placeholder="Digite sua resposta..." spellcheck="false"></textarea>`;
            }

            html += `<div id="gqFeedback" class="feedback"></div>`;
            html += `<div class="action-buttons">
                <button class="btn btn-primary" id="gqCheckBtn" onclick="checkGalaxyAnswer()">✔️ Verificar</button>
                <button class="btn btn-success" id="gqNextBtn" style="display:none" onclick="nextGalaxyQuestion()">Continuar →</button>
            </div>`;

            document.getElementById('galaxyQuestionArea').innerHTML = html;
            galaxySession.selectedOption = null;
        }

        function selectGalaxyOption(i) {
            galaxySession.selectedOption = i;
            document.querySelectorAll('.gq-option').forEach((el, idx) => {
                el.classList.toggle('selected', idx === i);
            });
        }

        function normalizeAnswer(s) {
            return s.trim()
                .replace(/\s+/g, ' ')
                .toLowerCase()
                .replace(/←/g, '<-')
                .replace(/\s*<-\s*/g, '<-')
                .replace(/\s*=\s*/g, '=')
                .replace(/\s*\*\s*/g, '*')
                .replace(/\s*\+\s*/g, '+')
                .replace(/\s*-\s*/g, '-')
                .replace(/\s*\/\s*/g, '/')
                .replace(/\s*%\s*/g, '%')
                .replace(/\s*\(\s*/g, '(')
                .replace(/\s*\)\s*/g, ')');
        }

        function checkGalaxyAnswer() {
            const s = galaxySession;
            const q = s.questions[s.current];
            const fb = document.getElementById('gqFeedback');
            let correct = false;

            if (q.type === 'multiple') {
                if (s.selectedOption === null) { alert('Selecione uma opção!'); return; }
                const correctIdx = q._shuffledCorrect !== undefined ? q._shuffledCorrect : q.correct;
                correct = s.selectedOption === correctIdx;
                if (!correct) {
                    document.getElementById(`gqOpt${s.selectedOption}`).classList.add('incorrect');
                    fb.innerHTML = `❌ Incorreto. 💡 ${q.tip}`;
                    fb.className = 'feedback show incorrect';
                    setTimeout(() => {
                        document.querySelectorAll('.gq-option').forEach(el => el.classList.remove('incorrect', 'selected'));
                        s.selectedOption = null;
                        fb.className = 'feedback';
                    }, 2000);
                    return;
                }
                document.getElementById(`gqOpt${s.selectedOption}`).classList.add('correct');
            } else if (q.type === 'write') {
                const input = document.getElementById('gqWrite');
                if (!input || !input.value.trim()) { alert('Digite sua resposta!'); return; }
                const userAnswer = normalizeAnswer(input.value);
                correct = q.answers.map(a => normalizeAnswer(a)).some(a => a === userAnswer);
                if (!correct) {
                    input.style.borderColor = '#ff4444';
                    fb.innerHTML = `❌ Não é bem isso. 💡 ${q.tip}`;
                    fb.className = 'feedback show incorrect';
                    setTimeout(() => {
                        input.style.borderColor = '';
                        fb.className = 'feedback';
                    }, 2500);
                    return;
                }
                input.style.borderColor = '#00c853';
            }

            // Acertou
            s.correct++;
            fb.innerHTML = `✅ ${q.successMessage || 'Correto!'}`;
            fb.className = 'feedback show correct';
            document.getElementById('gqCheckBtn').style.display = 'none';
            document.getElementById('gqNextBtn').style.display = 'inline-flex';
        }

        function nextGalaxyQuestion() {
            const s = galaxySession;
            s.current++;
            if (s.current >= s.questions.length) {
                showGalaxyResult();
            } else {
                renderGalaxyQuestion();
            }
        }

        function showGalaxyResult() {
            const s = galaxySession;
            const total = s.questions.length;
            const passing = GALAXY_1.passingScore;
            const approved = s.correct >= passing;

            document.getElementById('galaxyView').style.display = 'none';
            document.getElementById('galaxyResult').style.display = 'block';

            document.getElementById('galaxyResultIcon').textContent = approved ? '🌌' : '💫';
            document.getElementById('galaxyResultTitle').textContent = approved ? 'GALÁXIA CONQUISTADA!' : 'Quase lá...';
            document.getElementById('galaxyResultScore').textContent = `${s.correct}/${total}`;
            document.getElementById('galaxyResultMsg').textContent = approved
                ? `Você acertou ${s.correct} de ${total}. A letra "G" da Galáxia Alpha é sua!`
                : `Você acertou ${s.correct} de ${total}. Precisa de ${passing} para passar. Tente novamente!`;

            document.getElementById('galaxyResultScore').className =
                'galaxy-result-score ' + (approved ? 'approved' : 'failed');

            if (approved) {
                if (!globalProgress.galaxies) globalProgress.galaxies = {};
                globalProgress.galaxies[1] = { completed: true };
                saveProgress();
            }
        }

        function retryGalaxy1() {
            document.getElementById('galaxyResult').style.display = 'none';
            startGalaxy1();
        }

        function backToDangerZone() {
            document.getElementById('galaxyResult').style.display = 'none';
            document.getElementById('galaxyView').style.display = 'none';
            document.getElementById('dangerZoneView').style.display = 'block';
            renderDangerZone();
        }



        function closeModal() {
            document.getElementById('gameModal').classList.remove('show');
            currentStage = null;
            renderMap();
        }

        function renderCard(card, index) {
            const worldData = getCurrentWorldData();
            const totalStages = worldData.stages.length;
            const isDark = card.zone === 'dark';

            const html = `<div class="question-area">
                <div class="card-display ${isDark ? 'card-dark' : 'card-light'}">
                    <div class="card-icon">${isDark ? '😈' : '📖'}</div>
                    <div class="card-title">${card.title}</div>
                    <div class="card-body">${card.content}</div>
                </div>
                <div class="action-buttons">
                    <button class="btn-next" onclick="completeCard(${index})">Continuar →</button>
                </div>
            </div>`;

            const isDarkZone = card.zone === 'dark';
            const lightCount = worldData.stages.filter(s => s.zone === 'light').length;
            document.getElementById('modalTitle').textContent = isDark ? '😈 Atenção' : '📖 Conceito';
            document.getElementById('modalSubtitle').textContent = isDark ? 'Dark Side' : 'Zona Clara';
            document.getElementById('modalBody').innerHTML = html;
            const fb = document.getElementById('feedback');
            if (fb) fb.innerHTML = '';
        }

        function completeCard(index) {
            const worldData = getCurrentWorldData();
            const totalStages = worldData.stages.length;
            const nextIndex = index + 1;
            if (nextIndex >= totalStages) {
                closeModal();
                openBoss();
            } else {
                openStage(nextIndex);
            }
        }

        function renderStage(stage, index) {
            const worldData = getCurrentWorldData();
            const types = { multiple: '📝 Múltipla Escolha', fill: '✏️ Completar', drag: '↕️ Ordenar', match: '🔗 Associar', write: '✍️ Escrever' };
            
            let html = `<div class="question-area">
                <div class="question-header">
                    <span class="question-type">${types[stage.type]}</span>
                    <span class="attempt-counter">Tentativas: ${gameState.currentAttempts}</span>
                </div>
                <div class="question-context">${stage.context}</div>
                ${(stage.code && stage.type !== 'fill') ? `<div class="question-code">${stage.code}</div>` : ''}
                ${stage.question ? `<div class="question-text">${stage.question}</div>` : ''}`;

            if (stage.type === 'multiple') {
                // Embaralhar opções mantendo rastreio da correta
                const optIndices = stage.options.map((_, i) => i);
                for (let i = optIndices.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [optIndices[i], optIndices[j]] = [optIndices[j], optIndices[i]];
                }
                const shuffledOptions = optIndices.map(i => stage.options[i]);
                const newCorrect = optIndices.indexOf(stage.correct);
                stage._shuffledCorrect = newCorrect;

                html += '<div class="options">';
                shuffledOptions.forEach((opt, i) => {
                    html += `<div class="option" onclick="selectOption(${i})" id="option${i}">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span>${opt}</span>
                    </div>`;
                });
                html += '</div>';
            } else if (stage.type === 'fill') {
                // Suporte a dois formatos: template (M1/M2) e code com {N} embutido (M3+)
                let tpl = stage.template || stage.code || '';


                tpl = tpl.replace(/<br\s*\/?>/gi, '\n');
                stage.blanks.forEach((b, i) => {
                    tpl = tpl.replace(`{${i}}`, `___BLANK${i}___`);
                });
                const lines = tpl.split('\n');
                let fillHtml = '<div class="fill-blank">';
                lines.forEach(line => {
                    if (!line.includes('___BLANK')) {
                        fillHtml += `<div class="fill-line"><span class="fill-prefix">${line}</span></div>`;
                    } else {
                        // Linha pode ter múltiplos blanks — processar todos
                        let lineHtml = '<div class="fill-line">';
                        const parts = line.split(/(___BLANK\d+___)/);
                        let isFirst = true;
                        parts.forEach(part => {
                            const bMatch = part.match(/___BLANK(\d+)___/);
                            if (bMatch) {
                                const idx = bMatch[1];
                                const b = stage.blanks[idx];
                                lineHtml += `<input type="text" id="blank${idx}" placeholder="${b.placeholder}" autocomplete="off">`;
                                isFirst = false;
                            } else if (part !== '') {
                                const cls = isFirst ? 'fill-prefix' : 'fill-inline';
                                lineHtml += `<span class="${cls}">${part}</span>`;
                            }
                        });
                        lineHtml += '</div>';
                        fillHtml += lineHtml;
                    }
                });
                fillHtml += '</div>';
                html += fillHtml;
            } else if (stage.type === 'drag') {
                const shuffled = [...stage.items];
                for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }
                html += '<div class="draggable-area" id="dragArea">';
                shuffled.forEach(item => {
                    html += `<div class="drag-item" draggable="true" data-correct="${item.correctPosition}">${item.text}</div>`;
                });
                html += '</div>';
            } else if (stage.type === 'match') {
                const shuffledLeft = [...stage.pairs];
                for (let i = shuffledLeft.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [shuffledLeft[i], shuffledLeft[j]] = [shuffledLeft[j], shuffledLeft[i]]; }
                const shuffledRight = [...stage.pairs];
                for (let i = shuffledRight.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [shuffledRight[i], shuffledRight[j]] = [shuffledRight[j], shuffledRight[i]]; }
                html += '<div class="match-container"><div class="match-column"><div class="match-column-title">TIPO</div>';
                shuffledLeft.forEach(p => {
                    html += `<div class="match-item" data-id="${p.id}" data-side="left" onclick="selectMatch(this,'left',${p.id})">${p.left}</div>`;
                });
                html += '</div><div class="match-column"><div class="match-column-title">VALOR</div>';
                shuffledRight.forEach(p => {
                    html += `<div class="match-item" data-id="${p.id}" data-side="right" onclick="selectMatch(this,'right',${p.id})">${p.right}</div>`;
                });
                html += '</div></div>';
            } else if (stage.type === 'write') {
                html += `<div class="write-area">
                    <div class="write-prompt">${stage.prompt}</div>
                    ${(stage.code && stage.type !== 'fill') ? `<div class="question-code">${stage.code}</div>` : ''}
                    <textarea id="writeAnswer" class="write-input" placeholder="Digite sua resposta aqui..." rows="3" spellcheck="false"></textarea>
                </div>`;
            }

            html += `<div id="feedback" class="feedback"></div>
                <div class="action-buttons">
                    <button class="btn btn-primary" id="checkBtn" onclick="checkAnswer()">✔️ Verificar</button>
                    <button class="btn btn-success" id="nextBtn" style="display:none" onclick="goNext()">Continuar →</button>
                    <button class="btn btn-secondary" onclick="closeModal()">↩️ Voltar</button>
                </div>
            </div>`;

            // Calcular número real ignorando cards
            const worldData2 = getCurrentWorldData();
            const playableStages = worldData2.stages
                .map((s, i) => ({ zone: s.zone, type: s.type, _i: i }))
                .filter(s => s.type !== 'card' && s.zone === stage.zone);
            const stageNum = playableStages.findIndex(s => s._i === index) + 1;
            document.getElementById('modalTitle').textContent = stage.zone === 'dark' ? `💀 Nível ${stageNum}` : `🚀 Nível ${stageNum}`;
            document.getElementById('modalSubtitle').textContent = stage.zone === 'dark' ? 'Dark Side' : 'Zona Clara';
            document.getElementById('modalBody').innerHTML = html;
            
            if (stage.type === 'drag') setupDrag();
        }

        // ==================== INTERAÇÕES ====================
        function selectOption(i) {
            selectedOption = i;
            document.querySelectorAll('.option').forEach((el, idx) => el.classList.toggle('selected', idx === i));
        }

        function setupDrag() {
            const container = document.getElementById('dragArea');
            let dragged = null;
            
            container.querySelectorAll('.drag-item').forEach(item => {
                item.addEventListener('dragstart', () => { dragged = item; item.classList.add('dragging'); });
                item.addEventListener('dragend', () => { item.classList.remove('dragging'); dragged = null; });
                item.addEventListener('touchstart', () => { dragged = item; item.classList.add('dragging'); }, {passive: true});
                item.addEventListener('touchmove', e => {
                    e.preventDefault();
                    const touch = e.touches[0];
                    const after = getDragAfter(container, touch.clientY);
                    after ? container.insertBefore(dragged, after) : container.appendChild(dragged);
                }, {passive: false});
                item.addEventListener('touchend', () => { item.classList.remove('dragging'); dragged = null; });
            });
            
            container.addEventListener('dragover', e => {
                e.preventDefault();
                const after = getDragAfter(container, e.clientY);
                if (dragged) after ? container.insertBefore(dragged, after) : container.appendChild(dragged);
            });
        }

        function getDragAfter(container, y) {
            const items = [...container.querySelectorAll('.drag-item:not(.dragging)')];
            return items.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                return offset < 0 && offset > closest.offset ? { offset, element: child } : closest;
            }, { offset: -Infinity }).element;
        }

        function selectMatch(el, side, id) {
            if (el.classList.contains('matched')) return;
            document.querySelectorAll(`.match-item[data-side="${side}"]`).forEach(e => { if (!e.classList.contains('matched')) e.classList.remove('selected'); });
            el.classList.add('selected');
            matchSelections[side] = id;
            if (matchSelections.left !== null && matchSelections.right !== null) checkMatchPair();
        }

        function checkMatchPair() {
            const left = document.querySelector(`.match-item[data-side="left"][data-id="${matchSelections.left}"]`);
            const right = document.querySelector(`.match-item[data-side="right"][data-id="${matchSelections.right}"]`);
            if (matchSelections.left === matchSelections.right) {
                matchedPairs.push(matchSelections.left);
                left.classList.remove('selected'); left.classList.add('matched');
                right.classList.remove('selected'); right.classList.add('matched');
            } else {
                left.classList.add('wrong'); right.classList.add('wrong');
                setTimeout(() => { left.classList.remove('selected', 'wrong'); right.classList.remove('selected', 'wrong'); }, 500);
            }
            matchSelections = { left: null, right: null };
        }

        // ==================== VERIFICAÇÃO ====================
        function checkAnswer() {
            const stage = currentStage.data;
            const feedback = document.getElementById('feedback');
            gameState.currentAttempts++;
            document.querySelector('.attempt-counter').textContent = `Tentativas: ${gameState.currentAttempts}`;
            
            let correct = false;
            const isDark = stage.zone === 'dark';

            if (stage.type === 'multiple') {
                if (selectedOption === null) { alert('Selecione uma opção!'); return; }
                correct = selectedOption === (stage._shuffledCorrect !== undefined ? stage._shuffledCorrect : stage.correct);
                if (!correct) {
                    document.getElementById(`option${selectedOption}`).classList.add('incorrect');
                    const hint = isDark || !stage.hints || !stage.hints.length ? "Incorreto. Revise e tente novamente." : stage.hints[Math.min(gameState.currentAttempts - 1, stage.hints.length - 1)];
                    feedback.innerHTML = `❌ ${hint}`;
                    feedback.className = 'feedback show incorrect';
                    setTimeout(() => { document.querySelectorAll('.option').forEach(e => e.classList.remove('incorrect', 'selected')); selectedOption = null; }, 1200);
                    gameState.totalErrors++; saveProgress(); renderMap();
                    return;
                }
                document.getElementById(`option${selectedOption}`).classList.add('correct');
            } else if (stage.type === 'fill') {
                const answers = stage.blanks.map((_, i) => document.getElementById(`blank${i}`).value);
                const results = stage.validate(answers);
                correct = results.every(r => r.correct);
                results.forEach((r, i) => {
                    const input = document.getElementById(`blank${i}`);
                    input.classList.remove('correct', 'incorrect');
                    input.classList.add(r.correct ? 'correct' : 'incorrect');
                });
                if (!correct) {
                    const firstErr = results.find(r => !r.correct);
                    feedback.innerHTML = `❌ ${isDark ? 'Incorreto.' : firstErr.hint}`;
                    feedback.className = 'feedback show incorrect';
                    gameState.totalErrors++; saveProgress(); renderMap();
                    return;
                }
            } else if (stage.type === 'drag') {
                const items = [...document.querySelectorAll('.drag-item')];
                const order = items.map(e => parseInt(e.dataset.correct));
                const expected = Array.from({length: items.length}, (_, i) => i);
                correct = JSON.stringify(order) === JSON.stringify(expected);
                if (!correct) {
                    const hint = isDark || !stage.hints || !stage.hints.length ? "Incorreto. Revise e tente novamente." : stage.hints[Math.min(gameState.currentAttempts - 1, stage.hints.length - 1)];
                    feedback.innerHTML = `❌ ${hint}`;
                    feedback.className = 'feedback show incorrect';
                    gameState.totalErrors++; saveProgress(); renderMap();
                    return;
                }
            } else if (stage.type === 'match') {
                correct = matchedPairs.length === stage.pairs.length;
                if (!correct) {
                    feedback.innerHTML = `❌ Faltam ${stage.pairs.length - matchedPairs.length} par(es).`;
                    feedback.className = 'feedback show incorrect';
                    return;
                }
            } else if (stage.type === 'write') {
                const input = document.getElementById('writeAnswer');
                if (!input || !input.value.trim()) { alert('Digite sua resposta!'); return; }
                // Normalizar: remover espaços extras, minúsculas, e padronizar operador de atribuição
                const normalizeWrite = s => s.trim()
                    .replace(/\s+/g, ' ')
                    .toLowerCase()
                    .replace(/←/g, '<-')
                    .replace(/\s*<-\s*/g, '<-')
                    .replace(/\s*=\s*/g, '=')
                    .replace(/\s*\*\s*/g, '*')
                    .replace(/\s*\+\s*/g, '+')
                    .replace(/\s*-\s*/g, '-')
                    .replace(/\s*\/\s*/g, '/')
                    .replace(/\s*%\s*/g, '%')
                    .replace(/\s*\(\s*/g, '(')
                    .replace(/\s*\)\s*/g, ')');
                const userAnswer = normalizeWrite(input.value);
                const validAnswers = stage.answers.map(a => normalizeWrite(a));
                correct = validAnswers.some(a => userAnswer === a);
                if (!correct) {
                    input.style.borderColor = '#ff4444';
                    feedback.innerHTML = `❌ Não é bem isso. Revise a expressão e tente novamente.`;
                    feedback.className = 'feedback show incorrect';
                    setTimeout(() => { input.style.borderColor = ''; }, 1500);
                    gameState.totalErrors++; saveProgress();
                    return;
                }
                input.style.borderColor = '#00c853';
            }

            // Acertou!
            feedback.innerHTML = `✅ ${stage.successMessage}`;
            feedback.className = 'feedback show correct';
            if (!gameState.completedStages.includes(currentStage.index)) {
                gameState.completedStages.push(currentStage.index);
                saveProgress();
            }
            document.getElementById('checkBtn').style.display = 'none';
            document.getElementById('nextBtn').style.display = 'inline-flex';
            document.querySelectorAll('.option, .match-item, .drag-item').forEach(e => e.style.pointerEvents = 'none');
            document.querySelectorAll('input').forEach(e => e.disabled = true);
        }

        function goNext() {
            const worldData = getCurrentWorldData();
            const totalStages = worldData.stages.length;
            const nextIndex = currentStage.index + 1;

            // Última casa → Boss
            if (nextIndex >= totalStages) {
                closeModal();
                openBoss();
                return;
            }

            const nextStage = worldData.stages[nextIndex];
            const currentZone = currentStage.data.zone;
            const nextZone = nextStage.zone;

            // Entrando no Dark Side (transição de zona)
            if (currentZone === 'light' && nextZone === 'dark') {
                closeModal();
                showDarkTransition(() => openStage(nextIndex));
                return;
            }

            // Sempre usar openStage — trata card, bank e questão normalmente
            openStage(nextIndex);
        }

        // ==================== TRANSIÇÕES ====================
        function showDarkTransition(callback) {
            const transition = document.getElementById('darkTransition');
            transition.classList.add('show');
            document.getElementById('enterDarkBtn').onclick = () => {
                transition.classList.remove('show');
                if (callback) callback();
            };
        }

        function showBossTransition(callback) {
            const transition = document.getElementById('bossTransition');
            transition.classList.add('show');
            document.getElementById('challengeBossBtn').onclick = () => {
                transition.classList.remove('show');
                if (callback) callback();
            };
        }

        // ==================== BOSS ====================
        function openBoss() {
            showBossTransition(() => {
                const worldData = getCurrentWorldData();
                const bossProva = worldData.bossProva || 10;
                const bossAprova = worldData.bossAprova || 7;
                const shuffled = [...worldData.bossQuestions];
                for (let i = shuffled.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; }
                bossState = {
                    questions: shuffled.slice(0, bossProva),
                    currentIndex: 0, answers: [], score: 0,
                    bossProva, bossAprova,
                    worldLetter: worldData.letter,
                    worldTitle: worldData.title
                };
                document.getElementById('modalContent').className = 'modal-content dark-mode';
                renderBossQuestion();
                document.getElementById('gameModal').classList.add('show');
            });
        }

        function renderBossQuestion() {
            const q = bossState.questions[bossState.currentIndex];
            const num = bossState.currentIndex + 1;
            
            const bossProva = bossState.bossProva || 10;
            const bossAprova = bossState.bossAprova || 7;
            const worldLetter = bossState.worldLetter || 'A';
            let html = `<div class="boss-banner">
                <h2>👑 SIMULADO BOSS</h2>
                <p>Acerte ${bossAprova} de ${bossProva} para conquistar a letra "${worldLetter}"</p>
                <div class="boss-progress">
                    <span>${num}/${bossProva}</span>
                    <div class="boss-progress-bar"><div class="boss-progress-fill" style="width:${(num/bossProva)*100}%"></div></div>
                    <span>🎯</span>
                </div>
            </div>
            <div class="question-area">
                ${q.code ? `<div class="question-code">${q.code}</div>` : ''}
                <div class="question-text">${q.question}</div>
                <div class="options">`;
            
            q.options.forEach((opt, i) => {
                html += `<div class="option" onclick="selectBossOption(${i})" id="bossOpt${i}">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                    <span>${opt}</span>
                </div>`;
            });
            
            html += `</div>
                <div class="action-buttons">
                    <button class="btn btn-danger" onclick="submitBossAnswer()">${num === bossProva ? '🏁 Finalizar' : 'Próxima →'}</button>
                </div>
            </div>`;
            
            document.getElementById('modalTitle').textContent = `Questão ${num}/${bossProva}`;
            document.getElementById('modalSubtitle').textContent = 'Simulado Final';
            document.getElementById('modalBody').innerHTML = html;
            selectedOption = null;
        }

        function selectBossOption(i) {
            selectedOption = i;
            document.querySelectorAll('.option').forEach((el, idx) => el.classList.toggle('selected', idx === i));
        }

        function submitBossAnswer() {
            if (selectedOption === null) { alert('Selecione!'); return; }
            const q = bossState.questions[bossState.currentIndex];
            bossState.answers.push({ question: q, selected: selectedOption, correct: selectedOption === q.correct });
            if (selectedOption === q.correct) bossState.score++;
            bossState.currentIndex++;
            bossState.currentIndex < bossState.bossProva ? renderBossQuestion() : showBossResults();
        }

        function showBossResults() {
            const bossProva = bossState.bossProva || 10;
            const bossAprova = bossState.bossAprova || 7;
            const worldLetter = bossState.worldLetter || 'A';
            const worldTitle = bossState.worldTitle || '';
            const passed = bossState.score >= bossAprova;
            let html = `<div class="results-card">
                <h2>${passed ? '🎉 PARABÉNS!' : '😔 Quase lá...'}</h2>
                <div class="results-score ${passed ? 'pass' : 'fail'}">${bossState.score}/${bossProva}</div>
                <p>${passed ? `Você conquistou a letra "${worldLetter}"!` : `Precisa de ${bossAprova}. Conseguiu ${bossState.score}.`}</p>
                <div class="results-details"><h4>📋 Revisão:</h4>`;
            
            bossState.answers.forEach((a, i) => {
                html += `<div class="result-item ${a.correct ? 'correct' : 'incorrect'}">
                    <strong>${a.correct ? '✅' : '❌'} Q${i + 1}</strong>
                    ${!a.correct ? `<div class="explanation">Resposta: ${a.question.options[a.question.correct]}<br>${a.question.explanation}</div>` : ''}
                </div>`;
            });
            
            html += `</div>
                <div class="action-buttons">
                    ${passed ? `<button class="btn btn-success" onclick="completeBoss()">🎉 Celebrar!</button>` : `<button class="btn btn-primary" onclick="openBoss()">🔄 Tentar novamente</button>`}
                    <button class="btn btn-secondary" onclick="closeModal()">↩️ Voltar</button>
                </div>
            </div>`;
            
            document.getElementById('modalTitle').textContent = passed ? '🏆 Vitória!' : '📊 Resultado';
            document.getElementById('modalSubtitle').textContent = `${bossState.score}/${bossProva} acertos`;
            document.getElementById('modalBody').innerHTML = html;
        }

        function completeBoss() {
            gameState.bossCompleted = true;
            gameState.worldCompleted = true;
            saveProgress();
            closeModal();
            showVictory();
        }

        function showVictory() {
            const worldData = getCurrentWorldData();
            document.getElementById('victoryLetter').textContent = worldData.letter || 'A';
            document.getElementById('victorySub').textContent = `Você dominou ${worldData.title}!`;
            document.getElementById('victoryOverlay').classList.add('show');
            
            // Confetti
            for (let i = 0; i < 50; i++) {
                const c = document.createElement('div');
                c.className = 'confetti';
                c.style.left = Math.random() * 100 + 'vw';
                c.style.background = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bd6', '#00d4ff'][Math.floor(Math.random() * 6)];
                c.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(c);
                setTimeout(() => c.remove(), 3000);
            }
        }

        function closeVictory() {
            document.getElementById('victoryOverlay').classList.remove('show');
            goToHome();
        }

        // ==================== MUNDO 2 ====================

        // ==================== INIT ====================
        window.addEventListener('load', () => {
            loadProgress();
            renderHome();
        });

        document.getElementById('gameModal').addEventListener('click', e => { if (e.target.id === 'gameModal') closeModal(); });