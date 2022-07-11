import { createAction, props } from '@ngrx/store';
import { Friend } from '../../../shared/models/friends.model';

export const loadSuccess = createAction(
  '[Friends API] Load Success',
  props<{ friends: Array<Friend> }>()
);

export const loadFailure = createAction(
  '[Friends API] Load Failure',
  props<{ error: string }>()
);

export const addFriendSuccess = createAction(
  '[Friends API] Add Friend Success',
  props<{ friend: Friend }>()
);

export const addFriendFailure = createAction(
  '[Friends API] Add Friend Failure',
  props<{ error: string }>());
