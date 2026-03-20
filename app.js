class TechZeichnerApp {
    constructor() {
        this.mainContent = document.getElementById('main-content');
        this.navBtns = document.querySelectorAll('.nav-btn');
        this.currentView = 'home';
        
        // Persistent State
        this.stats = this.loadStats();
        
        // Session State
        this.quizState = {
            currentIndex: 0,
            score: 0,
            questions: []
        };
        
        this.isExamMode = false;
        this.currentQuizCategory = 'all';
        this.examTimer = null;

        this.init();
    }

    async init() {
        // Setup Navigation
        this.navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget.dataset.target;
                this.navigateTo(target);
            });
        });

        // Load External Questions if available
        this.loadExternalQuestions();

        // Load Initial View
        this.renderView('home');
    }

    loadExternalQuestions() {
        if (typeof externalQuestions !== 'undefined') {
            const mapped = externalQuestions.map(q => ({
                id: `ext-${q.id}`,
                category: q.kategorie,
                question: q.frage,
                options: q.optionen,
                correctIndex: q.antwort,
                explanation: `Kategorie: ${q.kategorie}. Diese Frage stammt aus der erweiterten Sammlung.`
            }));
            
            // Avoid duplicates if init is called multiple times
            const existingIds = appData.quizQuestions.map(q => q.id);
            mapped.forEach(q => {
                if (!existingIds.includes(q.id)) {
                    appData.quizQuestions.push(q);
                }
            });
            console.log(`Loaded ${mapped.length} external questions.`);
        }
    }

    // --- Persistence Logic ---
    loadStats() {
        const saved = localStorage.getItem('tz_stats');
        try {
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.error("Error parsing stats", e);
        }
        return {
            correctQuestions: [], // IDs der richtig beantworteten Fragen
            totalSolved: 0,
            lastPlayed: new Date().toISOString()
        };
    }

    saveStats() {
        this.stats.lastPlayed = new Date().toISOString();
        this.stats.totalSolved = this.stats.correctQuestions.length;
        localStorage.setItem('tz_stats', JSON.stringify(this.stats));
    }

    updateGlobalProgress() {
        const progressFill = document.getElementById('global-progress-fill');
        const progressPercentText = document.getElementById('global-progress-percent');
        
        if (!progressFill || !progressPercentText) return;

        const totalQuestions = appData.quizQuestions.length;
        const solvedUnique = this.stats.correctQuestions.length;
        const percentage = totalQuestions > 0 ? Math.round((solvedUnique / totalQuestions) * 100) : 0;

        progressFill.style.width = `${percentage}%`;
        progressPercentText.textContent = `${percentage}%`;
    }

    navigateTo(viewId) {
        if (this.currentView === viewId) return;
        this.currentView = viewId;
        
        this.navBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.target === viewId) {
                btn.classList.add('active');
            }
        });

        this.renderView(viewId);
    }

    renderView(viewId, callback = null) {
        const template = document.getElementById(`tpl-${viewId}`);
        if (!template) return;

        this.mainContent.innerHTML = '';
        const clone = template.content.cloneNode(true);
        this.mainContent.appendChild(clone);

        // Scroll to top of content area on navigation
        if (this.mainContent) {
            this.mainContent.scrollTo(0, 0);
        }

        if (viewId === 'home') this.updateGlobalProgress();
        if (viewId === 'quiz') {
            if (callback) callback();
            else this.initQuiz();
        }
        if (viewId === 'reference') this.initReference();
    }

    // --- Quiz Logic ---
    startQuiz(category) {
        this.currentQuizCategory = category;
        this.isExamMode = false;
        this.navigateTo('quiz');
    }

    startExam() {
        this.isExamMode = true;
        this.currentQuizCategory = 'all';
        this.navigateTo('quiz');
    }

    initQuiz() {
        this.quizState.currentIndex = 0;
        this.quizState.score = 0;
        this.quizState.incorrectAnswers = []; // Track errors
        this.stopExamTimer();

        const quizTitle = document.getElementById('quiz-title');
        const timerContainer = document.getElementById('exam-timer-container');
        const scoreIcon = document.getElementById('score-icon');

        if (this.isExamMode) {
            if (quizTitle) quizTitle.textContent = "Prüfungssimulation";
            if (timerContainer) timerContainer.style.display = 'flex';
            if (scoreIcon) scoreIcon.className = 'fas fa-stopwatch';
            
            // Pick 20 random questions from all
            this.quizState.questions = [...appData.quizQuestions]
                .sort(() => Math.random() - 0.5)
                .slice(0, 20);
            
            this.startExamTimer(600); // 10 minutes (600 seconds)
        } else {
            if (quizTitle) quizTitle.textContent = "Wissens-Quiz";
            if (timerContainer) timerContainer.style.display = 'none';
            if (scoreIcon) scoreIcon.className = 'fas fa-star';

            let filteredQuestions = [...appData.quizQuestions];
            if (this.currentQuizCategory && this.currentQuizCategory !== 'all') {
                filteredQuestions = filteredQuestions.filter(q => q.category === this.currentQuizCategory);
            }
            this.quizState.questions = filteredQuestions.sort(() => Math.random() - 0.5);
        }
        
        this.renderQuestion();
    }

    startExamTimer(seconds) {
        let timeLeft = seconds;
        const timerEl = document.getElementById('exam-timer');
        
        this.examTimer = setInterval(() => {
            timeLeft--;
            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;
            if (timerEl) timerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

            if (timeLeft <= 0) {
                this.finishExam();
            }
        }, 1000);
    }

    stopExamTimer() {
        if (this.examTimer) clearInterval(this.examTimer);
    }

    renderQuestion() {
        const container = document.getElementById('quiz-container');
        const scoreBadge = document.getElementById('quiz-score');
        const progressFill = document.getElementById('quiz-progress-fill');
        
        if (scoreBadge) scoreBadge.textContent = this.isExamMode ? (this.quizState.currentIndex) : this.quizState.score;

        // Update progress bar
        if (progressFill && this.quizState.questions.length > 0) {
            const progressPercent = (this.quizState.currentIndex / this.quizState.questions.length) * 100;
            progressFill.style.width = `${progressPercent}%`;
        }

        if (this.quizState.currentIndex >= this.quizState.questions.length) {
            // Final progress 100%
            if (progressFill) progressFill.style.width = '100%';

            if (this.isExamMode) {
                this.finishExam();
            } else {
                let reviewBtn = '';
                if (this.quizState.incorrectAnswers.length > 0) {
                    reviewBtn = `<button class="btn-secondary" style="margin-top: 10px; width: 100%;" onclick="app.showReview()">Fehler ansehen (${this.quizState.incorrectAnswers.length})</button>`;
                }

                container.innerHTML = `
                    <div class="text-center" style="text-align: center; padding: 20px 0;">
                        <i class="fas fa-trophy" style="font-size: 3rem; color: #fbbf24; margin-bottom: 15px;"></i>
                        <h3 style="margin-bottom: 10px;">Quiz beendet!</h3>
                        <p style="margin-bottom: 20px; color: var(--text-muted);">In dieser Runde: ${this.quizState.score} / ${this.quizState.questions.length}</p>
                        ${reviewBtn}
                        <button class="btn-primary" style="margin-top: 10px;" onclick="app.initQuiz()">Nochmal spielen</button>
                    </div>
                `;
            }
            return;
        }

        const q = this.quizState.questions[this.quizState.currentIndex];
        let optionsHTML = '';
        q.options.forEach((opt, idx) => {
            optionsHTML += `<div class="quiz-option" onclick="app.selectAnswer(${idx}, this)">${opt}</div>`;
        });

        container.innerHTML = `
            <div class="quiz-progress" style="margin-bottom: 15px; font-size: 0.85rem; color: var(--text-muted);">
                Frage ${this.quizState.currentIndex + 1} von ${this.quizState.questions.length}
            </div>
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-options">
                ${optionsHTML}
            </div>
            <div id="quiz-explanation" style="display: none; margin-top: 15px; font-size: 0.9rem; color: var(--text-muted); border-left: 3px solid var(--accent-blue); padding-left: 10px;"></div>
            <button id="next-btn" class="btn-primary quiz-next-btn" style="display: none;" onclick="app.nextQuestion()">Nächste Frage</button>
        `;
    }

    selectAnswer(selectedIndex, element) {
        if (document.getElementById('next-btn').style.display === 'flex') return;

        const q = this.quizState.questions[this.quizState.currentIndex];
        const options = document.querySelectorAll('.quiz-option');

        let isCorrect = (selectedIndex === q.correctIndex);

        if (this.isExamMode) {
            // No immediate feedback in exam mode, just highlight selection
            element.classList.add('selected');
            if (isCorrect) {
                this.quizState.score++;
            } else {
                this.quizState.incorrectAnswers.push({
                    question: q,
                    selectedIdx: selectedIndex
                });
            }
            
            document.getElementById('next-btn').style.display = 'flex';
            document.getElementById('next-btn').textContent = "Weiter";
        } else {
            if (isCorrect) {
                element.classList.add('correct');
                this.quizState.score++;
                if (!this.stats.correctQuestions.includes(q.id)) {
                    this.stats.correctQuestions.push(q.id);
                    this.saveStats();
                }
            } else {
                element.classList.add('incorrect');
                options[q.correctIndex].classList.add('correct');
                this.quizState.incorrectAnswers.push({
                    question: q,
                    selectedIdx: selectedIndex
                });
            }

            const exp = document.getElementById('quiz-explanation');
            exp.innerHTML = `<strong>Erklärung:</strong> ${q.explanation}`;
            exp.style.display = 'block';
            document.getElementById('next-btn').style.display = 'flex';
        }
    }

    finishExam() {
        this.stopExamTimer();
        const container = document.getElementById('quiz-container');
        const score = this.quizState.score;
        const total = this.quizState.questions.length;
        const percent = (score / total) * 100;
        
        let grade = 5;
        let message = "Nicht bestanden";
        let color = "#ef4444";

        if (percent >= 90) { grade = 1; message = "Sehr Gut!"; color = "#10b981"; }
        else if (percent >= 75) { grade = 2; message = "Gut"; color = "#3b82f6"; }
        else if (percent >= 60) { grade = 3; message = "Befriedigend"; color = "#8b5cf6"; }
        else if (percent >= 50) { grade = 4; message = "Genügend"; color = "#f59e0b"; }

        let reviewBtn = '';
        if (this.quizState.incorrectAnswers.length > 0) {
            reviewBtn = `<button class="btn-secondary" style="margin-top: 15px; width: 100%;" onclick="app.showReview()">Fehler analysieren (${this.quizState.incorrectAnswers.length})</button>`;
        }

        container.innerHTML = `
            <div class="text-center" style="text-align: center; padding: 20px 0;">
                <h3 style="margin-bottom: 20px;">Prüfungsergebnis</h3>
                <div class="grade-circle" style="width: 100px; height: 100px; border-radius: 50%; border: 4px solid ${color}; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: 700; margin: 0 auto 15px; color: ${color};">
                    ${grade}
                </div>
                <h4 style="color: ${color}; margin-bottom: 10px;">${message}</h4>
                <p style="margin-bottom: 20px; color: var(--text-muted);">${score} von ${total} richtig (${Math.round(percent)}%)</p>
                ${reviewBtn}
                <button class="btn-primary" style="margin-top: 10px;" onclick="app.navigateTo('home')">Zurück zum Home</button>
            </div>
        `;
    }

    showReview() {
        const container = document.getElementById('quiz-container');
        const progressFill = document.getElementById('quiz-progress-fill');
        if (progressFill) progressFill.style.width = '0%'; // Reset bar visually for review title

        let reviewHTML = `
            <div class="review-header" style="margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">
                <h3>Fehler-Analyse</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">Hier sind die Fragen, bei denen du noch unsicher bist:</p>
            </div>
            <div class="review-list">
        `;

        this.quizState.incorrectAnswers.forEach(item => {
            const q = item.question;
            const selectedText = q.options[item.selectedIdx] || "Keine Antwort";
            const correctText = q.options[q.correctIndex];

            reviewHTML += `
                <div class="review-item glass-card">
                    <h4>${q.question}</h4>
                    <p class="your-answer"><strong>Deine Wahl:</strong> ${selectedText}</p>
                    <p class="correct-answer"><strong>Richtig wäre:</strong> ${correctText}</p>
                    <p class="explanation"><strong>Tipp:</strong> ${q.explanation}</p>
                </div>
            `;
        });

        reviewHTML += `
            </div>
            <div style="margin-top: 25px;">
                <button class="btn-primary" onclick="app.navigateTo('home')">Lern-Session beenden</button>
            </div>
        `;

        container.innerHTML = reviewHTML;
        container.scrollTop = 0;
    }

    nextQuestion() {
        this.quizState.currentIndex++;
        this.renderQuestion();
    }



    // --- Reference Logic ---
    initReference() {
        this.renderReferenceList(appData.referenceData);
    }

    renderReferenceList(data) {
        const list = document.getElementById('reference-list');
        if (!list) return;
        list.innerHTML = '';
        data.forEach((item) => {
            const el = document.createElement('div');
            el.className = 'ref-item glass-card';
            el.innerHTML = `
                <div class="ref-item-header">
                    <h3>${item.title}</h3>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="ref-item-content">
                    ${item.content}
                </div>
            `;
            el.addEventListener('click', () => {
                el.classList.toggle('expanded');
            });
            list.appendChild(el);
        });
    }

    filterReference() {
        const query = document.getElementById('ref-search').value.toLowerCase();
        const filtered = appData.referenceData.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.content.toLowerCase().includes(query)
        );
        this.renderReferenceList(filtered);
    }
}

const app = new TechZeichnerApp();
