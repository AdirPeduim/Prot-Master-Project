import { Shelf } from "./Shelf";

export class Locker {
  private _name: string;
  private _serial: string;
  private _shelfsArr:Shelf[];

  constructor(name: string , serial: string) {
    this._name = name;
    this._serial = serial;
    this._shelfsArr=[];
  }
  get name(){return this._name;}
  get serial(){return this._serial;}

  set name(name: string ){this._name = name;}
  set serial(serial: string){this._serial = serial;}
}