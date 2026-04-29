# PokeDex Lite

A performant, client-side Pokémon browser built with React and TypeScript.  
Focuses on clean data architecture, state separation, and responsive UI.

---

## Overview

This project consumes the PokeAPI and presents Pokémon data with:

- paginated fetching (infinite query)
- client-side search and filtering
- persistent favorites
- on-demand detail fetching (modal)
- authentication via Google (Firebase)

The goal was to design a **scalable frontend architecture**, not just render data.

---

## Tech Stack

### Core
- React (Vite) + TypeScript

### State Management
- React Query → server state (API, caching, pagination)
- Zustand → client state (favorites, filters, UI state)

### Styling & UX
- Tailwind CSS → utility-based styling
- Framer Motion → controlled UI animations

### API
- PokeAPI (REST)

### Auth
- Firebase Authentication (Google OAuth)

---

## Architecture

### Data Flow

API → React Query → Mapping Layer → UI

- Raw API responses are normalized via a mapper
- UI never depends on raw API structure
- Prevents tight coupling and improves maintainability

---

### State Separation

| State Type | Tool |
|-----------|------|
| Server Data | React Query |
| UI State | Zustand |
| Persistent State | localStorage (via Zustand persist) |

This prevents:
- duplication
- stale data
- unnecessary re-renders

---

### Key Decisions

#### 1. Client-side Search
Search is performed on fetched pages only.

- avoids excessive API calls
- predictable performance
- limitation is communicated in UI

---

#### 2. Type Filtering Strategy
The `/type` endpoint is used separately from paginated list API.

- pagination disabled in type mode
- avoids mixing incompatible data sources

---

#### 3. Favorites Persistence
Only Pokémon IDs are stored.

- normalized state
- avoids duplication
- reduces storage size

---

#### 4. On-demand Detail Fetching
Detailed Pokémon data is fetched only when modal opens.

- reduces initial load
- avoids unnecessary API calls

---

## Setup

### 1. Install dependencies

```bash
npm install
