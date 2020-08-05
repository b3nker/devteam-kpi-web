/* Model that encapsulate Collaborator data in tables (team, teams, collaborators components)
 */

export interface CollaboratorElement {
    name: string;
    devTime: number;
    allocatedTime: number;
    consumedTime: number;
    leftToDo: number;
    tickets: number;
    ticketsDone: number;
    ticketsDevDone: number;
    availableTime: number;
    runDays: number;
    role: string;
    _devTime: number;
    _availableTime: number;
}
