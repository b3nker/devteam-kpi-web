/* Model that encapsulate Collaborator data in tables (team, teams, collaborators components)
 */

export interface TableElement {
    name: string;
    devTime: any;
    allocatedTime: any;
    consumedTime: any;
    leftToDo: any;
    tickets: number;
    ticketsDone: number;
    availableTime: any;
    runDays: number;
    ceremonyDays: number;
    role: string;
    url: string;
    // Hidden variables
    _devTime: number;
    _availableTime: number;



}
