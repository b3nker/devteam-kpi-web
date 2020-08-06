export interface ReleaseRow{
    name: string;
    startDate: Date;
    endDate: Date;
    nbOpenDays: number;
    nbWorkingDays: number;
    buildCapacityFront: number;
    buildCapacityMiddle: number;
    buildCapacityTotal: number;
}
