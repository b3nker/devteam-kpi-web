import {Injectable} from '@angular/core';
import {Adapter} from './adapter';
import {Comment} from '../../Model/comment';

@Injectable({
    providedIn: 'root',
})
export class CommentAdapter implements Adapter<Comment> {
    adapt(item: any): Comment {
        return new Comment(
            item.sprintId,
            item.comment
        );
    }
}
