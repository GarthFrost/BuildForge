# BuildForge — Architecture Overview

## Frontend
The BuildForge frontend is built using React (with Vite or Next.js as the build tool).  
It is responsible for rendering the UI, handling user interactions, and communicating with the backend.

### Key Components
- **ChampionSelector** — choose a champion
- **ItemSelector** — choose items
- **RuneSelector** — choose runes
- **LevelSlider** — adjust champion level
- **StatsPanel** — display calculated stats
- **PowerCurveGraph** — display stat progression over levels

### Responsibilities
- Manage UI state
- Send requests to backend for calculations
- Render graph updates in real time
- Provide clean, responsive user experience

---

## Backend
The backend is a Node.js + Express service that handles:
- Data retrieval from Riot API
- Data normalization
- Stat calculations
- Graph data generation

### Routes
- **GET /champions** — returns champion data
- **GET /items** — returns item data
- **GET /runes** — returns rune data
- **POST /calculate** — returns calculated stats + graph data

### Services
- **riotService** — fetches and caches Riot API data
- **statEngine** — calculates stats based on:
  - Base stats
  - Level scaling
  - Items
  - Runes
- **graphService** — generates power curve data

---

## Data Flow

