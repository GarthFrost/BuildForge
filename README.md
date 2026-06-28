# BuildForge.gg — League of Legends Build Simulator (MVP)

## Overview
ForgeBuild.gg is an interactive League of Legends build simulator that lets players test champion builds and instantly see how stats and power curves change as they add items, runes, and levels.

This MVP focuses on:
- Champion selection
- Item and rune selection
- Real-time stat updates
- A single interactive Power Curve graph
- A basic synergy indicator

## Tech Stack
**Frontend:** React + Vite  
**Backend:** Node.js (Express)  
**Graphing:** Chart.js  
**Hosting:** Vercel (frontend), Render (backend)  
**Data:** Riot Games API  

## MVP Features
- Select a champion
- Add/remove items
- Add/remove runes
- Adjust champion level
- View updated stats
- View a Power Curve graph
- See a synergy indicator

## Out of Scope (MVP)
- Matchups
- DPS rotation modeling
- Multiple graphs
- User accounts
- Saved builds
- Mobile app

## Project Structure
See `/docs/architecture.md` for full details.

## Getting Started
1. Clone the repo  
2. Install dependencies  
3. Add Riot API key to `.env`  
4. Run backend: `npm run dev`  
5. Run frontend: `npm run dev`  

## License
MIT
