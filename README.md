# GameVerse

A modern, responsive video game discovery application built with React, Vite, and the RAWG API. 

## Features

- **Game Discovery**: Explore a massive library of video games with rich details.
- **Search & Filtering**: Quickly find games using the search bar or filter results by genre and platform.
- **Sorting**: Order games by relevance, date added, name, release date, popularity, or average rating.
- **Detailed Views**: Dive into dedicated game detail pages for deeper insights into each title.
- **State Management**: Robust and scalable client-side state handling driven by Zustand.
- **Responsive Design**: A sleek, fully responsive user interface built rapidly with Tailwind CSS.

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: Axios
- **Icons**: React Icons

## Getting Started

Follow these steps to run the application locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- A RAWG API Key. You can obtain one by registering at [RAWG API](https://rawg.io/apidocs).

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Aashish-Bhambri/GameVerse.git
   cd rawg-clone
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory and add your RAWG API key:
   ```env
   VITE_RAWG_API_KEY=your_api_key_here
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── assets/         # Static assets (images, global CSS)
├── components/     # Reusable UI components (GameCard, NavBar, etc.)
├── hooks/          # Custom React hooks for data fetching and logic
├── pages/          # Application pages (HomePage, GameDetailPage)
├── services/       # API services and client configuration
└── store.ts        # Zustand store for global state management
```
