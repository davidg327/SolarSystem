import { create } from 'zustand';
import {IPlanet} from '../theme';

export interface IPlanetState {
    planets: IPlanet[];
    getPlanets: (planets: IPlanet[]) => void;
}

export const usePlanetStore = create<IPlanetState>()((set, _get) => ({
    planets: [],
    getPlanets: (planets: IPlanet[]) => {
        set({
            planets: planets,
        });
    },
}));
