export class Release {
    private _name: string;
    private _startDate: Date;
    private _endDate: Date;
    private _nbOpenDays: number;
    private _nbWorkingDays: number;
    private _buildCapacityFront: number;
    private _buildCapacityMiddle: number;
    private _buildCapacityTotal: number;


    constructor(name: string, startDate: Date, endDate: Date, nbOpenDays: number, nbWorkingDays: number, buildCapacityFront: number,
                buildCapacityMiddle: number, buildCapacityTotal: number) {
        this._name = name;
        this._startDate = startDate;
        this._endDate = endDate;
        this._nbOpenDays = nbOpenDays;
        this._nbWorkingDays = nbWorkingDays;
        this._buildCapacityFront = buildCapacityFront;
        this._buildCapacityMiddle = buildCapacityMiddle;
        this._buildCapacityTotal = buildCapacityTotal;
    }

    get name(): string {
        return this._name;
    }

    get startDate(): Date {
        return this._startDate;
    }

    get endDate(): Date {
        return this._endDate;
    }

    get nbOpenDays(): number {
        return this._nbOpenDays;
    }

    get nbWorkingDays(): number {
        return this._nbWorkingDays;
    }

    get buildCapacityFront(): number {
        return this._buildCapacityFront;
    }

    get buildCapacityMiddle(): number {
        return this._buildCapacityMiddle;
    }

    get buildCapacityTotal(): number {
        return this._buildCapacityTotal;
    }
}
