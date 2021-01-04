import { createSelector } from '@ngrx/store';
import { getError, LoadingState } from '../../../shared/models/entity-state.model';
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
} = FriendsReducers.adapter.getSelectors(selectFriendsState as any);

/**
 * Selector for a flag that indicates if there is an API request in progress
 */
export const selectIsLoading = createSelector(
    selectFriendsState,
    (state) => state.callState === LoadingState.LOADING
);

/**
 * Selector for a flag that indicates if data has been loaded
 */
export const selectIsLoaded = createSelector(
    selectFriendsState,
    (state) => state.callState === LoadingState.LOADED
);

/**
 * Selector for a the error message
 */
export const selectError = createSelector(
    selectFriendsState,
    (state) => getError(state.callState)
);

// export const selectTimelineDataOfFriendsCurrentMonth = createSelector(
//   selectAllFriends,
//   (friends) => {
//     const currentMonth = new Date().getMonth();
//     const friendsCurrentMonth = friends.filter(friend => friend.created.getMonth() === currentMonth);
//     const countByDate = getCountsByDate(friendsCurrentMonth, 'created');
//
//     return countByDate.map(({count, date}) => ({
//       count, date
//     } as any as TimelineDataPoint));
//   }
// );

export const selectTotalFriendsCurrentMonth = createSelector(
    selectAllFriends,
    (friends) => {
        const currentMonth = new Date().getMonth();

        return friends
            .filter(friend => friend.created.getUTCMonth() === currentMonth).length;
    }
);

export const selectTotalFriendsPreviousMonth = createSelector(
    selectAllFriends,
    (friends) => {
        const previousMonth = new Date().getUTCMonth() - 1;
        return friends
            .filter(friend => friend.created.getUTCMonth() === previousMonth).length;
    }
);

export const selectFriendAcquisitionDifference = createSelector(
    selectTotalFriendsCurrentMonth,
    selectTotalFriendsPreviousMonth,
    (totalCurrentMonth, totalPreviousMonth) => {
        return (totalCurrentMonth * 100) / totalPreviousMonth;
    }
);
