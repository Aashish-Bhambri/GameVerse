---
name: GameVerse
description: Dark-mode video game discovery experience powered by RAWG
colors:
  bg-canvas: "#121212"
  bg-surface: "#151515"
  bg-card: "#202020"
  bg-card-hover: "#2a2a2a"
  text-primary: "#ffffff"
  text-secondary: "#e5e7eb"
  text-muted: "#9ca3af"
  border-subtle: "rgba(255, 255, 255, 0.05)"
  border-hover: "rgba(255, 255, 255, 0.15)"
  accent-green: "#6dc849"
  accent-yellow: "#fdca52"
  accent-red: "#fc4b37"
typography:
  display:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  card:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "20px"
  search-bar:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "10px 16px"
---

## Overview

GameVerse features an immersive dark design language inspired by contemporary gaming dashboards (RAWG, Steam, Epic Games). The interface prioritizes rich game imagery, crisp typographic contrast, and high-visibility status indicators.

## Colors

- **Canvas Background**: `#121212` — Deep dark canvas providing high contrast for media cards.
- **Surface**: `#151515` — Secondary neutral for navigation and sidebars.
- **Card Surface**: `#202020` — Elevated dark grey container for interactive game cards.
- **Card Hover Surface**: `#2a2a2a` — Slight lift on hover.
- **Text Primary**: `#ffffff` — Headers and primary game titles.
- **Text Secondary**: `#e5e7eb` — Body copy and interactive labels.
- **Text Muted**: `#9ca3af` — Metadata labels and timestamps.
- **Score Indicators**: Metacritic ratings mapped to semantic hues: Green (`#6dc849` for 75+), Yellow (`#fdca52` for 50-74), and Red (`#fc4b37` for <50).

## Typography

- **Font Family**: System UI / Modern Sans (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`).
- **Hierarchy**:
  - Main headings: Bold, crisp, white text for section titles and page headers.
  - Game Card Titles: `text-xl font-bold` with 2-line clamp for consistent card heights.
  - Metadata & Labels: Compact `text-xs` and `text-sm` with medium weights (`font-medium`).

## Layout

- **Shell**: Persistent top navigation with fluid search and logo branding.
- **Main Area**: Sidebar navigation for genres/platforms paired with a responsive content grid.
- **Grid Layout**: 1 column on mobile, 2 columns on tablet, 3 to 4 columns on large screens with fluid auto-fit behavior.

## Elevation & Depth

- Cards utilize subtle tonal elevation (`#202020` on `#121212`) combined with delicate borders (`rgba(255, 255, 255, 0.05)`).
- Hover interactions feature subtle lift (`scale-[1.02]`, `-translate-y-1`) and soft dark drop shadows (`0 10px 30px rgba(0,0,0,0.5)`).

## Shapes

- **Cards**: `rounded-xl` (12px) for smooth modern corners.
- **Inputs & Pills**: `rounded-full` for search inputs and filter tags.
- **Badges & Dropdowns**: `rounded-lg` (8px) for buttons and selectors.

## Components

- **GameCard**: Image banner, platform icons, Metacritic pill, title, release date, and genre tags.
- **SearchInput**: Full-width pill input with leading icon and clear button.
- **Sidebar**: List of genres with high quality thumbnail icons and hover highlight states.
- **Filter & Sort Selectors**: Dropdown menus with dark themed overlays.

## Do's and Don'ts

- **Do** preserve high image contrast against dark backgrounds.
- **Do** keep card dimensions consistent using image aspect ratios and line clamps.
- **Do** provide smooth micro-interactions on clickable elements.
- **Don't** use bright blinding white card backgrounds or jarring neon accents.
- **Don't** clutter game cards with excessive nested containers.
