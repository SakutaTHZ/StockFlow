import { atom } from "jotai";

import { CarData } from "./types";

export const carAtom = atom<CarData[]>([]);

export const carLoadingAtom = atom(true);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchCars = async (cars: any): Promise<CarData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cars);
    }, 2000);
  });
};
