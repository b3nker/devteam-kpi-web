import {Injectable} from '@angular/core';
import {StoryPoint} from '../../Model/story-point';
import {Adapter} from './adapter';

@Injectable({
    providedIn: 'root',
})

export class StoryPointAdapter implements Adapter<StoryPoint> {
    static adapt(item: any): StoryPoint {
        return new StoryPoint(
            item.total,
            item.aqualifier,
            item.bacAffinage,
            item.enAttente,
            item.afaire,
            item.enCours,
            item.abandonne,
            item.devTermine,
            item.avalider,
            item.alivrer,
            item.atester,
            item.refuseEnRecette,
            item.valideEnRecette,
            item.livre,
            item.termine,
            item.testCroise,
            item.valide,
            item.mergeRequest
        );
    }

    adapt(item: any): StoryPoint {
        return new StoryPoint(
            item.total,
            item.aqualifier,
            item.bacAffinage,
            item.enAttente,
            item.afaire,
            item.enCours,
            item.abandonne,
            item.devTermine,
            item.avalider,
            item.alivrer,
            item.atester,
            item.refuseEnRecette,
            item.valideEnRecette,
            item.livre,
            item.termine,
            item.testCroise,
            item.valide,
            item.mergeRequest
        );
    }
}
