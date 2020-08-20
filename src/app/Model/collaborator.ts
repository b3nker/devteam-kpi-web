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
    private _spTotal: number;
    private _spAqualifier: number;
    private _spBacAffinage: number;
    private _spEnAttente: number;
    private _spAfaire: number;
    private _spEncours: number;
    private _spAbandonne: number;
    private _spDevTermine: number;
    private _spAvalider: number;
    private _spAlivrer: number;
    private _spATester: number;
    private _spRefuseEnRecette: number;
    private _spValideEnRecette: number;
    private _spLivre: number;
    private _spTermine: number;
    private _spMergeRequest: number;
    private _spTestCroise: number;
    private _ticketsTotal: number;
    private _ticketsAqualifier: number;
    private _ticketsBacAffinage: number;
    private _ticketsEnAttente: number;
    private _ticketsAfaire: number;
    private _ticketsEncours: number;
    private _ticketsAbandonne: number;
    private _ticketsDevTermine: number;
    private _ticketsAvalider: number;
    private _ticketsAlivrer: number;
    private _ticketsATester: number;
    private _ticketsRefuseEnRecette: number;
    private _ticketsValideEnRecette: number;
    private _ticketsLivre: number;
    private _ticketsTermine: number;
    private _ticketsTestCroise: number;
    private _ticketsValide: number;
    private _ticketsMergeRequest: number;
    private _role: string;
    private _assignedIssues: Array<string>;


    get doneTickets(): number {
        return this.ticketsValideEnRecette + this.ticketsValide + this.ticketsTermine + this.ticketsLivre;
    }

    get supDevDoneTickets(): number {
        return this.ticketsTestCroise + this.ticketsMergeRequest + this.ticketsATester + this.ticketsAlivrer + this.doneTickets;
    }

    get spMergeRequest(): number {
        return this._spMergeRequest;
    }

    get ticketsMergeRequest(): number {
        return this._ticketsMergeRequest;
    }

    get assignedIssues(): Array<string> {
        return this._assignedIssues;
    }

    get ticketsTestCroise(): number {
        return this._ticketsTestCroise;
    }

    get ticketsAqualifier(): number {
        return this._ticketsAqualifier;
    }

    get ticketsBacAffinage(): number {
        return this._ticketsBacAffinage;
    }

    get ticketsEnAttente(): number {
        return this._ticketsEnAttente;
    }

    get ticketsAfaire(): number {
        return this._ticketsAfaire;
    }

    get ticketsEncours(): number {
        return this._ticketsEncours;
    }

    get ticketsAbandonne(): number {
        return this._ticketsAbandonne;
    }

    get ticketsDevTermine(): number {
        return this._ticketsDevTermine;
    }

    get ticketsAvalider(): number {
        return this._ticketsAvalider;
    }

    get ticketsAlivrer(): number {
        return this._ticketsAlivrer;
    }

    get ticketsATester(): number {
        return this._ticketsATester;
    }

    get ticketsRefuseEnRecette(): number {
        return this._ticketsRefuseEnRecette;
    }

    get ticketsValideEnRecette(): number {
        return this._ticketsValideEnRecette;
    }

    get ticketsLivre(): number {
        return this._ticketsLivre;
    }

    get ticketsTermine(): number {
        return this._ticketsTermine;
    }

    get ticketsValide(): number {
        return this._ticketsValide;
    }

    get spTestCroise(): number {
        return this._spTestCroise;
    }

    get spAqualifier(): number {
        return this._spAqualifier;
    }

    get spBacAffinage(): number {
        return this._spBacAffinage;
    }

    get spEnAttente(): number {
        return this._spEnAttente;
    }

    get spAfaire(): number {
        return this._spAfaire;
    }

    get spEncours(): number {
        return this._spEncours;
    }

    get spAbandonne(): number {
        return this._spAbandonne;
    }

    get spDevTermine(): number {
        return this._spDevTermine;
    }

    get spAvalider(): number {
        return this._spAvalider;
    }

    get spAlivrer(): number {
        return this._spAlivrer;
    }

    get spATester(): number {
        return this._spATester;
    }

    get spRefuseEnRecette(): number {
        return this._spRefuseEnRecette;
    }

    get spValideEnRecette(): number {
        return this._spValideEnRecette;
    }

    get spLivre(): number {
        return this._spLivre;
    }

    get spTermine(): number {
        return this._spTermine;
    }

    get availableTime(): number {
        return this._availableTime;
    }

    get role(): string {
        return this._role;
    }

    get spTotal(): number {
        return this._spTotal;
    }

    get remainingTime(): number {
        return this._remainingTime;
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

    get estimatedTime(): number {
        return this._estimatedTime;
    }

    get loggedTime(): number {
        return this._loggedTime;
    }

    get ticketsTotal(): number {
        return this._ticketsTotal;
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

    getJqlKeysList(): string {
        if (this.assignedIssues === null){
            return null;
        }
        let str = '';
        let i = 1;
        const size = this.assignedIssues.length;
        for (const issueKey of this.assignedIssues){
            if (i === size){
                str += '\'' + issueKey + '\'';
            }else{
                str += '\'' + issueKey + '\',';
                i++;
            }
        }
        return str;
    }

    constructor(accountId: string, firstName: string, name: string, emailAddress: string,
                totalWorkingTime: number, availableTime: number, estimatedTime: number, loggedTime: number,
                remainingTime: number, spTotal: number, spAqualifier: number, spBacAffinage: number,
                spEnAttente: number, spAfaire: number, spEncours: number, spAbandonne: number,
                spDevTermine: number, spAvalider: number, spAlivrer: number, spATester: number,
                spRefuseEnRecette: number, spValideEnRecette: number, spLivre: number, spTermine: number,
                spTestCroise: number, ticketsTotal: number, ticketsAqualifier: number, ticketsBacAffinage: number,
                ticketsEnAttente: number, ticketsAfaire: number, ticketsEncours: number, ticketsAbandonne: number,
                ticketsDevTermine: number, ticketsAvalider: number, ticketsAlivrer: number, ticketsATester: number,
                ticketsRefuseEnRecette: number, ticketsValideEnRecette: number, ticketsLivre: number,
                ticketsTermine: number, ticketsValide: number, role: string, ticketsTestCroise: number,
                assignedIssues: Array<string>, ticketsMergeRequest: number, spMergeRequest: number) {
        this._accountId = accountId;
        this._firstName = firstName;
        this._name = name;
        this._emailAddress = emailAddress;
        this._totalWorkingTime = totalWorkingTime;
        this._availableTime = availableTime;
        this._estimatedTime = estimatedTime;
        this._loggedTime = loggedTime;
        this._remainingTime = remainingTime;
        this._spTotal = spTotal;
        this._spAqualifier = spAqualifier;
        this._spBacAffinage = spBacAffinage;
        this._spEnAttente = spEnAttente;
        this._spAfaire = spAfaire;
        this._spEncours = spEncours;
        this._spAbandonne = spAbandonne;
        this._spDevTermine = spDevTermine;
        this._spAvalider = spAvalider;
        this._spAlivrer = spAlivrer;
        this._spATester = spATester;
        this._spRefuseEnRecette = spRefuseEnRecette;
        this._spValideEnRecette = spValideEnRecette;
        this._spLivre = spLivre;
        this._spTermine = spTermine;
        this._spTestCroise = spTestCroise;
        this._spMergeRequest = spMergeRequest;
        this._ticketsTotal = ticketsTotal;
        this._ticketsAqualifier = ticketsAqualifier;
        this._ticketsBacAffinage = ticketsBacAffinage;
        this._ticketsEnAttente = ticketsEnAttente;
        this._ticketsAfaire = ticketsAfaire;
        this._ticketsEncours = ticketsEncours;
        this._ticketsAbandonne = ticketsAbandonne;
        this._ticketsDevTermine = ticketsDevTermine;
        this._ticketsAvalider = ticketsAvalider;
        this._ticketsAlivrer = ticketsAlivrer;
        this._ticketsATester = ticketsATester;
        this._ticketsRefuseEnRecette = ticketsRefuseEnRecette;
        this._ticketsValideEnRecette = ticketsValideEnRecette;
        this._ticketsLivre = ticketsLivre;
        this._ticketsTermine = ticketsTermine;
        this._ticketsValide = ticketsValide;
        this._ticketsTestCroise = ticketsTestCroise;
        this._ticketsMergeRequest = ticketsMergeRequest;
        this._role = role;
        this._assignedIssues = assignedIssues;
    }
}


