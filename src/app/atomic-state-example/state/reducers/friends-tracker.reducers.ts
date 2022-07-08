import { Action, combineReducers } from '@ngrx/store';
import * as fromFriends from './friends.reducers';

export const featureKey = 'friendsTracker';

export interface State {
  [fromFriends.featureKey]: fromFriends.FriendsState;
}

export function reducers(state: State | undefined, action: Action): State {
  return combineReducers({
    [fromFriends.featureKey]: fromFriends.reducer
  })(state, action);
}
