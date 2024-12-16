export interface CommentReply {
  name: string;
  comment: string;
  time: string;
}

export interface Comment {
  name: string;
  comment: string;
  time: string;
  reply: CommentReply[];
}

export interface Region {
  name: string;
  count: number;
}

export interface Customer {
  name: string;
  count: number;
}

export interface Auction {
  name: string;
  count: number;
}

export interface CarModel {
  name: string;
  count: number;
}

export interface AuctionGrade {
  name: string;
  count: number;
}

export interface CarData {
  id: string;
  name: string;
  package: string;
  type: string;
  image: string;
  status: string;
  engine: string;
  highlightStatus: string;
  showExtraStatus: boolean;
  rating: string;
  milleage: number;
  vim: string;
  price: number;
  hold: boolean;
  discount: number;
  marketType: boolean;
  yardArea: string;
  exteriorColor: string;
  soldDate: string;
  vessel: string;
  vesselFrom: string;
  vesselTo: string;

  enginePower: number;
  registerDate: string;
  fuelType: string;
  seats: number;
  extraParts: string;
  picturesBaseDate: string;
  picturesExtraDate: string;

  ec: string;
  trackingNumber: number;
  sentDate: string;
  customer: string;

  auctionFee: number;
  totalInlandCost: number;
  inlandCost: number;
  shippingYardCost: number;
  extraCost: number;

  size: number;
  length: number;
  width: number;
  height: number;

  auctionNumber: number;
  lotNumber: number;
}
