import { createAction, props } from '@ngrx/store';
import { Friend } from '../../../shared/models/friends.model';

const actor = '[Atomic State Example Page]';
export const enter = createAction(`${actor} Enter`);

export const addFriend = createAction(
  `${actor} Friend Added`,
  props<{ friend: Friend }>()
);
