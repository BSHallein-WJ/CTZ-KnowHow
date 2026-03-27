class TechZeichnerApp {
    constructor() {
        this.mainContent = document.getElementById('main-content');
        this.navBtns = document.querySelectorAll('.nav-btn');
        this.themeToggleBtn = document.getElementById('theme-toggle');
        this.currentView = 'home';
        this.themes = ['dark', 'light', 'modern'];
        
        // Load Theme
        this.currentTheme = localStorage.getItem('tz_theme') || 'dark';
        this.applyTheme(this.currentTheme);

        // Persistent State
        this.stats = this.loadStats();

        // Session State
        this.quizState = {
            currentIndex: 0,
            score: 0,
            questions: []
        };

        this.allQuestions = [];
        this.isExamMode = false;
        this.isLearningMode = false;
        this.currentQuizCategory = 'all';
        this.examTimer = null;
        this.init();
    }

    async init() {
        // Setup Theme Toggle
        if (this.themeToggleBtn) {
            this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        }

        // Setup Navigation
        this.navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget.dataset.target;
                this.navigateTo(target);
            });
        });

        // Load Questions
        this.loadQuestions();

        // Load Initial View
        this.renderView('home');
    }

    loadQuestions() {
        if (typeof externalQuestions !== 'undefined') {
            this.allQuestions = externalQuestions.map(q => ({
                id: `ext-${q.id}`,
                category: q.kategorie,
                question: q.frage,
                options: q.optionen,
                correctIndex: q.antwort,
                explanation: q.explanation || q.erklaerung || `Viel Erfolg beim nächsten Versuch!`
            }));
            console.log(`Loaded ${this.allQuestions.length} questions.`);
        } else {
            this.allQuestions = [];
            console.error("No questions found in questions_tz.js!");
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
            correctQuestions: [] // IDs der richtig beantworteten Fragen
        };
    }

    saveStats() {
        localStorage.setItem('tz_stats', JSON.stringify(this.stats));
    }

    toggleTheme() {
        let currentIndex = this.themes.indexOf(this.currentTheme);
        currentIndex = (currentIndex + 1) % this.themes.length;
        this.applyTheme(this.themes[currentIndex]);
    }

    applyTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('tz_theme', theme);
        
        // Update theme color meta tag based on theme
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            if (theme === 'dark') metaThemeColor.setAttribute('content', '#0f172a');
            else if (theme === 'light') metaThemeColor.setAttribute('content', '#e2e8f0');
            else if (theme === 'modern') metaThemeColor.setAttribute('content', '#05000a');
        }
        
        // Update toggle button icon
        if (this.themeToggleBtn) {
            const icons = { 'dark': '🌙', 'light': '☀️', 'modern': '✨' };
            this.themeToggleBtn.textContent = icons[theme] || '🌙';
        }
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
        const learningActions = document.getElementById('global-learning-actions');
        const quizActions = document.getElementById('quiz-actions-container');

        if (learningActions) {
            learningActions.style.display = (viewId === 'learning-session') ? 'flex' : 'none';
        }
        
        // Quiz-Actions visibility is also handled but usually reset in renderView
        if (quizActions) {
            quizActions.style.display = 'none'; 
        }

        const template = document.getElementById(`tpl-${viewId}`);
        if (!template) return;

        this.mainContent.innerHTML = '';
        const clone = template.content.cloneNode(true);
        this.mainContent.appendChild(clone);

        // Scroll to top of content area on navigation
        if (this.mainContent) {
            this.mainContent.scrollTo(0, 0);
        }

        if (viewId === 'home') {
            // No action needed for home currently
        }
        if (viewId === 'quiz-home') {
            // No action needed currently
        }
        if (viewId === 'quiz-session') {
            if (callback) callback();
            else this.initQuiz();
        }
        if (viewId === 'learning-home') {
            // No action needed currently
        }
        if (viewId === 'learning-session') {
            this.initLearning();
        }
    }


    // --- Quiz Logic ---
    startQuiz(category) {
        this.currentQuizCategory = category;
        this.isExamMode = false;
        this.navigateTo('quiz-session');
    }

    startExam() {
        this.isExamMode = true;
        this.currentQuizCategory = 'all';
        this.navigateTo('quiz-session');
    }

    startLearning(category) {
        this.currentQuizCategory = category;
        this.isExamMode = false;
        this.navigateTo('learning-session');
    }
    initLearning() {
        this.quizState.currentIndex = 0;
        this.isLearningMode = true;

        // Reset global buttons
        const showBtn = document.getElementById('btn-show-solution');
        const nextBtn = document.getElementById('btn-next-learning');
        if (showBtn) showBtn.style.display = 'flex';
        if (nextBtn) nextBtn.style.display = 'none';

        // Filter questions based on category
        let filteredQuestions = [...this.allQuestions];
        if (this.currentQuizCategory && this.currentQuizCategory !== 'all') {
            filteredQuestions = filteredQuestions.filter(q => q.category === this.currentQuizCategory);
        }

        // Fallback if no questions found (failsafe)
        if (filteredQuestions.length === 0) {
            filteredQuestions = [...this.allQuestions];
        }

        this.quizState.questions = filteredQuestions.sort(() => Math.random() - 0.5);
        this.renderQuestion();
    }

    initQuiz() {
        this.quizState.currentIndex = 0;
        this.quizState.score = 0;
        this.quizState.incorrectAnswers = []; // Track errors
        this.isLearningMode = false;
        this.stopExamTimer();

        const quizTitle = document.getElementById('quiz-title');
        const timerContainer = document.getElementById('exam-timer-container');
        const scoreIcon = document.getElementById('score-icon');

        if (this.isExamMode) {
            if (quizTitle) quizTitle.textContent = "Prüfungssimulation";
            if (timerContainer) timerContainer.style.display = 'flex';
            if (scoreIcon) scoreIcon.textContent = '🕒';

            // Pick 20 random questions from all
            this.quizState.questions = [...this.allQuestions]
                .sort(() => Math.random() - 0.5)
                .slice(0, 20);

            this.startExamTimer(480); // 8 minutes (480 seconds)
        } else {
            if (quizTitle) quizTitle.textContent = "Wissens-Quiz";
            if (timerContainer) timerContainer.style.display = 'none';
            if (scoreIcon) scoreIcon.textContent = '⭐';

            let filteredQuestions = [...this.allQuestions];
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

        // Immediate update to avoid showing old value
        const updateDisplay = (time) => {
            const mins = Math.floor(time / 60);
            const secs = time % 60;
            if (timerEl) timerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        };

        updateDisplay(timeLeft);

        this.examTimer = setInterval(() => {
            timeLeft--;
            updateDisplay(timeLeft);

            if (timeLeft <= 0) {
                this.finishExam();
            }
        }, 1000);
    }

    stopExamTimer() {
        if (this.examTimer) clearInterval(this.examTimer);
    }

    renderQuestion() {
        const container = document.getElementById(this.isLearningMode ? 'learning-container' : 'quiz-container');
        const scoreBadge = document.getElementById('quiz-score');
        const progressFill = document.getElementById(this.isLearningMode ? 'learning-progress-fill' : 'quiz-progress-fill');
        const progressText = document.getElementById('learning-progress');

        if (scoreBadge) scoreBadge.textContent = this.isExamMode ? (this.quizState.currentIndex) : this.quizState.score;

        // Update progress bar
        if (progressFill && this.quizState.questions.length > 0) {
            const progressPercent = (this.quizState.currentIndex / this.quizState.questions.length) * 100;
            progressFill.style.width = `${progressPercent}%`;
        }

        if (progressText) {
            progressText.textContent = `Frage ${this.quizState.currentIndex + 1}/${this.quizState.questions.length}`;
        }

        if (this.quizState.currentIndex >= this.quizState.questions.length) {
            // Final progress 100%
            if (progressFill) progressFill.style.width = '100%';

            if (this.isExamMode) {
                this.finishExam();
            } else if (this.isLearningMode) {
                container.innerHTML = `
                    <div class="text-center" style="text-align: center; padding: 20px 0;">
                        <div style="font-size: 3rem; margin-bottom: 15px;">✅</div>
                        <h3 style="margin-bottom: 10px;">Lern-Session beendet!</h3>
                        <p style="margin-bottom: 20px; color: var(--text-muted);">Du hast alle Fragen in diesem Modul durchgesehen.</p>
                        <button class="btn-primary" onclick="app.navigateTo('home')">Zurück zum Start</button>
                    </div>
                `;
                document.getElementById('btn-show-solution').style.display = 'none';
                document.getElementById('btn-next-learning').style.display = 'none';
            } else {
                let reviewBtn = '';
                if (this.quizState.incorrectAnswers.length > 0) {
                    reviewBtn = `<button class="btn-secondary" style="margin-top: 10px; width: 100%;" onclick="app.showReview()">Fehler ansehen (${this.quizState.incorrectAnswers.length})</button>`;
                }

                container.innerHTML = `
                    <div class="text-center" style="text-align: center; padding: 20px 0;">
                        <div style="font-size: 3rem; margin-bottom: 15px;">🏆</div>
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

        if (this.isLearningMode) {
            container.innerHTML = `
                <div class="quiz-progress" style="margin-bottom: 15px; font-size: 0.85rem; color: var(--text-muted);">
                    Kategorie: ${q.category}
                </div>
                <div class="quiz-question">${q.question}</div>
                <div id="learning-options-reveal" class="quiz-options" style="display: none;">
                    <!-- Will be revealed on showSolution -->
                </div>
                <div id="learning-explanation" style="display: none; margin-top: 15px; font-size: 0.9rem; color: var(--text-muted); border-left: 3px solid var(--accent-blue); padding-left: 10px;">
                    <div class="explanation"></div>
                </div>
            `;
            // Reset visibility of buttons
            document.getElementById('btn-show-solution').style.display = 'flex';
            document.getElementById('btn-next-learning').style.display = 'flex';
            document.getElementById('learning-explanation').style.display = 'none';
        } else {
            container.innerHTML = `
                <div class="quiz-progress" style="margin-bottom: 15px; font-size: 0.85rem; color: var(--text-muted);">
                    Frage ${this.quizState.currentIndex + 1} von ${this.quizState.questions.length}
                </div>
                <div class="quiz-question">${q.question}</div>
                <div class="quiz-options">
                    ${optionsHTML}
                </div>
                <div id="quiz-explanation" style="display: none; margin-top: 15px; font-size: 0.9rem; color: var(--text-muted); border-left: 3px solid var(--accent-blue); padding-left: 10px;"></div>
            `;
            
            // Hide the next button when new question renders
            const quizNextBtn = document.getElementById('quiz-actions-container');
            if (quizNextBtn) quizNextBtn.style.display = 'none';
        }
    }

    selectAnswer(selectedIndex, element) {
        if (this.isLearningMode) {
            this.showSolution();
            return;
        }

        const quizActions = document.getElementById('quiz-actions-container');
        if (quizActions && quizActions.style.display === 'flex') return;

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

            const nextBtn = document.getElementById('quiz-actions-container');
            if (nextBtn) {
                nextBtn.style.display = 'flex';
                document.getElementById('persistent-next-btn').textContent = "Weiter";
            }
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
            
            // Show persistent button
            const nextBtn = document.getElementById('quiz-actions-container');
            if (nextBtn) {
                nextBtn.style.display = 'flex';
                document.getElementById('persistent-next-btn').textContent = "Nächste Frage ➡️";
            }
        }
    }

    showSolution() {
        if (!this.isLearningMode) return;

        const q = this.quizState.questions[this.quizState.currentIndex];
        const optionsReveal = document.getElementById('learning-options-reveal');

        // Render only the correct option
        const correctOpt = q.options[q.correctIndex];
        const optionsHTML = `<div class="quiz-option correct" style="cursor: default;">${correctOpt}</div>`;

        optionsReveal.innerHTML = optionsHTML;
        optionsReveal.style.display = 'flex';

        // Show explanation
        const expContainer = document.getElementById('learning-explanation');
        const expText = expContainer.querySelector('.explanation');
        expText.innerHTML = `<strong>Erklärung:</strong> ${q.explanation}`;
        expContainer.style.display = 'block';

        // Toggle buttons
        document.getElementById('btn-show-solution').style.display = 'none';
        document.getElementById('btn-next-learning').style.display = 'flex';
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



}

const app = new TechZeichnerApp();
