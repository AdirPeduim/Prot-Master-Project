import { Entry } from "./Entry";

export type shelfType = "Ethernet" | "OpticalFiber" | "Comb" | "Empty";

export class Shelf {
  private _type: shelfType;
  private _floor: number;
  private _conections: Entry[]; // 24/48

  constructor(type: shelfType, floor: number) {
    this._type = type;
    this._floor = floor;
    
    switch (this._type) {
      case "Ethernet":
        this._conections = new Array(24);
        break;
      case "OpticalFiber":
        this._conections = new Array(48);
        break;
      case "Comb" || "Empty":
        this._conections = new Array(0);
        break;
      default:
        this._conections = new Array(0);

    }
  }



  
}
