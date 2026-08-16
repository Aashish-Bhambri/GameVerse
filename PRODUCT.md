# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Video game enthusiasts, gamers, and reviewers looking to discover games, explore genres, check Metacritic scores, and find release details across multiple platforms (PC, PlayStation, Xbox, Nintendo, iOS, Android).

## Product Purpose

GameVerse is a fast, responsive video game discovery catalog powered by the RAWG API. It helps users discover new and classic titles, filter by genre and platform, search titles in real time, and view comprehensive game details.

## Positioning

A sleek, clutter-free RAWG-powered gaming database experience with instant client-side filtering, fast keyboard-accessible search, dark aesthetic, and responsive card layouts.

## Operating Context

Desktop and mobile browsers where users browse curated lists of games, view release dates and genre tags, inspect platform compatibility badges, and check critic reception scores.

## Capabilities and Constraints

- Dynamic game querying and filtering by genre, platform, and sort order
- Client-side state managed via Zustand
- Detailed game pages routed via React Router DOM
- Dark-theme centric aesthetic designed for gaming interfaces
- Requires valid RAWG API key configured via environment variables

## Brand Commitments

- Name: GameVerse
- Theme: Immersive dark mode (`#121212`, `#151515`, `#202020`)
- Tone: Modern, gamer-focused, crisp, clean, performance-oriented

## Evidence on Hand

- Component catalog under `src/components/` (GameCard, GameGrid, NavBar, PlatformSelector, Sidebar, SortSelector, SearchInput)
- Configured Vite + React 19 + Tailwind CSS pipeline in `src/` and `index.html`

## Product Principles

1. **Discovery First**: Visual richness with high quality game covers, clear platform icons, and Metacritic score pills.
2. **Instant Responsiveness**: Fluid search, smooth hover interactions, and seamless filtering without jarring layout shifts.
3. **Immersive Dark UI**: Focused dark canvas that lets colorful game artwork stand out.
4. **Clarity over Clutter**: Essential metadata (release date, genres, platforms, score) formatted for quick scanning.
