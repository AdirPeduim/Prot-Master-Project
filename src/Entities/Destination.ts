export class Destination{
    private _lockerName:string;
    private _shelfFloorNumber:number;
    private _entryNumber:number;

    constructor(lockerName:string, shelfFloorNumber:number,entryNumber:number)
    {
        this._lockerName=lockerName;
        this._shelfFloorNumber=shelfFloorNumber;
        this._entryNumber=entryNumber;
    }
}