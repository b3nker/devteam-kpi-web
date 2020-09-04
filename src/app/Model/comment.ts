export class Comment {
    private _sprintId: number;
    private _comment: string;

    constructor(sprintId: number, comment: string) {
        this._sprintId = sprintId;
        this._comment = comment;
    }

    get sprintId(): number {
        return this._sprintId;
    }

    get comment(): string {
        return this._comment;
    }
}
