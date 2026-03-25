const externalQuestions = [
    // --- BLATTFORMAT & LAYOUT (1000+) ---
    {
        "id": 1001,
        "kategorie": "Blattformate",
        "frage": "Wie groß ist die Fläche eines Zeichenblattes A0 genau?",
        "optionen": ["0,5 m²", "1,0 m²", "1,5 m²", "2,0 m²"],
        "antwort": 1,
        "erklaerung": "Ein A0-Blatt hat eine Fläche von exakt 1 m². Daraus leiten sich alle anderen Formate durch Halbierung ab."
    },
    {
        "id": 1002,
        "kategorie": "Blattformate",
        "frage": "Wie groß ist die Blattgröße A4 im vergleich zu A3? A4 ist .....",
        "optionen": ["um 1/3 größer", "um 1/3 kleiner", "doppelt so groß", "um die Hälfte kleiner"],
        "antwort": 3,
        "erklaerung": "Jedes kleinere Format entsteht durch das Halbieren der längeren Seite des vorhergehenden Formats."
    },
    {
        "id": 1003,
        "kategorie": "Blattformate",
        "frage": "Welcher Härtegrad von Grafit-Minen eignet sich am besten zum Zeichnen von schmalen Linien?",
        "optionen": ["2H", "HB", "B", "4H"],
        "antwort": 0,
        "erklaerung": "Harte Minen der Härte 2H oder auch 3H eignen sich für schmale Linien und zum vorzeichnen besonders gut."
    },
    {
        "id": 1004,
        "kategorie": "Blattformate",
        "frage": "Welche Abmessungen hat ein handelsübliches Zeichenblatt im Format A4?",
        "optionen": ["297 x 420 mm", "105 x 148 mm", "210 x 297 mm", "148 x 210 mm"],
        "antwort": 2,
        "erklaerung": "Das Format A4 misst 210 x 297 mm."
    },
    {
        "id": 1005,
        "kategorie": "Blattformate",
        "frage": "Wo ist das Schriftfeld auf einer technischen Zeichnung zwingend platziert?",
        "optionen": ["In der linken oberen Ecke", "In der Mitte am unteren Rand", "In der rechten oberen Ecke", "In der rechten unteren Ecke"],
        "antwort": 3,
        "erklaerung": "Das Schriftfeld liegt immer unten rechts im Zeichenbereich."
    },
    {
        "id": 1006,
        "kategorie": "Blattformate",
        "frage": "Wie breit ist der Zeichenblattrand an der Heftrandseite bei allen Formaten?",
        "optionen": ["5 mm", "10 mm", "20 mm", "25 mm"],
        "antwort": 2,
        "erklaerung": "Der Heftrand ist normgerecht 20 mm breit, um Platz für die Lochung zu lassen."
    },
    {
        "id": 1007,
        "kategorie": "Blattformate",
        "frage": "Welches Format A4 ist für technische Zeichnungen vorzugsweise zu verwenden?",
        "optionen": ["A4-Hochformat", "A4-Querformat", "Quadratformat", "Schräglage"],
        "antwort": 0,
        "erklaerung": "A4 wird im Gegensatz zu größeren Formaten vorzugsweise im Hochformat verwendet."
    },
    {
        "id": 1008,
        "kategorie": "Blattformate",
        "frage": "Woran erkennt man im Schriftfeld sofort die angewendete Projektionsmethode?",
        "optionen": ["Farbe", "Name des Zeichners", "Lage des Symbolkegels", "Maßstab"],
        "antwort": 2,
        "erklaerung": "Der Symbolkegel zeigt an, ob Methode 1 (Europa) oder Methode 3 (USA) verwendet wurde."
    },
    {
        "id": 1009,
        "kategorie": "Blattformate",
        "frage": "Welche zwei wesentlichen Anforderungen werden an die Beschriftung einer technischen Zeichnung gestellt?",
        "optionen": ["Schnelligkeit und Farbechtheit", "Lesbarkeit und Einheitlichkeit", "Kursivschrift und künstlerische Gestaltung", "Geringer Platzbedarf und Fettdruck"],
        "antwort": 1,
        "erklaerung": "Die Normschrift sichert Lesbarkeit und ein einheitliches Erscheinungsbild."
    },

    {
        "id": 1015,
        "kategorie": "Blattformate",
        "frage": "Wie groß ist der Heftrand bei allen Zeichenblattformaten?",
        "optionen": ["10 mm", "15 mm", "20 mm", "25 mm"],
        "antwort": 2,
        "erklaerung": "Der Zeichenblattrand ist an der Heftrandseite 20 mm, an den anderen 3 Seiten nur 5 mm."
    },
    {
        "id": 1016,
        "kategorie": "Blattformate",
        "frage": "Welches Seitenverhältnis haben genormte Zeichenblätter?",
        "optionen": ["1 : 1", "1 : 2", "1 : √2", "2 : 3"],
        "antwort": 2,
        "erklaerung": "Das Seitenverhältnis für alle genormten Zeichenblätter ist mit 1 : √2 festgelegt."
    },

    {
        "id": 1018,
        "kategorie": "Blattformate",
        "frage": "Welchen Neigungswinkel darf kursive Normschrift nach rechts haben?",
        "optionen": ["10°", "15°", "20°", "25°"],
        "antwort": 1,
        "erklaerung": "Normschrift darf unter einem Winkel von 15° nach rechts geneigt (kursiv) sein."
    },

    // --- LINIENARTEN (2000+) ---
    {
        "id": 2001,
        "kategorie": "Linienarten",
        "frage": "In welchem Verhältnis stehen breite zu schmalen Linien innerhalb einer Liniengruppe?",
        "optionen": ["1 : 1", "2 : 1", "3 : 1", "Wurzel 2 : 1"],
        "antwort": 1,
        "erklaerung": "Die Stärken stehen immer im Verhältnis 2:1 (z.B. 0,5 mm zu 0,25 mm)."
    },
    {
        "id": 2002,
        "kategorie": "Linienarten",
        "frage": "Welche Liniengruppe wird laut Norm vorzugsweise für die Formate A4 bis A2 empfohlen?",
        "optionen": ["Liniengruppe 0,25", "Liniengruppe 0,35", "Liniengruppe 0,5", "Liniengruppe 0,7"],
        "antwort": 2,
        "erklaerung": "Die Liniengruppe 0,5 ist der Standard für mittlere Formate."
    },
    {
        "id": 2003,
        "kategorie": "Linienarten",
        "frage": "Wofür wird eine breite Volllinie in einer technischen Zeichnung verwendet?",
        "optionen": ["Für Maßlinien und Maßhilfslinien", "Für sichtbare Kanten und sichtbare Umrisse", "Für Mittellinien und Symmetrielinien", "Für schraffierte Flächen"],
        "antwort": 1,
        "erklaerung": "Breite Volllinien (Typ A) stellen alles Sichtbare dar."
    },
    {
        "id": 2004,
        "kategorie": "Linienarten",
        "frage": "Welche Linienart wird für die Darstellung von verdeckten Kanten und verdeckten Umrissen verwendet?",
        "optionen": ["Breite Volllinie", "Schmale Strich-Punktlinie", "Schmale Freihandlinie", "Schmale Strichlinie"],
        "antwort": 3,
        "erklaerung": "Verdecktes wird mit der schmalen Strichlinie (Typ F) gezeichnet."
    },
    {
        "id": 2005,
        "kategorie": "Linienarten",
        "frage": "Wofür wird die schmale Strich-Punktlinie typischerweise eingesetzt?",
        "optionen": ["Für Gewindegrund und Schraffuren", "Für Mittellinien, Symmetrielinien und Teilkreise", "Für Umrisse benachbarter Teile", "Für sichtbare Umrisse bei Schnitten"],
        "antwort": 1,
        "erklaerung": "Die schmale Strich-Punktlinie (Typ G) kennzeichnet Symmetrieachsen und Mittellinien."
    },
    {
        "id": 2006,
        "kategorie": "Linienarten",
        "frage": "Welchen Minimalabstand sollten parallel laufende Linien nicht unterschreiten?",
        "optionen": ["0,1 mm", "0,5 mm", "0,8 mm", "1,2 mm"],
        "antwort": 2,
        "erklaerung": "Der Abstand sollte mindestens 0,8 mm betragen, um ein Zulaufen beim Drucken/Kopieren zu verhindern."
    },
    {
        "id": 2007,
        "kategorie": "Linienarten",
        "frage": "Was ist beim Zusammentreffen von Linien an 'Ecken' zu beachten?",
        "optionen": ["Die Ecken werden immer freigelassen", "Die Ecken werden immer ausgezeichnet (berühren sich)", "Die Ecken werden mit einem Punkt markiert", "Die Ecken müssen immer abgerundet werden"],
        "antwort": 1,
        "erklaerung": "Linien müssen an Ecken immer geschlossen sein (sich berühren)."
    },
    {
        "id": 2008,
        "kategorie": "Linienarten",
        "frage": "Wie sollten sich Mittel- oder Symmetrielinien idealerweise schneiden?",
        "optionen": ["Der Schnittpunkt soll im Bereich der Linienstücke (Striche) liegen", "Der Schnittpunkt soll genau in einer Lücke liegen", "Sie dürfen sich niemals schneiden", "Der Schnittpunkt muss mit einem Kreis markiert werden"],
        "antwort": 0,
        "erklaerung": "Der Schnittpunkt sollte immer in einem langen Strich liegen, nicht in einer Lücke."
    },
    {
        "id": 2009,
        "kategorie": "Linienarten",
        "frage": "Wie werden Lichtkanten (imaginäre Linien bei Durchdringungen) gezeichnet?",
        "optionen": ["Als breite Volllinie", "Als schmale Volllinie (endet ca. 2mm vor der Kante)", "Als gestrichelte Linie", "Als schmale Strich-Punktlinie"],
        "antwort": 1,
        "erklaerung": "Lichtkanten sind schmale Volllinien, die kurz vor dem eigentlichen Umriss enden."
    },
    {
        "id": 2010,
        "kategorie": "Linienarten",
        "frage": "Wie weit ragen Mittellinien über die Körperkante hinaus?",
        "optionen": ["Gar nicht", "Etwa 3 mm", "Bis zum Blattrand", "10 mm"],
        "antwort": 1,
        "erklaerung": "Der Überstand sollte zwischen 2 und 5 mm liegen."
    },
    {
        "id": 2011,
        "kategorie": "Linienarten",
        "frage": "Welche Linienart wird für sichtbare Kanten und Umrisse verwendet?",
        "optionen": ["Schmale Volllinie", "Breite Volllinie", "Schmale Strichpunktlinie", "Freihandlinie"],
        "antwort": 1,
        "erklaerung": "Sichtbare Kanten und Umrisse werden laut ISO 128-2 mit einer breiten Volllinie (Typ A) gezeichnet."
    },
    {
        "id": 2012,
        "kategorie": "Linienarten",
        "frage": "Wie wird eine verdeckte Kante normgerecht dargestellt?",
        "optionen": ["Schmale Strichlinie", "Breite Strichlinie", "Schmale Strichpunktlinie", "Schmale Volllinie"],
        "antwort": 0,
        "erklaerung": "Verdeckte Kanten und Umrisse zeichnet man mit einer schmalen Strichlinie (Typ F)."
    },
    {
        "id": 2013,
        "kategorie": "Linienarten",
        "frage": "Was kennzeichnet ein Gewinde in der Seitenansicht (Schnitt)?",
        "optionen": ["Zwei breite Volllinien", "Eine breite und eine schmale Volllinie", "Eine gestrichelte Linie", "Eine Wellenlinie"],
        "antwort": 1,
        "erklaerung": "Das Gewinde wird außen mit einer breiten Volllinie und der Gewindegrund mit einer schmalen Volllinie dargestellt."
    },
    {
        "id": 2014,
        "kategorie": "Linienarten",
        "frage": "In welchem Verhältnis stehen breite zu schmalen Linien in einer Liniengruppe?",
        "optionen": ["1 : 1", "3 : 1", "2 : 1", "√2 : 1"],
        "antwort": 2,
        "erklaerung": "In jeder Liniengruppe stehen breite und schmale Linien immer im Verhältnis von 2 : 1."
    },
    {
        "id": 2015,
        "kategorie": "Linienarten",
        "frage": "Welche Liniengruppe empfiehlt die Norm für die Formate A4 bis A2?",
        "optionen": ["0,25", "0,35", "0,5", "0,7"],
        "antwort": 2,
        "erklaerung": "Die Norm empfiehlt für die Formate A4 bis A2 die Liniengruppe 0,5."
    },
    {
        "id": 2016,
        "kategorie": "Linienarten",
        "frage": "Was bedeutet das Symbol 'Ra' in der Oberflächenangabe?",
        "optionen": ["Rautiefe", "Randabstand", "Mittenrauwert", "Radius"],
        "antwort": 2,
        "erklaerung": "Ra steht für den arithmetischen Mittenrauwert einer Oberfläche."
    },

    {
        "id": 2016,
        "kategorie": "Linienarten",
        "frage": "Wie breit ist eine 'unsichtbare Linie' in der Liniengruppe 0,5?",
        "optionen": ["0,35mm", "0,5mm", "0,7mm", "0,25mm"],
        "antwort": 3,
        "erklaerung": "Die 'unsichtbare Linie' ist eine schmale Linie, also halb so breit wie die Liniengruppe. Bei der Liniengruppe 0,5 also 0,25mm breit"
    },






    // --- MAẞSTÄBE (3000+) ---
    {
        "id": 3001,
        "kategorie": "Maßstäbe",
        "frage": "Was definiert der Begriff 'Maßstab' in einer technischen Zeichnung?",
        "optionen": ["Das Gewicht des Werkstücks", "Die Anzahl der benötigten Ansichten", "Das Verhältnis der Darstellungsgröße zur tatsächlichen Größe", "Die Toleranzgrenze bei der Fertigung"],
        "antwort": 2,
        "erklaerung": "Der Maßstab ist das Verhältnis zwischen der Größe am Blatt und der Realität."
    },
    {
        "id": 3002,
        "kategorie": "Maßstäbe",
        "frage": "Welcher der folgenden Maßstäbe ist ein 'Vergrößerungsmaßstab'?",
        "optionen": ["1:2", "1:1", "1:10", "5:1"],
        "antwort": 3,
        "erklaerung": "Steht die größere Zahl vorne (z.B. 5:1), handelt es sich um eine Vergrößerung."
    },
    {
        "id": 3003,
        "kategorie": "Maßstäbe",
        "frage": "Ein Werkstück wird im Maßstab M 1:5 gezeichnet. Was bedeutet das für die Darstellung?",
        "optionen": ["1 mm auf der Zeichnung entspricht 5 mm am Werkstück", "5 mm auf der Zeichnung entsprechen 1 mm am Werkstück", "Die Zeichnung ist fünfmal so groß wie das Original", "Alle Winkel werden durch 5 geteilt"],
        "antwort": 0,
        "erklaerung": "1:5 ist eine Verkleinerung. 1 mm auf dem Papier repräsentiert 5 mm am realen Objekt."
    },

    {
        "id": 3005,
        "kategorie": "Maßstäbe",
        "frage": "Welche Maße werden bei Maßstabszeichnungen ausdrücklich NICHT beeinflusst?",
        "optionen": ["Längenmaße", "Durchmesser", "Winkelmaße", "Radien"],
        "antwort": 2,
        "erklaerung": "Winkel bleiben bei jeder Skalierung gleich."
    },
    {
        "id": 3006,
        "kategorie": "Maßstäbe",
        "frage": "Welches Maßstab steht für 'Natürlicher Maßstab'?",
        "optionen": ["M 1:2", "M 2:1", "M 1:1", "M 1:10"],
        "antwort": 2,
        "erklaerung": "M 1:1 bedeutet, dass die Zeichnung genauso groß ist wie das Werkstück in der Realität."
    },
    {
        "id": 3007,
        "kategorie": "Maßstäbe",
        "frage": "Welcher Maßstab ist nicht Normgerecht?",
        "optionen": ["1:50", "25:1", "1:1", "1:10"],
        "antwort": 1,
        "erklaerung": "Der Maßstab 25:1 ist nicht Normgerecht. Norgerecht sind z.B. 1:1, 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200, ..."
    },
    {
        "id": 3008,
        "kategorie": "Maßstäbe",
        "frage": "Was wird beim Maßstab M 1:5 auf der Zeichnung dargestellt?",
        "optionen": ["1 mm Zeichnung = 5 mm Werkstück", "5 mm Zeichnung = 1 mm Werkstück", "1 mm Zeichnung = 1 mm Werkstück", "5 mm Zeichnung = 5 mm Werkstück"],
        "antwort": 0,
        "erklaerung": "M 1:5 ist ein Verkleinerungsmaßstab, bei dem 1 mm auf der Zeichnung 5 mm am realen Werkstück entsprechen."
    },

    // --- BEMAẞUNG (4000+) ---

    {
        "id": 4002,
        "kategorie": "Bemaßung",
        "frage": "In welcher Standardeinheit werden Maße im Maschinenbau angegeben?",
        "optionen": ["cm", "m", "dm", "mm"],
        "antwort": 3,
        "erklaerung": "Millimeter ist der Standard. Einheiten werden meist nicht extra notiert."
    },
    {
        "id": 4003,
        "kategorie": "Bemaßung",
        "frage": "Wie groß sollte der Abstand der ersten Maßlinie zur Körperkante sein?",
        "optionen": ["5 mm", "10 mm", "20 mm", "2 mm"],
        "antwort": 1,
        "erklaerung": "Die erste Maßlinie sollte einen Abstand von 10 mm zur Körperkante haben."
    },


    {
        "id": 4006,
        "kategorie": "Bemaßung",
        "frage": "Was tun, wenn zwischen den Maßhilfslinien zu wenig Platz für Pfeile ist?",
        "optionen": ["Pfeile weglassen", "Pfeile außen auf Verlängerung setzen", "Drüber zeichnen", "Maßstab ändern"],
        "antwort": 1,
        "erklaerung": "Die Pfeile werden dann von außen nach innen gesetzt."
    },
    {
        "id": 4007,
        "kategorie": "Bemaßung",
        "frage": "Welches Symbol kennzeichnet einen Durchmesser?",
        "optionen": ["○", "□", "Ø", "△"],
        "antwort": 2,
        "erklaerung": "Das Durchmesserzeichen Ø wird vor die Maßzahl gesetzt."
    },
    {
        "id": 4008,
        "kategorie": "Bemaßung",
        "frage": "Wie werden Radien in einer Zeichnung bemaßt bzw. gekennzeichnet?",
        "optionen": ["Ra", "r", "R", "Gar nicht"],
        "antwort": 2,
        "erklaerung": "Radien werden mit dem vorangestellten Buchstaben R gekennzeichnet."
    },
    {
        "id": 4009,
        "kategorie": "Bemaßung",
        "frage": "Was bedeutet das vorangestellte Symbol 'S'?",
        "optionen": ["Schmiedeteil", "Kugelform", "Sicherheit", "Spezialmaß"],
        "antwort": 1,
        "erklaerung": "S steht für Sphärisch (z.B. SR für Kugelradius)."
    },
    {
        "id": 4010,
        "kategorie": "Bemaßung",
        "frage": "Wie wird eine quadratische Fläche vereinfacht bemaßt?",
        "optionen": ["Kreuz in Ansicht", "Quadreatsymbol (□) vor der Zahl", "Rote Farbe", "Buchstabe Q"],
        "antwort": 1,
        "erklaerung": "Ein Quadrat-Symbol vor dem Maß erspart die zweite Bemaßung."
    },
    {
        "id": 4011,
        "kategorie": "Bemaßung",
        "frage": "Welche Fasenbemaßung ist korrekt angegeben?",
        "optionen": ["45°x3", "3x45°", "2x30°", "keine davon"],
        "antwort": 1,
        "erklaerung": "45-Grad-Fasen dürfen als Kombinationsmaß (Breite x Winkel) also zb. 3x45° geschrieben werden."
    },
    {
        "id": 4012,
        "kategorie": "Bemaßung",
        "frage": "Welches Symbol kennzeichnet eine Schlüsselweite?",
        "optionen": ["ø", "SW (vor der Zahl)", "□", "⬡"],
        "antwort": 1,
        "erklaerung": "SW kennzeichnet den Abstand paralleler Flächen für Werkzeugangriffe. Z. B. SW 13"
    },

    {
        "id": 4019,
        "kategorie": "Bemaßung",
        "frage": "Wie werden Maßzahlen auf Maßlinien geschrieben?",
        "optionen": ["dafür gibt es keine Regel", "Von rechts lesbar, parallel zur Linie", "Immer waagerecht", "Von links lesbar"],
        "antwort": 1,
        "erklaerung": "Nach der Rechtsleseregel stehen sie links der Linie, von rechts lesbar."
    },
    {
        "id": 4020,
        "kategorie": "Bemaßung",
        "frage": "Was bedeutet eine unterstrichene Maßzahl?",
        "optionen": ["Wichtig (Prüfmaß)", "Maßstäblich unrichtig", "Verdeckt", "Nachbehandlung nötig"],
        "antwort": 1,
        "erklaerung": "Unterstrichene Maße sind maßstäblich nicht getreu gezeichnet (z.B. nach Änderung)."
    },

    {
        "id": 4022,
        "kategorie": "Bemaßung",
        "frage": "Was bedeutet ein eingeklammertes Maß (50)?",
        "optionen": ["Toleranz", "Hilfsmaß (nur Info)", "Rohmaß", "Fehlerhaft"],
        "antwort": 1,
        "erklaerung": "Klammern kennzeichnen Hilfsmaße, die für die Fertigung nicht direkt notwendig sind."
    },
    {
        "id": 4024,
        "kategorie": "Bemaßung",
        "frage": "Wie groß ist der Abstand der Maßlinie zur Körperkante in der Regel?",
        "optionen": ["ca. 5 mm", "ca. 10 mm", "ca. 15 mm", "ca. 20 mm"],
        "antwort": 1,
        "erklaerung": "Die erste Maßlinie sollte etwa 10 mm Abstand zur Körperkante haben, weitere zueinander etwa 7-8 mm."
    },
























    // --- PROJEKTIONEN (5000+) ---

    {
        "id": 5002,
        "kategorie": "Projektionen",
        "frage": "Welchen Vorteil bietet die axonometrische Darstellung gegenüber der Normalprojektion?",
        "optionen": ["Zeigt alles in wahrer Größe", "Einzige Methode für Bemaßung", "Ermöglicht auch Laien schnelles Erfassen", "Zwingend für die Fertigung"],
        "antwort": 2,
        "erklaerung": "Räumliche Bilder sind intuitiv und für jeden sofort verständlich."
    },
    {
        "id": 5003,
        "kategorie": "Projektionen",
        "frage": "In welchem Winkel zur Waagrechten werden bei der Isometrieschen Darstellung die Breiten- und Tiefenachsen gezeichnet?",
        "optionen": ["45°", "15°", "30°", "7°/42°"],
        "antwort": 2,
        "erklaerung": "In der Isometrieschen Darstellung stehen beide Achsen im 30°-Winkel zur Horizontalen."
    },
    {
        "id": 5004,
        "kategorie": "Projektionen",
        "frage": "Wie verhalten sich die Seitenlängen (L:B:H) bei einer isometrischen Darstellung zueinander?",
        "optionen": ["1 : 0,5 : 1", "1 : 1 : 1", "0,5 : 1 : 0,5", "1 : 2 : 1"],
        "antwort": 1,
        "erklaerung": "In der Isometrie werden alle drei Hauptachsen unverkürzt (1:1:1) gezeichnet."
    },
    {
        "id": 5005,
        "kategorie": "Projektionen",
        "frage": "Welches Seitenverhältnis wird bei der dimetrischen Darstellung für die Tiefenmaße angewendet?",
        "optionen": ["Verdoppelt", "1 : 1", "Verkürzt auf die Hälfte (1 : 0,5)", "Um ein Drittel gekürzt"],
        "antwort": 2,
        "erklaerung": "In der Dimetrie wird die Tiefenachse auf die Hälfte verkürzt dargestellt."
    },

    {
        "id": 5006,
        "kategorie": "Projektionen",
        "frage": "Wie lautet der Alternativ-Name für die Hauptansicht (Projektionsmethode 1)?",
        "optionen": ["Vorderansicht", "Draufsicht", "Seitenansicht", "Rückansicht"],
        "antwort": 0,
        "erklaerung": "Hauptansicht ist die gleiche Ansicht wie die Vorderansicht oder Hauptansicht. Man hat also für diese Ansicht 3 Namen die das gleiche bedeuten."
    },

    {
        "id": 5007,
        "kategorie": "Projektionen",
        "frage": "Wie lautet der Alternativ-Name für die Hauptansicht (Projektionsmethode 1)?",
        "optionen": ["Grundriss", "Main-Street", "Kreuzriss", "Aufriss"],
        "antwort": 3,
        "erklaerung": "Die Hauptansicht ist die Vorderansicht und sollte jene Ansicht sein, die die meisten Informationen enthält."
    },

    {
        "id": 5008,
        "kategorie": "Projektionen",
        "frage": "Wo findet die isometrische Darstellung ein spezielles Anwendungsgebiet?",
        "optionen": ["Porträtmalerei", "Rohrleitungsbau (Isometrien)", "Nur Normblätter", "Komplizierte Rundungen"],
        "antwort": 1,
        "erklaerung": "Der Rohrleitungsbau nutzt fast ausschließlich Isometrien für Verlegepläne."
    },
    {
        "id": 5009,
        "kategorie": "Projektionen",
        "frage": "Welcher entscheidende Vorteil ergibt sich bei der Normalprojektion?",
        "optionen": ["Nur eine Ansicht nötig", "Ansichten erscheinen maßgenau und unverzerrt", "Schnelleres Freihandzeichnen", "Keine Bemaßung nötig"],
        "antwort": 1,
        "erklaerung": "Die orthogonale Projektion bildet Flächen in wahrer Größe und Form ab."
    },
    {
        "id": 5010,
        "kategorie": "Projektionen",
        "frage": "Welche Projektionsmethode wird in Europa vorzugsweise angewendet?",
        "optionen": ["Projektionsmethode 3", "Pfeilmethode", "Kabinettprojektion", "Projektionsmethode 1"],
        "antwort": 3,
        "erklaerung": "Projektionsmethode 1 (E im Schriftfeld) ist der europäische Standard."
    },
    {
        "id": 5011,
        "kategorie": "Projektionen",
        "frage": "Wo liegt bei der Projektionsmethode 1 die 'Seitenansicht von links'?",
        "optionen": ["Links neben der Vorderansicht", "Rechts neben der Vorderansicht", "Oberhalb der Vorderansicht", "Unterhalb der Vorderansicht"],
        "antwort": 1,
        "erklaerung": "In Methode 1 wird das Bauteil 'gekippt' - die linke Seite erscheint rechts."
    },


    {
        "id": 5014,
        "kategorie": "Projektionen",
        "frage": "Welches Kriterium entscheidet über die Wahl der Vorderansicht?",
        "optionen": ["Kleinste Fläche", "Wenigste Details", "Aussagekräftigste Körperfläche", "Muss quadratisch sein"],
        "antwort": 2,
        "erklaerung": "Die Vorderansicht sollte die charakteristischste Fläche des Objekts sein."
    },
    {
        "id": 5015,
        "kategorie": "Projektionen",
        "frage": "Wie viele Ansichten sollten von einem Werkstück gezeichnet werden?",
        "optionen": ["Immer sechs", "Auf ein Minimum beschränkt", "Mindestens drei", "So viele wie möglich"],
        "antwort": 1,
        "erklaerung": "Man zeichnet nur so viele Ansichten, wie für die eindeutige Bestimmung nötig sind."
    },
    {
        "id": 5016,
        "kategorie": "Projektionen",
        "frage": "Welchen Zweck verfolgt die Anwendung von Schnittdarstellungen?",
        "optionen": ["Materialersparnis", "Innere Details klar darstellen", "Schönere Optik", "Äußere Umrisse betonen"],
        "antwort": 1,
        "erklaerung": "Schnitte machen innere Hohlräume und Bohrungen ohne viele gestrichelte Linien sichtbar."
    },
    {
        "id": 5017,
        "kategorie": "Projektionen",
        "frage": "Wie wird der Verlauf einer Schnittebene gekennzeichnet?",
        "optionen": ["Breite Volllinie", "Schmale Strichlinie", "Strich-Punktlinie mit breiten Enden/Pfeilen", "Zickzacklinie"],
        "antwort": 2,
        "erklaerung": "Die Schnittverlaufslinie hat an den Enden breite Striche und Blickrichtungspfeile."
    },
    {
        "id": 5018,
        "kategorie": "Projektionen",
        "frage": "In welchem Winkel werden Schraffurlinien vorzugsweise gezeichnet?",
        "optionen": ["30°", "45°", "60°", "90°"],
        "antwort": 1,
        "erklaerung": "Schraffuren werden standardmäßig im 45-Grad-Winkel ausgeführt."
    },
    {
        "id": 5019,
        "kategorie": "Projektionen",
        "frage": "Wie werden sehr dünne Querschnitte (Bleche) im Schnitt gezeichnet?",
        "optionen": ["Komplett geschwärzt", "Weiß gelassen", "Wellenlinie", "Strich-Punkt"],
        "antwort": 0,
        "erklaerung": "Dünne Teile werden im Schnitt oft einfach vollflächig geschwärzt."
    },
    {
        "id": 5020,
        "kategorie": "Projektionen",
        "frage": "Was gilt für die Schraffur mehrerer Teile in einer Baugruppe?",
        "optionen": ["Immer gleiche Richtung", "Richtung oder Abstand müssen variieren", "Nur ein Teil schraffieren", "Farbig markieren"],
        "antwort": 1,
        "erklaerung": "Angrenzende Bauteile müssen unterschiedlich schraffiert werden, um sie zu unterscheiden."
    },
    {
        "id": 5021,
        "kategorie": "Projektionen",
        "frage": "Welche Teile werden in Längsrichtung üblicherweise NICHT geschnitten?",
        "optionen": ["Gehäuse", "Gussteile", "Vollkörper (Wellen, Bolzen, Schrauben)", "Rohre"],
        "antwort": 2,
        "erklaerung": "Vollkörper wie Wellen oder Schrauben werden laut Norm im Längsschnitt nicht schraffiert."
    },
    {
        "id": 5022,
        "kategorie": "Projektionen",
        "frage": "Wie wird die Begrenzung bei einem Ausbruch (Teilschnitt) ausgeführt?",
        "optionen": ["Breite Volllinie", "Schmale Freihandlinie", "Dicke Strich-Punktlinie", "Keine Begrenzung"],
        "antwort": 1,
        "erklaerung": "Ausbrüche werden durch schmale Freihand- oder Zickzacklinien begrenzt."
    },
    {
        "id": 5023,
        "kategorie": "Projektionen",
        "frage": "Welcher Winkel wird standardmäßig für die Isometrische Projektion verwendet?",
        "optionen": ["30° / 30°", "45° / 45°", "0° / 45°", "30° / 60°"],
        "antwort": 0,
        "erklaerung": "Bei der isometrischen Projektion werden beide Tiefenachsen im Winkel von 30° zur Horizontalen gezeichnet."
    },
    {
        "id": 5024,
        "kategorie": "Projektionen",
        "frage": "Wie lautet der Alternativ-Name für die Kreuzriss (Projektionsmethode 1)?",
        "optionen": ["Unteransicht", "Draufsicht", "Hauptansicht", "Seitenansicht"],
        "antwort": 3,
        "erklaerung": "Der Kreuzriss ist die gleiche Ansicht wie die Seitenansicht."
    },

    {
        "id": 5025,
        "kategorie": "Projektionen",
        "frage": "Aufriss, Grundriss, Kreuzriss ist genau gleich wie",
        "optionen": ["Draufsicht, Seitenansicht, Vorderansicht", "Vorderansicht, Seitenansicht, Draufsicht", "Vorderansicht, Draufsicht, Seitenansicht", "Rückansicht, Seitenansicht, Draufsicht"],
        "antwort": 2,
        "erklaerung": "Aufriss (=Hauptansicht oder Vorderansicht), Grundriss (=Draufsicht), Kreuzriss (=Seitenansicht)"
    },

];