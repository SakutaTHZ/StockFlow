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
    id:string,
    name: string,
    type: string,
    image: string,
    status: string,
    engine: string,
    highlightStatus: string,
    showExtraStatus:boolean,
    rating: string,
    milleage:number,
    vim:string,
    price:number,
    hold:boolean,
    discount:number,
}
