export class Config {
    // URL
    static jiraDomain = 'https://apriltechnologies.atlassian.net';
    static baseURL = '/api';
    static backlogBaseURL = '/api/backlog';
    static commentBaseURL = '/api/comment';
    static releaseBaseURL = '/api/release';
    static retrospectiveBaseURL = '/api/retrospective';
    static sprintBaseURL = '/api/sprint';

    // General settings
    static scrum = 'Scrum';
    static leadDev = 'lead dev';
    static workingHoursPerDay = 8;
    static devVelocity = 1;
    static leadDevVelocity = 0.65;

    // Unassigned's properties
    static unassignedRole = 'none';
    static unassignedName = 'Non Assigné';
    static unassignedAccountID = 'unassigned';

    // team properties
    static teamRole = 'team';
}
