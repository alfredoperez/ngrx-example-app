import * as fromFriends from './friends.reducers';
import { FriendsTrackerReducers } from './index';

describe('FriendsTrackerReducer', () => {

  it('should contain the feature of friends', () => {
    const expectedFeature = FriendsTrackerReducers.reducers({friends: null}, {type: ''});
    expect(expectedFeature[fromFriends.featureKey]).toBeDefined();
  });

});
