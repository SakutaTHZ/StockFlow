import dayjs from "dayjs";
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
export const yardArea: string[] = ["Kasai-K", "Tokyo-T", "KyuShu-Q" , "Osaka-O", "Nagoya-N"];
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
  "Sold",
  "On Hold",
  "E-power",
  "Coming soon",
  "Hybrid",
  "Reduced",
  "New",
  "",
];
export const getRandomHighlightStatus = () => {
  return highlightStatus[Math.floor(Math.random() * highlightStatus.length)];
};

//tasks
export const tasks: string[] = [
  "Yard Base",
  "CJP Extra",
  "Yard Extra",
];
export const getRandomTask = () => {
  return tasks[Math.floor(Math.random() * tasks.length)];
};

//Status
export const status: string[] = [
  "Created",
  "System",
  "Sent",
  "Checked",
  "Booked",
  "To Cancel",
  "Cancel",
  "Completed",
];
export const getRandomStatus = () => {
  return status[Math.floor(Math.random() * status.length)];
}

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

// Yards
export const yards: string[] = [
  "Anowar",
  "JAL Kisarazu",
  "JAL Kobe",
  "Kirin",
  "NR Japan Nogoya",
  "KLC Co.Ltd",
  "Miky Frontier",
  "M3LOGI Hakata",
  "Kamigomi Nagoya",
  "From-J Kobe",
];
export const getRandomYard = () => {
  return yards[Math.floor(Math.random() * yards.length)];
};

// fuelType
export const fuelType: string[] = ["Petrol", "Gas", "Electric", "Methol"];

export const promotionText: string[] = [
  "Stock Offer",
  "Offer For You",
  "Special Offer!",
  "New Stock",
  "Stock Exclusive",
  "Special Price",
];
export const getFuelType = () => {
  return fuelType[Math.floor(Math.random() * fuelType.length)];
};

export const types = ["Service", "Parts", "Labor", "Accessories", "Inspection"];

export const descriptions = [
  "Oil change",
  "Brake pad replacement",
  "Tire alignment",
  "Car mats",
  "Engine inspection",
];

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
export const getDiscount = (newHighlightStatus: string) => {
  return newHighlightStatus === "Reduced"
    ? Math.round(Math.random() * (1000 - 50000 + 1) + 50000)
    : 0;
};
export const getEnginePower = () => {
  return Math.round(Math.random() * (1000 - 50000 + 1) + 50000);
};
export const getMarketType = () => {
  return Math.random() < 0.3;
};
export const getRandomPackage = () => {
  return `${Math.round(Math.random() * 10)}L Touring Package`;
};

export const getRandomDate = () => {
  const startDate = new Date(2014, 0, 1);
  const endDate = new Date(2024, 11, 31);

  const randomTimestamp =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTimestamp);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return randomDate.toLocaleDateString("en-GB", options);
};

const generateFormattedDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate().toString().padStart(2, "0")  ;

  return `${year} ${month} ${day}`;
};

const generateFormattedDate2 = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  return `${day}-${month}-${year}`;
};

export const getRandomSize = () => {
  return Math.round(Math.random() * (100 - 400 + 1) + 400);
};

// Array of vehicle features
export const vehicleParts = [
  "AC",
  "PAS",
  "PW",
  "ABS",
  "AB",
  "R Key",
  "5-seater",
];

//Function to get true or false with 5% chance of true
export const getTrueOrFalseTenPercent = () => {
  return Math.random() < 0.1;
};

function getRandomVehicleParts() {
  const randomCount = Math.floor(Math.random() * vehicleParts.length) + 1;

  const shuffled = vehicleParts.sort(() => 0.5 - Math.random());
  const selectedParts = shuffled.slice(0, randomCount);

  return selectedParts.join(", ");
}

export const transmissions = ["Automatic", "Manual", "Special"];
export const getTransmission = () => {
  return transmissions[Math.floor(Math.random() * transmissions.length)];
};

export const yardname = [
  "Akebono",
  "Apex Logistics Nagoya",
  "ECL Kawasaki-Kisarazu",
  "Eddy Pandas Auto Parts Co",
  "Fujiwara Sukematsu",
  "J Trading Kawasaki",
  "MK International Hakata",
  "Real International Yokohama",
  "Sync Logistics Osaka",
  "THK",
];
export const getRandomYardName = () => {
  return yardname[Math.floor(Math.random() * yardname.length)];
};

export const generateCardData = (): CarData => {
  const newHighlightStatus = getRandomHighlightStatus();
  const date = getRandomDate();

  const cardData: CarData = {
    id: getRandomCarId(),
    yard: getRandomYardName(),
    name: getRandomCarNames(),
    package: getRandomPackage(),
    type: getRandomCarTypes(),
    image: getRandomImageLink(),
    status: getRandomCarStatus(),
    engine: getRandomCarEngines(),
    highlightStatus: newHighlightStatus,
    showExtraStatus: getTrueOrFalse(),
    hidden: getTrueOrFalseTenPercent(),
    rating: getRandomRating(),
    milleage: getRandomMileage(),
    vim: getRandomVim(),
    price: getRandomPrice(),
    hold: newHighlightStatus === "On Hold" ? true : false,
    discount: getDiscount(newHighlightStatus),
    marketType: getMarketType(),
    yardArea: getRandomYardArea(),
    exteriorColor: getRandomExteriorColors(),
    transmission: getTransmission(),

    soldDate: date,
    vessel: getRandomYard(),
    vesselFrom: getRandomYard(),
    vesselTo: getRandomYard(),

    enginePower: getEnginePower(),
    registerDate: generateFormattedDate(),
    fuelType: getFuelType(),
    seats: Math.round(Math.random() * (2 - 10 + 1) + 10),
    extraParts: getRandomVehicleParts(),
    picturesBaseDate: generateFormattedDate2(),
    picturesExtraDate: generateFormattedDate2(),

    ec: "DHL",
    trackingNumber: getRandomPrice(),
    sentDate: generateFormattedDate2(),
    customer: `Customer${Math.floor(Math.random() * 100000)}`,

    auctionFee: getEnginePower(),
    totalInlandCost: getEnginePower(),
    inlandCost: getEnginePower(),
    shippingYardCost: getEnginePower(),
    extraCost: getEnginePower(),

    size: getEnginePower() / 100,
    length: getRandomSize(),
    width: getRandomSize(),
    height: getRandomSize(),
    auctionNumber: getEnginePower(),
    lotNumber: getEnginePower(),
  };

  return cardData;
};

// Sort Options
export const sortOptions = [
  "Date Latest to Oldest",
  "Date Oldest to Latest",
  "Price Low to High",
  "Price High to Low",
  "Mileage Low to High",
  "Mileage High to Low",
];

export const series =[
  'K',
  'J',
  'T',
  'E',
  'A',
  'D',
  'C',
  'M'
]

export const formatDate = (dateString: string) => {
    dayjs.locale("en");
    const date = dayjs(dateString);

    if (!date.isValid()) return "Invalid Date";

    return date.format("YYYY-MMM-DD");
  };