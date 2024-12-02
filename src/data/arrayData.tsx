export interface Model {
  name: string;
  count: number;
}

export interface MakeBrand {
  name: string;
  count: number;
  models: Model[];
}

export const makeBrandData: MakeBrand[] = [
  {
    name: "Toyota",
    count: 997,
    models: [
      { name: "Corolla", count: 52 },
      { name: "Camry", count: 59 },
      { name: "Prius", count: 726 },
      { name: "Hilux", count: 55 },
      { name: "Land Cruiser", count: 105 },
    ],
  },
  {
    name: "Nissan",
    count: 440,
    models: [
      { name: "Altima", count: 40 },
      { name: "Leaf", count: 58 },
      { name: "X-Trail", count: 179 },
      { name: "Skyline", count: 52 },
      { name: "March", count: 111 },
    ],
  },
  {
    name: "Honda",
    count: 398,
    models: [
      { name: "Civic", count: 120 },
      { name: "Accord", count: 75 },
      { name: "CR-V", count: 98 },
      { name: "Fit", count: 45 },
      { name: "Odyssey", count: 60 },
    ],
  },
  {
    name: "Mazda",
    count: 250,
    models: [
      { name: "Mazda3", count: 40 },
      { name: "CX-5", count: 80 },
      { name: "MX-5", count: 25 },
      { name: "Mazda6", count: 45 },
      { name: "CX-30", count: 60 },
    ],
  },
  {
    name: "Ford",
    count: 210,
    models: [
      { name: "Fiesta", count: 35 },
      { name: "Focus", count: 60 },
      { name: "Mustang", count: 25 },
      { name: "Escape", count: 40 },
      { name: "Explorer", count: 50 },
    ],
  },
];

