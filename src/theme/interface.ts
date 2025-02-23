export interface IPlanet {
  id: string;
  englishName: string;
  name: string;
  isPlanet: boolean;
  gravity: number;
  density: number;
  image: string;
  inclination: number;
  mass: IMass;
  vol: IVol;
  sideralOrbit: number;
  moons?: IMoons[];
}

interface IMass {
  massValue: number;
}

interface IVol {
  volValue: number;
}

export interface IMoons {
  moon: string
}
