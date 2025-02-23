import { create } from 'zustand';
import {IPlanet} from '../theme';

export interface IFavoriteState {
    favorites: IPlanet[];
    getFavorites: (planets: IPlanet[]) => void;
}

export const useFavoriteStore = create<IFavoriteState>()((set, _get) => ({
    favorites: [],
    getFavorites: (planets: IPlanet[]) => {
        set({
            favorites: planets,
        });
    },
}));
