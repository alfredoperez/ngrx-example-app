import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { EntityStateModel, LoadingState } from '../../../shared/models/entity-state.model';
import { Friend } from '../../../shared/models/friends.model';
import { FriendsApiActions, FriendsTrackerPageActions } from '../actions';

export const featureKey = 'friends';

export interface FriendsState extends EntityStateModel<Friend> {
}

export const adapter: EntityAdapter<Friend> = createEntityAdapter<Friend>({
  sortComparer: false
});

export const initialState: FriendsState = adapter.getInitialState({
  callState: LoadingState.INIT
});

export const reducer = createReducer(
  initialState,
  on(FriendsTrackerPageActions.enter,
    (state) => ({
      ...state,
      callState: LoadingState.LOADING
    })),
  on(FriendsApiActions.loadSuccess,
    (state, {friends}) => {
      return adapter.setAll(friends || [], {
        ...state,
        callState: LoadingState.LOADED
      });
    }),
  on(FriendsApiActions.loadFailure,
    (state, {error}) => ({
      ...state,
      callState: {errorMessage: error}
    })),
  on(FriendsTrackerPageActions.addFriend,
    (state) => ({
      ...state,
      callState: LoadingState.LOADING
    })),
  on(FriendsApiActions.addFriendSuccess,
    (state, {friend}) => {
      return adapter.addOne(friend, {
        ...state,
        callState: LoadingState.LOADED
      });
    }),
  on(FriendsApiActions.addFriendFailure,
    (state, {error}) => ({
      ...state,
      callState: {errorMessage: error}
    })),
);



