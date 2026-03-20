const externalQuestions = [
    {
        "id": 1,
        "kategorie": "Blattformate",
        "frage": "Wie groß ist die Fläche eines beschnittenen Zeichenblattes im Format A0 genau?",
        "optionen": [
            "0,5 m²",
            "1,0 m²",
            "1,5 m²",
            "2,0 m²"
        ],
        "antwort": 1
    },
    {
        "id": 2,
        "kategorie": "Blattformate",
        "frage": "Durch welchen Vorgang entstehen die jeweils kleineren Blattgrößen (A1, A2, A3 usw.) aus dem Ausgangsformat?",
        "optionen": [
            "Durch Drittelung der längeren Seite",
            "Durch fortlaufendes Verdoppeln der kürzeren Seite",
            "Durch fortlaufendes Halbieren des Ausgangsformates",
            "Durch Abzug eines festen Randstreifens von 20 mm"
        ],
        "antwort": 2
    },
    {
        "id": 3,
        "kategorie": "Layout",
        "frage": "Wo muss das Schriftfeld auf einer technischen Zeichnung zwingend platziert werden?",
        "optionen": [
            "In der linken oberen Ecke",
            "In der Mitte am unteren Rand",
            "In der rechten oberen Ecke",
            "In der rechten unteren Ecke"
        ],
        "antwort": 3
    },
    {
        "id": 4,
        "kategorie": "Layout",
        "frage": "Wie breit ist der Zeichenblattrand an der Heftrandseite bei allen Formaten?",
        "optionen": [
            "5 mm",
            "10 mm",
            "20 mm",
            "25 mm"
        ],
        "antwort": 2
    },
    {
        "id": 5,
        "kategorie": "Blattformate",
        "frage": "Wie entstehen sogenannte 'Streifenformate', die z. B. für Elektroinstallationspläne genutzt werden?",
        "optionen": [
            "Durch Teilung eines Formats parallel zur kurzen Seite",
            "Durch Aneinanderkleben mehrerer A4-Blätter",
            "Durch Teilung eines Formats parallel zur langen Seite",
            "Durch diagonales Schneiden eines A0-Blattes"
        ],
        "antwort": 0
    },
    {
        "id": 6,
        "kategorie": "Normschrift",
        "frage": "Welche zwei wesentlichen Anforderungen werden an die Beschriftung einer technischen Zeichnung gestellt?",
        "optionen": [
            "Schnelligkeit und Farbechtheit",
            "Lesbarkeit und Einheitlichkeit",
            "Kursivschrift und künstlerische Gestaltung",
            "Geringer Platzbedarf und Fettdruck"
        ],
        "antwort": 1
    },
    {
        "id": 7,
        "kategorie": "Normschrift",
        "frage": "Wie groß muss der Abstand zwischen den Buchstaben in der Normschrift mindestens sein?",
        "optionen": [
            "Entsprechend der halben Linienstärke",
            "Mindestens 1 mm bei jeder Schriftgröße",
            "Entsprechend der einfachen Linienstärke",
            "Entsprechend der zweifachen Linienstärke"
        ],
        "antwort": 3
    },
    {
        "id": 8,
        "kategorie": "Normschrift",
        "frage": "Bei der Schriftform B (vertikal) beträgt die Höhe der Kleinbuchstaben im Verhältnis zu den Großbuchstaben:",
        "optionen": [
            "5/10 der Höhe",
            "7/10 der Höhe",
            "10/10 (sie sind gleich groß)",
            "1/10 der Höhe"
        ],
        "antwort": 1
    },
    {
        "id": 9,
        "kategorie": "Maßstab",
        "frage": "Was definiert der Begriff 'Maßstab' in einer technischen Zeichnung?",
        "optionen": [
            "Das Gewicht des Werkstücks",
            "Die Anzahl der benötigten Ansichten",
            "Das Verhältnis der Darstellungsgröße zur tatsächlichen Größe",
            "Die Toleranzgrenze bei der Fertigung"
        ],
        "antwort": 2
    },
    {
        "id": 10,
        "kategorie": "Maßstab",
        "frage": "Welcher der folgenden Maßstäbe ist ein 'Vergrößerungsmaßstab'?",
        "optionen": [
            "1:2",
            "1:1",
            "1:10",
            "5:1"
        ],
        "antwort": 3
    },
    {
        "id": 11,
        "kategorie": "Maßstab",
        "frage": "Ein Werkstück wird im Maßstab M 1:5 gezeichnet. Was bedeutet das für die Darstellung?",
        "optionen": [
            "1 mm auf der Zeichnung entspricht 5 mm am Werkstück",
            "5 mm auf der Zeichnung entsprechen 1 mm am Werkstück",
            "Die Zeichnung ist fünfmal so groß wie das Original",
            "Alle Winkel werden durch 5 geteilt"
        ],
        "antwort": 0
    },
    {
        "id": 12,
        "kategorie": "Maßstab",
        "frage": "Wie verhält es sich mit der Bemaßung eines Werkstücks, wenn dieses in einem verkleinerten Maßstab gezeichnet wird?",
        "optionen": [
            "Es werden die halbierten Maße eingetragen",
            "Die Bemaßung erfolgt immer nach dem Originalmaß",
            "Es müssen keine Maße eingetragen werden",
            "Die Maße werden mit dem Buchstaben 'V' gekennzeichnet"
        ],
        "antwort": 1
    },
    {
        "id": 13,
        "kategorie": "Maßstab",
        "frage": "Welche Maße werden bei Maßstabszeichnungen ausdrücklich NICHT beeinflusst?",
        "optionen": [
            "Längenmaße",
            "Durchmesser",
            "Winkelmaße",
            "Radien"
        ],
        "antwort": 2
    },
    {
        "id": 14,
        "kategorie": "Blattformate",
        "frage": "Wie groß sind die Abmessungen eines handelsüblichen Zeichenblattes im Format A4?",
        "optionen": [
            "297 x 420 mm",
            "105 x 148 mm",
            "210 x 297 mm",
            "148 x 210 mm"
        ],
        "antwort": 2
    },
    {
        "id": 15,
        "kategorie": "Layout",
        "frage": "In welcher Lage wird das Format A4 auf einer technischen Zeichnung vorzugsweise verwendet?",
        "optionen": [
            "Hochformat (Hochlage)",
            "Querformat (Querlage)",
            "Quadratformat",
            "Schräglage"
        ],
        "antwort": 0
    },
    {
        "id": 16,
        "kategorie": "Normschrift",
        "frage": "Welche Linienbreite ist bei der Normschrift (Schriftform B) für eine Schriftgröße von 7 mm vorgesehen?",
        "optionen": [
            "0,35 mm",
            "0,5 mm",
            "0,7 mm",
            "1,0 mm"
        ],
        "antwort": 2
    },
    {
        "id": 17,
        "kategorie": "Linien",
        "frage": "In welchem Verhältnis stehen breite zu schmalen Linien innerhalb einer Liniengruppe?",
        "optionen": [
            "1 : 1",
            "2 : 1",
            "3 : 1",
            "Wurzel 2 : 1"
        ],
        "antwort": 1
    },
    {
        "id": 18,
        "kategorie": "Linien",
        "frage": "Welche Liniengruppe wird laut Norm vorzugsweise für die Formate A4 bis A2 empfohlen?",
        "optionen": [
            "Liniengruppe 0,25",
            "Liniengruppe 0,35",
            "Liniengruppe 0,5",
            "Liniengruppe 0,7"
        ],
        "antwort": 2
    },
    {
        "id": 19,
        "kategorie": "Linien",
        "frage": "Wofür wird eine breite Volllinie in einer technischen Zeichnung verwendet?",
        "optionen": [
            "Für Maßlinien und Maßhilfslinien",
            "Für sichtbare Kanten und sichtbare Umrisse",
            "Für Mittellinien und Symmetrielinien",
            "Für schraffierte Flächen"
        ],
        "antwort": 1
    },
    {
        "id": 20,
        "kategorie": "Linien",
        "frage": "Welche Linienart wird für die Darstellung von verdeckten Kanten und verdeckten Umrissen verwendet?",
        "optionen": [
            "Breite Volllinie",
            "Schmale Strich-Punktlinie",
            "Schmale Freihandlinie",
            "Schmale Strichlinie"
        ],
        "antwort": 3
    },
    {
        "id": 21,
        "kategorie": "Linien",
        "frage": "Wofür wird die schmale Strich-Punktlinie typischerweise eingesetzt?",
        "optionen": [
            "Für Gewindegrund und Schraffuren",
            "Für Mittellinien, Symmetrielinien und Teilkreise",
            "Für Umrisse benachbarter Teile",
            "Für sichtbare Umrisse bei Schnitten"
        ],
        "antwort": 1
    },
    {
        "id": 22,
        "kategorie": "Linien",
        "frage": "Welchen Minimalabstand sollten parallel laufende Linien nicht unterschreiten?",
        "optionen": [
            "0,1 mm",
            "0,5 mm",
            "0,8 mm",
            "1,2 mm"
        ],
        "antwort": 2
    },
    {
        "id": 23,
        "kategorie": "Linien",
        "frage": "Was ist beim Zusammentreffen von Linien an 'Ecken' zu beachten?",
        "optionen": [
            "Die Ecken werden immer freigelassen",
            "Die Ecken werden immer ausgezeichnet (berühren sich)",
            "Die Ecken werden mit einem Punkt markiert",
            "Die Ecken müssen immer abgerundet werden"
        ],
        "antwort": 1
    },
    {
        "id": 24,
        "kategorie": "Linien",
        "frage": "Wie sollten sich Mittel- oder Symmetrielinien idealerweise schneiden?",
        "optionen": [
            "Der Schnittpunkt soll im Bereich der Linienstücke (Striche) liegen",
            "Der Schnittpunkt soll genau in einer Lücke liegen",
            "Sie dürfen sich niemals schneiden",
            "Der Schnittpunkt muss mit einem Kreis markiert werden"
        ],
        "antwort": 0
    },
    {
        "id": 25,
        "kategorie": "Linien",
        "frage": "Wie werden Lichtkanten (imaginäre Linien bei Durchdringungen) gezeichnet?",
        "optionen": [
            "Als breite Volllinie",
            "Als schmale Volllinie (endet ca. 2mm vor der Kante)",
            "Als gestrichelte Linie",
            "Als schmale Strich-Punktlinie"
        ],
        "antwort": 1
    },
    {
        "id": 26,
        "kategorie": "Projektion",
        "frage": "Warum sind rein räumliche Darstellungen als Fertigungszeichnungen meist nicht geeignet?",
        "optionen": [
            "Zu hoher Speicherbedarf",
            "Verzerrung/Verkürzung und verdeckte Rückseiten",
            "Rechtlich nicht zulässig",
            "Keine Farbdarstellung möglich"
        ],
        "antwort": 1
    },
    {
        "id": 27,
        "kategorie": "Axonometrie",
        "frage": "Welchen Vorteil bietet die axonometrische Darstellung gegenüber der Normalprojektion?",
        "optionen": [
            "Zeigt alles in wahrer Größe",
            "Einzige Methode für Bemaßung",
            "Ermöglicht auch Laien schnelles Erfassen",
            "Zwingend für die Fertigung"
        ],
        "antwort": 2
    },
    {
        "id": 28,
        "kategorie": "Isometrie",
        "frage": "In welchem Winkel zur Waagrechten werden bei der Isometrie die Breiten- und Tiefenachsen gezeichnet?",
        "optionen": [
            "45°",
            "15°",
            "30°",
            "7°/42°"
        ],
        "antwort": 2
    },
    {
        "id": 29,
        "kategorie": "Isometrie",
        "frage": "Wie verhalten sich die Seitenlängen (L:B:H) bei einer isometrischen Darstellung zueinander?",
        "optionen": [
            "1 : 0,5 : 1",
            "1 : 1 : 1",
            "0,5 : 1 : 0,5",
            "1 : 2 : 1"
        ],
        "antwort": 1
    },
    {
        "id": 30,
        "kategorie": "Dimetrie",
        "frage": "Welches Seitenverhältnis wird bei der dimetrischen Darstellung für die Tiefenmaße angewendet?",
        "optionen": [
            "Verdoppelt",
            "1 : 1",
            "Verkürzt auf die Hälfte (1 : 0,5)",
            "Um ein Drittel gekürzt"
        ],
        "antwort": 2
    },
    {
        "id": 31,
        "kategorie": "Kabinett",
        "frage": "Was ist ein wesentlicher Vorteil der Kabinettprojektion gegenüber der Dimetrie?",
        "optionen": [
            "30° Achsen",
            "Vorderfläche rechtwinklig (Kreise bleiben Kreise)",
            "Keine Verkürzung",
            "Keine Zeichendreiecke nötig"
        ],
        "antwort": 1
    },
    {
        "id": 32,
        "kategorie": "Kabinett",
        "frage": "Wie sollte die Lage von Werkstücken mit Bohrungen bei einer Kabinettprojektion gewählt werden?",
        "optionen": [
            "In Seitenansicht",
            "In Draufsicht",
            "Im 45°-Winkel",
            "In der Vorderfläche"
        ],
        "antwort": 3
    },
    {
        "id": 33,
        "kategorie": "Isometrie",
        "frage": "Wo findet die isometrische Darstellung ein spezielles Anwendungsgebiet?",
        "optionen": [
            "Porträtmalerei",
            "Rohrleitungsbau (Isometrien)",
            "Nur Normblätter",
            "Komplizierte Rundungen"
        ],
        "antwort": 1
    },
    {
        "id": 34,
        "kategorie": "Normalprojektion",
        "frage": "Welcher entscheidende Vorteil ergibt sich bei der Normalprojektion?",
        "optionen": [
            "Nur eine Ansicht nötig",
            "Ansichten erscheinen maßgenau und unverzerrt",
            "Schnelleres Freihandzeichnen",
            "Keine Bemaßung nötig"
        ],
        "antwort": 1
    },
    {
        "id": 35,
        "kategorie": "Projektion",
        "frage": "Welche Projektionsmethode wird in Europa vorzugsweise angewendet?",
        "optionen": [
            "Methode 3",
            "Pfeilmethode",
            "Kabinettprojektion",
            "Methode 1"
        ],
        "antwort": 3
    },
    {
        "id": 36,
        "kategorie": "Methode 1",
        "frage": "Wo liegt bei der Projektionsmethode 1 die 'Seitenansicht von links'?",
        "optionen": [
            "Links neben der Vorderansicht",
            "Rechts neben der Vorderansicht",
            "Oberhalb der Vorderansicht",
            "Unterhalb der Vorderansicht"
        ],
        "antwort": 1
    },
    {
        "id": 37,
        "kategorie": "Methode 3",
        "frage": "Wie unterscheidet sich die Projektionsmethode 3 (USA) hauptsächlich von Methode 1?",
        "optionen": [
            "Draufsicht liegt oberhalb der Vorderansicht",
            "Nur Schwarz-Weiß",
            "Keine Rückansicht",
            "Seitenansicht rechts liegt links"
        ],
        "antwort": 0
    },
    {
        "id": 38,
        "kategorie": "Layout",
        "frage": "Woran erkennt man im Schriftfeld sofort die angewendete Projektionsmethode?",
        "optionen": [
            "Farbe",
            "Name des Zeichners",
            "Lage des Symbolkegels",
            "Maßstab"
        ],
        "antwort": 2
    },
    {
        "id": 39,
        "kategorie": "Pfeilmethode",
        "frage": "Wann wird die 'Pfeilmethode' angewendet?",
        "optionen": [
            "Nur bei Würfeln",
            "Bei abweichender Anordnung der Ansichten",
            "Zur Maßstabsvergrößerung",
            "Wenn Mittellinien fehlen"
        ],
        "antwort": 1
    },
    {
        "id": 40,
        "kategorie": "Projektion",
        "frage": "Welches Kriterium entscheidet über die Wahl der Vorderansicht?",
        "optionen": [
            "Kleinste Fläche",
            "Wenigste Details",
            "Aussagekräftigste Körperfläche",
            "Muss quadratisch sein"
        ],
        "antwort": 2
    },
    {
        "id": 41,
        "kategorie": "Projektion",
        "frage": "Wie viele Ansichten sollten von einem Werkstück gezeichnet werden?",
        "optionen": [
            "Immer sechs",
            "Auf ein Minimum beschränkt",
            "Mindestens drei",
            "So viele wie möglich"
        ],
        "antwort": 1
    },
    {
        "id": 42,
        "kategorie": "Schnitt",
        "frage": "Welchen Zweck verfolgt die Anwendung von Schnittdarstellungen?",
        "optionen": [
            "Materialersparnis",
            "Innere Details klar darstellen",
            "Schönere Optik",
            "Äußere Umrisse betonen"
        ],
        "antwort": 1
    },
    {
        "id": 43,
        "kategorie": "Schnitt",
        "frage": "Wie wird der Verlauf einer Schnittebene gekennzeichnet?",
        "optionen": [
            "Breite Volllinie",
            "Schmale Strichlinie",
            "Strich-Punktlinie mit breiten Enden/Pfeilen",
            "Zickzacklinie"
        ],
        "antwort": 2
    },
    {
        "id": 44,
        "kategorie": "Schraffur",
        "frage": "In welchem Winkel werden Schraffurlinien vorzugsweise gezeichnet?",
        "optionen": [
            "30°",
            "45°",
            "60°",
            "90°"
        ],
        "antwort": 1
    },
    {
        "id": 45,
        "kategorie": "Schnitt",
        "frage": "Wie werden sehr dünne Querschnitte (Bleche) im Schnitt gezeichnet?",
        "optionen": [
            "Komplett geschwärzt",
            "Weiß gelassen",
            "Wellenlinie",
            "Strich-Punkt"
        ],
        "antwort": 0
    },
    {
        "id": 46,
        "kategorie": "Schraffur",
        "frage": "Was gilt für die Schraffur mehrerer Teile in einer Baugruppe?",
        "optionen": [
            "Immer gleiche Richtung",
            "Richtung oder Abstand müssen variieren",
            "Nur ein Teil schraffieren",
            "Farbig markieren"
        ],
        "antwort": 1
    },
    {
        "id": 47,
        "kategorie": "Schnitt",
        "frage": "Welche Teile werden in Längsrichtung üblicherweise NICHT geschnitten?",
        "optionen": [
            "Gehäuse",
            "Gussteile",
            "Vollkörper (Wellen, Bolzen, Schrauben)",
            "Rohre"
        ],
        "antwort": 2
    },
    {
        "id": 48,
        "kategorie": "Schnitt",
        "frage": "Wie wird die Begrenzung bei einem Ausbruch (Teilschnitt) ausgeführt?",
        "optionen": [
            "Breite Volllinie",
            "Schmale Freihandlinie",
            "Dicke Strich-Punktlinie",
            "Keine Begrenzung"
        ],
        "antwort": 1
    },
    {
        "id": 49,
        "kategorie": "Bemaßung",
        "frage": "Aus welchen vier Elementen besteht eine Maßangabe?",
        "optionen": [
            "Zahl, Farbe, Pfeil, Punkt",
            "Linie, Hilfslinie, Pfeil, Zahl",
            "Maßstab, Nummer, Linie, Toleranz",
            "Zahl, Einheit, Stärke, Pfeil"
        ],
        "antwort": 1
    },
    {
        "id": 50,
        "kategorie": "Bemaßung",
        "frage": "In welcher Standardeinheit werden Maße im Maschinenbau angegeben?",
        "optionen": [
            "cm",
            "m",
            "dm",
            "mm"
        ],
        "antwort": 3
    },
    {
        "id": 51,
        "kategorie": "Bemaßung",
        "frage": "Wie groß sollte der Abstand der ersten Maßlinie zur Körperkante mindestens sein?",
        "optionen": [
            "5 mm",
            "10 mm",
            "20 mm",
            "2 mm"
        ],
        "antwort": 1
    },
    {
        "id": 52,
        "kategorie": "Bemaßung",
        "frage": "Wo wird die Maßzahl im Verhältnis zur Maßlinie platziert?",
        "optionen": [
            "Unterbricht die Linie",
            "Unterhalb",
            "Oberhalb und mittig",
            "Rechtes Ende"
        ],
        "antwort": 2
    },
    {
        "id": 53,
        "kategorie": "Bemaßung",
        "frage": "Wie werden Maßzahlen bei schrägen Linien ausgerichtet?",
        "optionen": [
            "Immer waagerecht",
            "Von unten oder rechts lesbar",
            "Im 45°-Winkel",
            "Senkrecht"
        ],
        "antwort": 1
    },
    {
        "id": 54,
        "kategorie": "Bemaßung",
        "frage": "Was tun, wenn zwischen Hilfslinien zu wenig Platz für Pfeile ist?",
        "optionen": [
            "Pfeile weglassen",
            "Pfeile außen auf Verlängerung setzen",
            "Drüber zeichnen",
            "Maßstab ändern"
        ],
        "antwort": 1
    },
    {
        "id": 55,
        "kategorie": "Bemaßung",
        "frage": "Welches Symbol kennzeichnet einen Durchmesser?",
        "optionen": [
            "R",
            "Quadrat",
            "Symbol ø",
            "Dreieck"
        ],
        "antwort": 2
    },
    {
        "id": 56,
        "kategorie": "Bemaßung",
        "frage": "Wie werden Radien in einer Zeichnung bemaßt?",
        "optionen": [
            "ø",
            "Umfangswert",
            "Kennbuchstabe R",
            "Gar nicht"
        ],
        "antwort": 2
    },
    {
        "id": 57,
        "kategorie": "Bemaßung",
        "frage": "Was bedeutet das vorangestellte Symbol 'S'?",
        "optionen": [
            "Schmiedeteil",
            "Sphärisch (Kugelform)",
            "Sicherheit",
            "Spezialmaß"
        ],
        "antwort": 1
    },
    {
        "id": 58,
        "kategorie": "Bemaßung",
        "frage": "Wie wird eine quadratische Fläche vereinfacht bemaßt?",
        "optionen": [
            "Kreuz in Ansicht",
            "Quadratsymbol vor der Zahl",
            "Rote Farbe",
            "Buchstabe Q"
        ],
        "antwort": 1
    },
    {
        "id": 59,
        "kategorie": "Bemaßung",
        "frage": "Wie werden 45°-Fasen vereinfacht bemaßt?",
        "optionen": [
            "Winkel/Bogen",
            "Breite x Winkel (z.B. 2x45°)",
            "Nicht nötig",
            "Nur schräge Linie"
        ],
        "antwort": 1
    },
    {
        "id": 60,
        "kategorie": "Bemaßung",
        "frage": "Welches Symbol kennzeichnet eine Schlüsselweite?",
        "optionen": [
            "ø",
            "SW vor der Zahl",
            "Dreieck",
            "Sechskant"
        ],
        "antwort": 1
    },
    {
        "id": 61,
        "kategorie": "Bemaßung",
        "frage": "Wie bemaßt man Senkungen mit Durchmesser und Winkel?",
        "optionen": [
            "In Schraffur",
            "An getrennten Ansichten",
            "Vorzugsweise Hinweislinie",
            "Symbol S"
        ],
        "antwort": 2
    },
    {
        "id": 62,
        "kategorie": "Bemaßung",
        "frage": "Wo steht die Maßzahl bei extrem engem Platz?",
        "optionen": [
            "Weglassen",
            "Über/Neben Stelle mit Hinweislinie",
            "Senkrecht im Teil",
            "Linie unterbrechen"
        ],
        "antwort": 1
    },
    {
        "id": 63,
        "kategorie": "Bemaßung",
        "frage": "Was gilt für konzentrische Kreise (Durchmesser)?",
        "optionen": [
            "Maximal zwei",
            "Winkel versetzt anordnen",
            "Exakt untereinander",
            "Nur in Seitenansicht"
        ],
        "antwort": 1
    },
    {
        "id": 64,
        "kategorie": "Bemaßung",
        "frage": "Wie wird die Zuordnung einer Maßzahl außerhalb gesichert?",
        "optionen": [
            "Hinweislinie",
            "Andere Farbe",
            "Raten",
            "Ausrufezeichen"
        ],
        "antwort": 0
    },
    {
        "id": 65,
        "kategorie": "Bemaßung",
        "frage": "Wann ist eine Tabellenbemaßung sinnvoll?",
        "optionen": [
            "Große Werkstücke",
            "Viele gleiche Elemente (Lochplatten)",
            "Zeitersparnis",
            "Nur bei ANSI-Norm"
        ],
        "antwort": 1
    },
    {
        "id": 66,
        "kategorie": "Bemaßung",
        "frage": "Was kennzeichnet die steigende Bemaßung?",
        "optionen": [
            "Gemeinsamer Nullpunkt",
            "Kettenbemaßung",
            "Größere Zahlen",
            "Nur Vertikal"
        ],
        "antwort": 0
    },
    {
        "id": 67,
        "kategorie": "Bemaßung",
        "frage": "Wie werden vertikale Maßzahlen geschrieben?",
        "optionen": [
            "Kopfstehend",
            "Von rechts lesbar, parallel zur Linie",
            "Immer waagerecht",
            "Von links lesbar"
        ],
        "antwort": 1
    },
    {
        "id": 68,
        "kategorie": "Bemaßung",
        "frage": "Was bedeutet eine unterstrichene Maßzahl?",
        "optionen": [
            "Wichtig (Prüfmaß)",
            "Maßstäblich unrichtig",
            "Verdeckt",
            "Nachbehandlung nötig"
        ],
        "antwort": 1
    },
    {
        "id": 69,
        "kategorie": "Bemaßung",
        "frage": "Wie bemaßt man Symmetrieteile bei nur einer gezeichneten Hälfte?",
        "optionen": [
            "Linie über Achse + 1 Pfeil",
            "Zahl verdoppeln",
            "2 Pfeile links",
            "Voll zeichnen"
        ],
        "antwort": 0
    },
    {
        "id": 70,
        "kategorie": "Bemaßung",
        "frage": "Was bedeutet ein eingeklammertes Maß (50)?",
        "optionen": [
            "Toleranz",
            "Hilfsmaß (nur Info)",
            "Rohmaß",
            "Fehlerhaft"
        ],
        "antwort": 1
    },
    {
        "id": 71,
        "kategorie": "Bemaßung",
        "frage": "Wie ordnet man parallele Maßlinien an?",
        "optionen": [
            "Kleinste außen",
            "Kreuzungen vermeiden (klein innen)",
            "Gleiche Länge",
            "Beliebig"
        ],
        "antwort": 1
    },
    {
        "id": 72,
        "kategorie": "Linien",
        "frage": "Wie weit ragen Mittellinien über die Körperkante hinaus?",
        "optionen": [
            "Gar nicht",
            "Etwa 2 bis 5 mm",
            "Bis zum Blattrand",
            "10 mm"
        ],
        "antwort": 1
    }
];