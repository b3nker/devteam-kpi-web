import {Injectable} from '@angular/core';
import {Collaborator} from '../Model/collaborator';
import {ChartElement} from '../Interface/chart-element';
import {TableElement} from '../Interface/table-element';


@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor() {
    }

    /**
     * Updates a ChartElement by adding Collaborator data
     * @param c, Collaborator object we collect data from
     * @param elem, ChartElement we update
     * @return An updated ChartElement given as input (void)
     */
    static updateChartElement(c: Collaborator, elem: ChartElement): void {
        elem.aQualifierBacAffinnage += c.storyPoints.aqualifier + c.storyPoints.bacAffinage;
        elem.aFaire += c.storyPoints.afaire;
        elem.enAttente += c.storyPoints.enAttente;
        elem.refuseEnRecette += c.storyPoints.refuseEnRecette;
        elem.enCoursDevTermineTestCroise += c.storyPoints.enCours + c.storyPoints.devTermine + c.storyPoints.testCroise
            + c.storyPoints.mergeRequest;
        elem.aLivrer += c.storyPoints.alivrer;
        elem.aTester += c.storyPoints.atester;
        elem.valideEnRecetteLivreTermine += c.storyPoints.valideEnRecette + c.storyPoints.livre + c.storyPoints.termine;
    }

    /**
     * Creates a ChartElement object and maps collaborator meta-data to it
     * @param c, Collaborator object we inject data from
     * @return A ChartElement object initialize with collaborator data
     */
    static generateChartElement(c: Collaborator): ChartElement {
        return {
            name: c.getFullName(),
            aQualifierBacAffinnage: c.storyPoints.aqualifier + c.storyPoints.bacAffinage,
            aFaire: c.storyPoints.afaire,
            enAttente: c.storyPoints.enAttente,
            refuseEnRecette: c.storyPoints.refuseEnRecette,
            enCoursDevTermineTestCroise: c.storyPoints.enCours + c.storyPoints.devTermine + c.storyPoints.testCroise
                + c.storyPoints.mergeRequest,
            aLivrer: c.storyPoints.alivrer,
            aTester: c.storyPoints.atester,
            valideEnRecetteLivreTermine: c.storyPoints.valideEnRecette + c.storyPoints.livre + c.storyPoints.termine
        };
    }

    /**
     * Creates an empty ChartElement, specifying nothing but its name.
     * @param nameAttribute, name attributed to created ChartElement
     * @return A ChartElement object.
     */
    static generateEmptyChartElement(nameAttribute: string): ChartElement {
        return {
            name: nameAttribute,
            aQualifierBacAffinnage: 0,
            aFaire: 0,
            enAttente: 0,
            refuseEnRecette: 0,
            enCoursDevTermineTestCroise: 0,
            aLivrer: 0,
            aTester: 0,
            valideEnRecetteLivreTermine: 0
        };
    }


    /**
     * Creates an empty TableElement, specifying nothing but its name.
     * @param nameAttribute, name attributed to created TableElement
     * @param collabRole, Role attached to designated TableElement we generate
     * @return A TableElement object.
     */
    static generateEmptyTableElement(nameAttribute: string, collabRole: string): TableElement {
        return {
            name: nameAttribute,
            devTime: null,
            allocatedTime: null,
            consumedTime: null,
            leftToDo: null,
            tickets: 0,
            ticketsDone: 0,
            availableTime: null,
            runDays: 0,
            ceremonyDays: 0,
            role: collabRole,
            url: '',
            _availableTime: null,
            _devTime: null,
        };
    }

    /**
     * Creates a TableElement and assigned values passed as parameter to it
     * @param c, Collaborator we want to fetch data in
     * @param velocity, theoretical value assigned to collaborator given as input
     * @return A TableElement interface filled with values given as parameters.
     */
    static generateTableElement(c: Collaborator, velocity: number): TableElement {
        const developmentTime = Math.round(c.totalWorkingTime * velocity);
        return {
            name: c.getFullName(),
            devTime: developmentTime,
            allocatedTime: Math.round(c.estimatedTime * 10) / 10,
            consumedTime: Math.round(c.loggedTime * 10) / 10,
            leftToDo: Math.round(c.remainingTime * 10) / 10,
            tickets: c.tickets.total,
            ticketsDone: c.tickets.getSupDevDoneTickets(),
            availableTime: Math.round(c.availableTime * velocity),
            runDays: 0,
            ceremonyDays: 0,
            role: c.role,
            url:  'https://apriltechnologies.atlassian.net/issues/?jql=issue in (' + c.getJqlKeysList() + ')',
            _availableTime: Math.round(c.availableTime * velocity),
            _devTime: developmentTime,
        };
    }

    /**
     * Update a TableElement given collaborator data.
     * @param c, Collaborator we inject data from
     * @param elem, TableElement we update
     * @param velocity, theoretical velocity attached to input collaborator
     * @return void
     */
    static updateTableElement(c: Collaborator, elem: TableElement, velocity: number): void {
        const developmentTime = Math.round(c.totalWorkingTime * velocity);
        const timeAvailable = Math.round(c.availableTime * velocity);
        elem.devTime += developmentTime;
        elem.allocatedTime += Math.round(c.estimatedTime * 10) / 10;
        elem.consumedTime += Math.round(c.loggedTime * 10) / 10;
        elem.leftToDo += Math.round(c.remainingTime * 10) / 10;
        elem.tickets += c.tickets.total;
        elem.ticketsDone += c.tickets.getSupDevDoneTickets();
        elem.availableTime += timeAvailable;
        elem._devTime += developmentTime;
        elem._availableTime += timeAvailable;
    }
}
