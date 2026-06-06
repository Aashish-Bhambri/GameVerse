import { create } from "zustand";

// 1. Define the shape of your state
export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
    title?: string;
}

// 2. Define the shape of your Store (Data + Actions)
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
            gameQuery: searchText
                ? { searchText }
                : { ...store.gameQuery, searchText: undefined, title: undefined },
        })),

    setGenreId: (genreId) =>
        set((store) => ({
            gameQuery: genreId === undefined
                ? { ...store.gameQuery, genreId: undefined, title: undefined }
                : { ...store.gameQuery, genreId, searchText: undefined, title: undefined },
        })),

    setPlatformId: (platformId) =>
        set((store) => ({
            gameQuery: platformId === undefined
                ? { ...store.gameQuery, platformId: undefined, title: undefined }
                : { ...store.gameQuery, platformId, searchText: undefined, title: undefined },
        })),

    setSortOrder: (sortOrder) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, sortOrder },
        })),

    setTitle: (title) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, title },
        })),

    resetAll: () => set(() => ({ gameQuery: {} })),
}));

export default useGameQueryStore;
