import {Release} from '../../Model/release';
import {Injectable} from '@angular/core';
import {Adapter} from './adapter';

@Injectable({
    providedIn: 'root',
})
export class ReleaseAdapter implements Adapter<Release> {
    adapt(item: any): Release {
        return new Release(
            item.name,
            item.startDate,
            item.endDate,
            item.nbOpenDays,
            item.nbWorkingDays,
            item.buildCapacityFront,
            item.buildCapacityMiddle,
            item.buildCapacityTotal
        );
    }
}
