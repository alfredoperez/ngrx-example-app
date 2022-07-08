import { createSelector } from '@ngrx/store';
import { FriendsReducers } from '../reducers';
import { selectFriendsTrackerState } from './friends-tracker.selectors';

/**
 * Selector for the slice of state of 'Friends'
 */
export const selectFriendsState = createSelector(
  selectFriendsTrackerState,
  (state: any) => state[FriendsReducers.featureKey]
);

/**
 * Selectors from the entity
 */
export const {
  selectAll: selectAllFriends,
  selectIsResolved: selectIsLoaded,
  selectErrorMessage: selectError,
  selectIsLoading
} = FriendsReducers.adapter.getSelectors(selectFriendsState as any);
