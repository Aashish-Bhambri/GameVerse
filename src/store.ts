import { create } from "zustand";

// 1. Define the shape state
export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
    title?: string;
}

// 2. Define the shape Store (Data + Actions)
interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText?: string) => void;
    setGenreId: (genreId?: number) => void;
    setPlatformId: (platformId?: number) => void;
    setSortOrder: (sortOrder?: string) => void;
    setTitle: (title?: string) => void;
    resetAll: () => void;
}

// 3. Create and export the custom Hook
const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {}, // Initial state

    // Actions that use 'set' to update the state safely
    setSearchText: (searchText) =>
        set((store) => ({
            gameQuery: {
                ...store.gameQuery,
                searchText: searchText || undefined,
                title: undefined,
            },
        })),

    setGenreId: (genreId) =>
        set((store) => ({
            gameQuery: {
                ...store.gameQuery,
                genreId: genreId !== undefined ? genreId : undefined,
                title: undefined,
            },
        })),

    setPlatformId: (platformId) =>
        set((store) => ({
            gameQuery: {
                ...store.gameQuery,
                platformId: platformId !== undefined ? platformId : undefined,
                title: undefined,
            },
        })),

    setSortOrder: (sortOrder) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, sortOrder: sortOrder || undefined },
        })),

    setTitle: (title) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, title: title || undefined },
        })),

    resetAll: () => set(() => ({ gameQuery: {} })),
}));

export default useGameQueryStore;
