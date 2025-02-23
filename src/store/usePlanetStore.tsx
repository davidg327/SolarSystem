import { create } from 'zustand';
import {IPlanet} from '../theme';

export interface IPlanetState {
    search: string;
    setSearch: (text: string) => void;
    planets: IPlanet[];
    searchPlanets: IPlanet[];
    getPlanets: (planets: IPlanet[]) => void;
    getSearchPlanets: (planets: IPlanet[]) => void;
    cleanSearch: () => void;
}

export const usePlanetStore = create<IPlanetState>()((set, _get) => ({
    search: '',
    planets: [],
    searchPlanets: [],
    allInfo: [],
    setSearch: (text: string) => {
        set({
            search: text,
        });
    },
    getPlanets: (planets: IPlanet[]) => {
        set({
            planets: planets,
        });
    },
    getSearchPlanets: (planets: IPlanet[]) => {
        set({
            searchPlanets: planets,
        });
    },
    cleanSearch: () => {
        set({
            searchPlanets: [],
            search: '',
        });
    },
}));
