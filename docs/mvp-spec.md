BuildForge.gg — League of Legends Build Simulator

MVP Goal
Let players test champion builds and instantly see how stats and power curves change as they add items, runes, and levels.

Core User Actions
The MVP supports ONLY these actions:

Select a champion

Select items

Select runes

Adjust champion level

View updated stats in real time

View one interactive graph (Power Curve)

See one synergy indicator (“Your build spikes at level X”)

System Responsibilities
The backend must:

Pull champion, item, and rune data from Riot API

Normalize and store/cache data

Calculate base stats + scaling

Apply item stats

Apply rune stats

Generate graph data

Return results instantly

Out‑of‑Scope for MVP
These are explicitly NOT included:

Matchup analysis

DPS rotation modeling

Multiple graphs

User accounts

Saved builds

Mobile app

Esports analytics

Advanced synergy engine

Recommendations

Social features

Fancy UI animations

Success Criteria
The MVP is successful if:

User can select a champion

User can add/remove items

User can add/remove runes

Stats update instantly

Graph updates instantly

Synergy indicator updates

No crashes

Loads in under 2 seconds
