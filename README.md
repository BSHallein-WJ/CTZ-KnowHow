# Lern-App

Eine einfache, responsive Web-App zum Lernen und Üben von Fragen, optimiert für mobile Geräte und als Progressive Web App (PWA) konzipiert.

## Features

- **Fragenkatalog:** Verschiedene Fragen (z.B. aus `questions_tz.js`).
- **Prüfungsmodus:** Simulation einer Prüfung mit Zeitlimit und Bewertung.
- **PWA-Unterstützung:** Kann auf dem Startbildschirm installiert werden und funktioniert offline dank Service Worker.
- **Responsive Design:** Optimiert für Smartphones, Tablets und Desktops.

## Installation / Lokale Ausführung

Da es sich um eine statische Web-App handelt, ist keine komplexe Installation erforderlich.

1. Klone das Repository:
   ```bash
   git clone https://github.com/DEIN_USERNAME/Lern-App.git
   ```
2. Öffne die `index.html` in deinem Browser.
   *Empfehlung:* Nutze einen lokalen Webserver (z.B. mit der VS Code Erweiterung "Live Server"), damit der Service Worker korrekt funktioniert.

## Technologien

- **HTML5 & CSS3:** Für Struktur und Design.
- **JavaScript (Vanilla):** Für die App-Logik.
- **Service Worker:** Für Offline-Funktionalität.
- **Web App Manifest:** Für PWA-Features.

## Lizenz

Dieses Projekt steht unter der [MIT Lizenz](LICENSE).
