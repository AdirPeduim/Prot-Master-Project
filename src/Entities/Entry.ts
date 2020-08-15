import { Destination } from "./Destination";

export class Entry{
    private _id:number;
    private _isConnected:boolean;
    private _destination:Destination;

    constructor(id:number,destination:Destination)
    {
        this._id =id;
        this._isConnected=false;
        this._destination=destination;
    }
}