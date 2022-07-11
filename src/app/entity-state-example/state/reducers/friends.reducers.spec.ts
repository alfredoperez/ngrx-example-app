import { LoadingState } from '../../../shared/models/entity-state.model';
import { Friend } from '../../../shared/models/friends.model';
import { FriendsApiActions, FriendsTrackerPageActions } from '../actions';
import { FriendsReducers } from './index';

describe('FriendsReducers', () => {

  it('should set the loading when entering the page', () => {

    const action = FriendsTrackerPageActions.enter();

    const result = FriendsReducers.reducer(FriendsReducers.initialState, action);

    expect(result).toMatchSnapshot({
      callState: LoadingState.LOADING
    });
  });

  it('should set the loaded when data returned', () => {

    const data = [];
    const action = FriendsApiActions.loadSuccess({friends: data});

    const result = FriendsReducers.reducer(FriendsReducers.initialState, action);

    expect(result).toMatchSnapshot({
      callState: LoadingState.LOADED
    });
  });

  it('should set the error message when failing to retrieve friends list', () => {
    const error = 'error';
    const action = FriendsApiActions.loadFailure({error});

    const result = FriendsReducers.reducer(FriendsReducers.initialState, action);

    expect(result).toMatchSnapshot({
      callState: {errorMessage: error}
    });
  });

  it('should set the loading when adding a friend', () => {
    const action = FriendsTrackerPageActions.addFriend({friend: {id: ''} as Friend});

    const result = FriendsReducers.reducer(FriendsReducers.initialState, action);

    expect(result).toMatchSnapshot({
      callState: LoadingState.LOADING
    });
  });

  it('should set the loaded when successfully added a friend', () => {
    const action = FriendsApiActions.addFriendSuccess({friend: {id: ''} as Friend});

    const result = FriendsReducers.reducer(FriendsReducers.initialState, action);

    expect(result).toMatchSnapshot({
      callState: LoadingState.LOADED
    });
  });

  it('should set the error message when failing to add a friend', () => {
    const error = 'error';
    const action = FriendsApiActions.addFriendFailure({error});

    const result = FriendsReducers.reducer(FriendsReducers.initialState, action);

    expect(result).toMatchSnapshot({
      callState: {errorMessage: error}
    });
  });

});
