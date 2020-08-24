export class Ticket {
    private _total: number;
    private _aqualifier: number;
    private _bacAffinage: number;
    private _enAttente: number;
    private _afaire: number;
    private _enCours: number;
    private _abandonne: number;
    private _devTermine: number;
    private _avalider: number;
    private _alivrer: number;
    private _atester: number;
    private _refuseEnRecette: number;
    private _valideEnRecette: number;
    private _livre: number;
    private _termine: number;
    private _testCroise: number;
    private _valide: number;
    private _mergeRequest: number;
    private _overEstimated: number;
    private _underEstimated: number;


    constructor(total: number, aQualifier: number, bacAffinage: number, enAttente: number, aFaire: number, enCours: number,
                abandonne: number, devTermine: number, aValider: number, aLivrer: number, aTester: number, refuseEnRecette: number,
                valideEnRecette: number, livre: number, termine: number, testCroise: number, valide: number, mergeRequest: number,
                overEstimated: number, underEstimated: number) {
        this._total = total;
        this._aqualifier = aQualifier;
        this._bacAffinage = bacAffinage;
        this._enAttente = enAttente;
        this._afaire = aFaire;
        this._enCours = enCours;
        this._abandonne = abandonne;
        this._devTermine = devTermine;
        this._avalider = aValider;
        this._alivrer = aLivrer;
        this._atester = aTester;
        this._refuseEnRecette = refuseEnRecette;
        this._valideEnRecette = valideEnRecette;
        this._livre = livre;
        this._termine = termine;
        this._testCroise = testCroise;
        this._valide = valide;
        this._mergeRequest = mergeRequest;
        this._overEstimated = overEstimated;
        this._underEstimated = underEstimated;
    }


    get total(): number {
        return this._total;
    }

    get aqualifier(): number {
        return this._aqualifier;
    }

    get bacAffinage(): number {
        return this._bacAffinage;
    }

    get enAttente(): number {
        return this._enAttente;
    }

    get afaire(): number {
        return this._afaire;
    }

    get enCours(): number {
        return this._enCours;
    }

    get abandonne(): number {
        return this._abandonne;
    }

    get devTermine(): number {
        return this._devTermine;
    }

    get avalider(): number {
        return this._avalider;
    }

    get alivrer(): number {
        return this._alivrer;
    }

    get atester(): number {
        return this._atester;
    }

    get refuseEnRecette(): number {
        return this._refuseEnRecette;
    }

    get valideEnRecette(): number {
        return this._valideEnRecette;
    }

    get livre(): number {
        return this._livre;
    }

    get termine(): number {
        return this._termine;
    }

    get testCroise(): number {
        return this._testCroise;
    }

    get valide(): number {
        return this._valide;
    }

    get mergeRequest(): number {
        return this._mergeRequest;
    }

    get overEstimated(): number {
        return this._overEstimated;
    }

    get underEstimated(): number {
        return this._underEstimated;
    }

    getDoneTickets(): number {
        return this.valideEnRecette + this.valide + this.termine + this.livre;
    }

    getSupDevDoneTickets(): number {
        return this.devTermine + this.testCroise + this.mergeRequest +
            this.atester + this.alivrer + this.getDoneTickets();
    }

}
