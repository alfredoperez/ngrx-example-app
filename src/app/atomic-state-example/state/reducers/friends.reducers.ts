import { createReducer, on } from '@ngrx/store';
import { LoadingState } from '../../../shared/models/entity-state.model';
import { Friend } from '../../../shared/models/friends.model';
import { AtomicStatePageActions, FriendsApiActions } from '../actions';
import {
  AtomicState,
  RequestState
} from '../../atomic-state/atomic-state.model';
import { createAtomicStateAdapter } from '../../atomic-state/atomic-state.adapter';

export const featureKey = 'friends';

export type FriendsState = AtomicState<Friend>;

export const adapter = createAtomicStateAdapter<Friend>({
  sortComparer: false
});

export const initialState: FriendsState = adapter.getInitialState({
  requestState: LoadingState.INIT
});

export const reducer = createReducer(
  initialState,
  on(AtomicStatePageActions.enter, (state) => ({
    ...state,
    requestState: RequestState.LOADING
  })),
  on(FriendsApiActions.loadSuccess, (state, { friends }) => {
    return adapter.setAll(friends || [], {
      ...state,
      requestState: RequestState.RESOLVED
    });
  }),
  on(FriendsApiActions.loadFailure, (state, { error }) => ({
    ...state,
    requestState: { errorMsg: error }
  })),
  on(AtomicStatePageActions.addFriend, (state) => ({
    ...state,
    requestState: RequestState.LOADING
  })),
  on(FriendsApiActions.addFriendSuccess, (state, { friend }) => {
    return adapter.addOne(friend, {
      ...state,
      requestState: RequestState.RESOLVED
    });
  }),
  on(FriendsApiActions.addFriendFailure, (state, { error }) => ({
    ...state,
    requestState: { errorMsg: error }
  }))
);
