const appData = {
    quizQuestions: [
        {
            id: 1,
            category: "Linienarten",
            question: "Welche Linienart wird für sichtbare Kanten und Umrisse verwendet?",
            options: ["Schmale Volllinie", "Breite Volllinie", "Schmale Strichpunktlinie", "Freihandlinie"],
            correctIndex: 1,
            explanation: "Sichtbare Kanten und Umrisse werden laut DIN EN ISO 128-2 mit einer breiten Volllinie (Typ A) gezeichnet."
        },
        {
            id: 2,
            category: "Maßstäbe",
            question: "Welches Maßstäbliche Kürzel steht für 'Natürlicher Maßstab'?",
            options: ["M 1:2", "M 2:1", "M 1:1", "M 1:10"],
            correctIndex: 2,
            explanation: "M 1:1 bedeutet, dass die Zeichnung genauso groß ist wie das Werkstück in der Realität."
        },
        {
            id: 3,
            category: "Linienarten",
            question: "Wie wird eine verdeckte Kante normgerecht dargestellt?",
            options: ["Schmale Strichlinie", "Breite Strichlinie", "Schmale Strichpunktlinie", "Schmale Volllinie"],
            correctIndex: 0,
            explanation: "Verdeckte Kanten und Umrisse zeichnet man mit einer schmalen Strichlinie (Typ F)."
        },
        {
            id: 4,
            category: "Oberflächen",
            question: "Was bedeutet das Symbol 'Ra' in der Oberflächenangabe?",
            options: ["Rautiefe", "Randabstand", "Mittenrauwert", "Radius"],
            correctIndex: 2,
            explanation: "Ra steht für den arithmetischen Mittenrauwert einer Oberfläche."
        },
        {
            id: 5,
            category: "Projektionen",
            question: "Welcher Winkel wird standardmäßig für die Isometrische Projektion verwendet?",
            options: ["30° / 30°", "45° / 45°", "0° / 45°", "30° / 60°"],
            correctIndex: 0,
            explanation: "Bei der isometrischen Projektion werden beide Tiefenachsen im Winkel von 30° zur Horizontalen gezeichnet."
        },
        {
            id: 6,
            category: "Bemaßung",
            question: "Wie groß ist der Abstand der Maßlinie zur Körperkante in der Regel?",
            options: ["ca. 5 mm", "ca. 10 mm", "ca. 15 mm", "ca. 20 mm"],
            correctIndex: 1,
            explanation: "Die erste Maßlinie sollte etwa 10 mm Abstand zur Körperkante haben, weitere zueinander etwa 7-8 mm."
        },
        {
            id: 7,
            category: "Bemaßung",
            question: "In welcher Einheit werden Maße im Maschinenbau standardmäßig auf Zeichnungen angegeben?",
            options: ["Zentimeter (cm)", "Meter (m)", "Millimeter (mm)", "Zoll (inch)"],
            correctIndex: 2,
            explanation: "Wenn keine andere Einheit angegeben ist, gelten alle Maßzahlen auf Maschinenbauzeichnungen in Millimeter."
        },
        {
            id: 8,
            category: "Linienarten",
            question: "Was kennzeichnet ein Gewinde in der Seitenansicht (Schnitt)?",
            options: ["Zwei breite Volllinien", "Eine breite und eine schmale Volllinie", "Eine gestrichelte Linie", "Eine Wellenlinie"],
            correctIndex: 1,
            explanation: "Das Gewinde wird außen mit einer breiten Volllinie und der Gewindegrund mit einer schmalen Volllinie dargestellt."
        },
        {
            id: 9,
            category: "Bemaßung",
            question: "Welches Symbol steht für Durchmesser?",
            options: ["D", "Ø", "R", "d"],
            correctIndex: 1,
            explanation: "Das Ø-Symbol wird vor der Maßzahl verwendet, wenn die Kreisform nicht eindeutig erkennbar ist."
        },
        {
            id: 10,
            category: "Bemaßung",
            question: "Wofür steht die Abkürzung 'SW' bei Schrauben und Muttern?",
            options: ["Schraubenweite", "Spindelwinkel", "Schlüsselweite", "Stahlwerkstoff"],
            correctIndex: 2,
            explanation: "'SW' ist die Schlüsselweite, z.B. SW13 für eine Mutter M8."
        },
        {
            id: 11,
            category: "Blattformate",
            question: "Welcher Norm entspricht die ISO-A-Reihe für Zeichenblätter?",
            options: ["ISO 9001", "ISO 216", "ISO 128", "ISO 5455"],
            correctIndex: 1,
            explanation: "Die Abmessungen der Zeichenblätter der Hauptreihe (ISO-A) sind in der ÖNORM EN ISO 216 festgelegt."
        },
        {
            id: 12,
            category: "Blattformate",
            question: "Wie groß ist die Fläche eines A0-Blattes genau?",
            options: ["0,5 m²", "1 m²", "2 m²", "1,5 m²"],
            correctIndex: 1,
            explanation: "Die Ausgangsgröße aller Formate ist das A0-Blatt mit einer Fläche von genau 1 m²."
        },
        {
            id: 13,
            category: "Blattformate",
            question: "Wie groß ist der Heftrand bei allen Zeichenblattformaten?",
            options: ["10 mm", "15 mm", "20 mm", "25 mm"],
            correctIndex: 2,
            explanation: "Der Zeichenblattrand ist an der Heftrandseite 20 mm, an den anderen Seiten nur 5 mm."
        },
        {
            id: 14,
            category: "Blattformate",
            question: "Welches Seitenverhältnis haben genormte Zeichenblätter?",
            options: ["1 : 1", "1 : 2", "1 : √2", "2 : 3"],
            correctIndex: 2,
            explanation: "Das Seitenverhältnis für alle genormten Zeichenblätter ist mit 1 : √2 festgelegt."
        },
        {
            id: 15,
            category: "Normschrift",
            question: "Welcher Norm entspricht die Beschriftung (Normschrift)?",
            options: ["ISO 3098", "ISO 216", "ISO 128", "ISO 5455"],
            correctIndex: 0,
            explanation: "Technische Zeichnungen werden mit Normschrift nach ÖNORM EN ISO 3098-2 beschriftet."
        },
        {
            id: 16,
            category: "Maßstäbe",
            question: "Welches Maß zeichnet man bei einem Maßstab von M 2:1 ein?",
            options: ["Das doppelte Maß", "Das halbe Maß", "Immer das Originalmaß", "Das Maß in cm"],
            correctIndex: 2,
            explanation: "Die Bemaßung des Werkstückes erfolgt immer nach dem Originalmaß - gleichgültig in welchem Maßstab gezeichnet wird."
        },
        {
            id: 17,
            category: "Normschrift",
            question: "Welchen Neigungswinkel darf kursive Normschrift nach rechts haben?",
            options: ["10°", "15°", "20°", "25°"],
            correctIndex: 1,
            explanation: "Normschrift darf unter einem Winkel von 15° nach rechts geneigt (kursiv) sein."
        },
        {
            id: 18,
            category: "Linienarten",
            question: "In welchem Verhältnis stehen breite zu schmalen Linien in einer Liniengruppe?",
            options: ["1 : 1", "3 : 1", "2 : 1", "√2 : 1"],
            correctIndex: 2,
            explanation: "In jeder Liniengruppe stehen breite und schmale Linien immer im Verhältnis von 2 : 1."
        },
        {
            id: 19,
            category: "Linienarten",
            question: "Welche Liniengruppe empfiehlt die Norm für die Formate A4 bis A2?",
            options: ["0,25", "0,35", "0,5", "0,7"],
            correctIndex: 2,
            explanation: "Die Norm empfiehlt für die Formate A4 bis A2 die Liniengruppe 0,5."
        },
        {
            id: 20,
            category: "Maßstäbe",
            question: "Was wird beim Maßstab M 1:5 auf der Zeichnung dargestellt?",
            options: ["1 mm Zeichnung = 5 mm Werkstück", "5 mm Zeichnung = 1 mm Werkstück", "1 mm Zeichnung = 1 mm Werkstück", "5 mm Zeichnung = 5 mm Werkstück"],
            correctIndex: 0,
            explanation: "M 1:5 ist ein Verkleinerungsmaßstab, bei dem 1 mm auf der Zeichnung 5 mm am realen Werkstück entsprechen."
        }
    ],



    referenceData: [
        {
            title: "Blattformate (ISO-A-Reihe)",
            content: "• A0: 841 x 1189 mm (1 m²)<br>• A1: 594 x 841 mm<br>• A2: 420 x 594 mm<br>• A3: 297 x 420 mm<br>• A4: 210 x 297 mm<br>• Ränder: Heftrand 20mm, sonst 5mm."
        },
        {
            title: "Zeichnungsmaßstäbe (ISO 5455)",
            content: "• Natürlich: 1:1<br>• Verkleinerung: 1:2, 1:5, 1:10, 1:20, 1:50, 1:100<br>• Vergrößerung: 2:1, 5:1, 10:1, 20:1, 50:1, 100:1<br>• Winkelmaße werden nicht beeinflusst!"
        },
        {
            title: "Normschrift (ISO 3098)",
            content: "• Nenngrößen: 2,5 - 3,5 - 5 - 7 - 10 - 14 - 20 mm<br>• Abstand zwischen Buchstaben: mind. 2x Linienstärke<br>• Kursiv: 15° Neigung nach rechts zulässig."
        },
        {
            title: "Liniengruppen",
            content: "• Verhältnis Breit/Schmal = 2 : 1<br>• Gr. 0,5 (A4-A2): Breit 0,5 / Schmal 0,25 / Text 0,35<br>• Gr. 0,7 (>A2): Breit 0,7 / Schmal 0,35 / Text 0,5"
        }
    ]
};
