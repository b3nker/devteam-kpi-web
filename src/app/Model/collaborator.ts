import {Ticket} from './ticket';
import {StoryPoint} from './story-point';

export class Collaborator {
    private _accountId: string;
    private _firstName: string;
    private _name: string;
    private _emailAddress: string;
    private _totalWorkingTime: number;
    private _availableTime: number;
    private _estimatedTime: number;
    private _loggedTime: number;
    private _remainingTime: number;
    private _role: string;
    private _assignedIssues: Array<string>;
    private _tickets: Ticket;
    private _storyPoints: StoryPoint;


    constructor(accountId: string, firstName: string, name: string, emailAddress: string, totalWorkingTime: number, availableTime: number,
                estimatedTime: number, loggedTime: number, remainingTime: number, role: string, assignedIssues: Array<string>,
                tickets: Ticket, storyPoints: StoryPoint) {
        this._accountId = accountId;
        this._firstName = firstName;
        this._name = name;
        this._emailAddress = emailAddress;
        this._totalWorkingTime = totalWorkingTime;
        this._availableTime = availableTime;
        this._estimatedTime = estimatedTime;
        this._loggedTime = loggedTime;
        this._remainingTime = remainingTime;
        this._role = role;
        this._assignedIssues = assignedIssues;
        this._tickets = tickets;
        this._storyPoints = storyPoints;
    }


    get accountId(): string {
        return this._accountId;
    }

    get firstName(): string {
        return this._firstName;
    }

    get name(): string {
        return this._name;
    }

    get emailAddress(): string {
        return this._emailAddress;
    }

    get totalWorkingTime(): number {
        return this._totalWorkingTime;
    }

    get availableTime(): number {
        return this._availableTime;
    }

    get estimatedTime(): number {
        return this._estimatedTime;
    }

    get loggedTime(): number {
        return this._loggedTime;
    }

    get remainingTime(): number {
        return this._remainingTime;
    }

    get role(): string {
        return this._role;
    }

    get assignedIssues(): Array<string> {
        return this._assignedIssues;
    }

    get tickets(): Ticket {
        return this._tickets;
    }

    get storyPoints(): StoryPoint {
        return this._storyPoints;
    }

    /**
     * Return specific velocity depending on collaborator's role
     * @param firstRole, role (middle, front, scrum,...)
     * @param secondRole, role (middle, front, scrum,...)
     */
    getVelocity(firstRole: string, secondRole: string): number{
        let velocity;
        if (this.role.includes(firstRole) || this.role.includes(secondRole)){
            velocity = 0.65;
        }else {
            velocity = 1;
        }
        return velocity;
    }

    getPascalCase(str: string): string{
        if (str.length > 0 ){
            return str[0].toUpperCase() + str.slice(1);
        }else{
            return str;
        }
    }

    getFullName(): string {
        return this.getPascalCase(this._firstName) + ' ' + this.getPascalCase(this._name);
    }
}


