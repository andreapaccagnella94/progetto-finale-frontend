# 🚀 Progetto: Frontend React - Progetto Finale

Benvenuto! Questo repository contiene il frontend dell'applicazione realizzata con React e Vite come progetto finale del corso Boolean. 

## Panoramica 📌

- 🧩 Stack: React 19 + Vite
- 🎨 UI: Bootstrap 5 + bootstrap-icons
- 🔁 Routing client-side con `react-router-dom`
- 📡 Richieste HTTP con `axios`

Questa single-page app mostra pagine relative a giocatori, partite e squadre, con componenti riutilizzabili, stato globale tramite Context API e layout condivisi.

## Funzionalità principali ✨

- ✅ Navigazione fra pagine (`Home`, `Games`, `Players`, `Player`)
- 🧩 Componenti riutilizzabili (`Header`, `Footer`, `BadgeScore`, `BadgeTeam`, `Loading`)
- 🌐 Comunicazione con API esterne (via `axios`)
- 🔄 Stato globale con `GlobalContext`
- ⚡ Sviluppo rapido con Vite (HMR)

## Requisiti 🧾

- Node.js (consigliato LTS)
- npm

## Installazione e avvio (sviluppo) ⚙️

1. Clona il repository

```bash
git clone <url-repo>
```

2. Entra nella cartella del frontend

```bash
cd progetto-finale-frontend
```

3. Installa le dipendenze

```bash
npm install
```

4. Avvia il server di sviluppo

```bash
npm run dev
```

5. (Opzionale) Build di produzione e anteprima

```bash
npm run build
npm run preview
```

## Struttura del progetto (riferimenti utili) 🗂️

- `src/` — codice sorgente principale
  - `App.jsx`, `main.jsx`, `index.css`
  - `components/` — componenti UI (`Header`, `Footer`, `BadgeScore`, `BadgeTeam`, `Loading`)
  - `pages/` — pagine (`HomePage`, `GamesPage`, `PlayersPage`, `PlayerPage`)
  - `contexts/GlobalContext.jsx` — stato globale con Context API
  - `layouts/DefaultLayout.jsx` — layout principale

## Suggerimenti per chi esplora la repository 💡

- Per capire rapidamente: apri `src/pages` e `src/components` per vedere la struttura delle view e dei componenti.
- Controlla `src/contexts/GlobalContext.jsx` per comprendere la gestione dello stato condiviso.

## Note per i recruiter / riferimenti professionali 📬

Questo repository è una vetrina dei miei lavori. Se vuoi visionare altri progetti o il mio CV, contattami via email o LinkedIn e ti fornirò volentieri materiale aggiuntivo.

- ✉️ Email: paccagnella.andrea@outlook.com
- 💼 LinkedIn: https://www.linkedin.com/in/paccagnella-andrea/


## Contribuire 🤝

Questo repository è principalmente personale. Suggerimenti e issue sono benvenuti — apri una issue o una pull request.

---

## Licenza 📝

Progetto rilasciato sotto licenza MIT.

---

