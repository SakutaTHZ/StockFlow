import { CarData } from "./types";

// carStatus
export const carStatus: string[] = [
  "Arrived",
  "In Japan",
  "Transit",
  "Clearance UK",
];
export const getRandomCarStatus = () => {
  return carStatus[Math.floor(Math.random() * carStatus.length)];
};

// carNames
export const carNames: string[] = [
  "A3 Sportback",
  "TT Coupe",
  "Ranger",
  "Fit",
  "CR-V",
];
export const getRandomCarNames = () => {
  return carNames[Math.floor(Math.random() * carNames.length)];
};

// carTypes
export const carTypes: string[] = [
  "Sedan",
  "Hatchback",
  "SUV",
  "Convertible",
  "MiniVan",
];
export const getRandomCarTypes = () => {
  return carTypes[Math.floor(Math.random() * carTypes.length)];
};

//carEngines
export const carEngines: string[] = [
  "1.4 TSLI",
  "V6",
  "flat-6",
  "Rx-7",
  "EV engine",
];
export const getRandomCarEngines = () => {
  return carEngines[Math.floor(Math.random() * carEngines.length)];
};

// yardArea
export const yardArea:string[] = [
  "Kasai-K",
  "Tokyo-T",
  "KyuShu-Q",
]
export const getRandomYardArea = () => {
  return yardArea[Math.floor(Math.random() * yardArea.length)];
};

// imagelinks
export const imageLink: string[] = [
  "https://cosmo-images.azureedge.net/stock/original/our_78146_b49d9285-cc91-4b89-92a6-1e4d2a9e310b.jpg?preset=bigimage",
  "https://cosmo-images.azureedge.net/stock/original/our_52747_7521ddc6-a312-4852-a12e-2d4a928f1b05.jpg?preset=bigimage",
  "https://cosmo-images.azureedge.net/stock/original/our_79596_1e6432cd-8248-48b8-ab1f-0a785b8b764d.jpg?preset=bigimage",
  "https://cosmo-images.azureedge.net/stock/original/our_53383_754f972b-a419-4f53-8ea4-1691ce7fb661.jpg?preset=bigimage",
  "https://cosmo-images.azureedge.net/stock/original/our_51498_ec5f8b8d-7ca6-4eb7-a424-fd9ac0cf8403.jpg?preset=bigimage",
];
export const getRandomImageLink = () => {
  return imageLink[Math.floor(Math.random() * imageLink.length)];
};

// highlightstatus
export const highlightStatus: string[] = [
  "Welcab",
  "Coming soon",
  "Hybrid",
  "Reduced",
  "New",
  "",
];
export const getRandomHighlightStatus = () => {
  return highlightStatus[Math.floor(Math.random() * highlightStatus.length)];
};

// exteriorColor
export const exteriorColor: string[] = [
  "black#000000",
  "blue#0000ff",
  "brown#a52a2a",
  "beige#f5f5dc",
  "gray#808080",
  "green#008000",
];
export const getRandomExteriorColors = () => {
  return exteriorColor[Math.floor(Math.random() * exteriorColor.length)];
};

export const getRandomMileage = () => {
  return Math.floor(Math.random() * 10000000);
};
export const getRandomPrice = () => {
  return Math.round(Math.random() * (999999 - 100000 + 1) + 100000);
};
export const getRandomVim = () => {
  return `THZPT${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`;
};
export const getRandomCarId = () => {
  return `#E${Math.floor(Math.random() * 1000000)}`;
};
export const getTrueOrFalse = () => {
  return Math.floor(Math.random() * 10) / 2 === 0 ? true : false;
};
export const getRandomRating = () => {
  return `${Math.ceil(Math.floor(Math.random() * 5) * 2) / 2}`;
};
export const getDiscount = (newHighlightStatus:string) => {
  return newHighlightStatus === "Reduced"
    ? Math.round(Math.random() * (1000 - 50000 + 1) + 50000)
    : 0;
};
export const getMarketType = ()=>{
  return Math.random() < 0.3;
}

export const generateCardData = (): CarData => {
  const newHighlightStatus = getRandomHighlightStatus();

  const cardData: CarData = {
    id: getRandomCarId(),
    name: getRandomCarNames(),
    type: getRandomCarTypes(),
    image: getRandomImageLink(),
    status: getRandomCarStatus(),
    engine: getRandomCarEngines(),
    highlightStatus: newHighlightStatus,
    showExtraStatus: getTrueOrFalse(),
    rating: getRandomRating(),
    milleage: getRandomMileage(),
    vim: getRandomVim(),
    price: getRandomPrice(),
    hold: getTrueOrFalse(),
    discount: getDiscount(newHighlightStatus),
    marketType: getMarketType(),
    yardArea:getRandomYardArea(),
    exteriorColor:getRandomExteriorColors(),
  };
  console.log(cardData);

  return cardData;
};

// Sort Options
export const sortOptions = [
  "Most Relevant",
  "Date Latest to Oldest",
  "Date Oldest to Latest",
  "Price Low to High",
  "Price High to Low",
  "Mileage Low to High",
  "Mileage High to Low",
];
