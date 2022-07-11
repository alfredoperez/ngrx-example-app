import { createAction, props } from '@ngrx/store';
import { Friend } from '../../../shared/models/friends.model';

export const enter = createAction('[Friends Tracker Page] Enter');

export const addFriend = createAction(
  '[Friends Tracker Page] AddFriend',
  props<{ friend: Friend }>()
);
