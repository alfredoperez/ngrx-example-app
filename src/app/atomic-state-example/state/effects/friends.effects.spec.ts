import { Observable, of } from 'rxjs';
import { FriendsApiService } from '../../../shared/services/friends-api.service';
import { FriendsEffects } from './friends.effects';

describe('FriendsEffects', () => {
  let friendsEffects: FriendsEffects;
  let actions$: Observable<any>;
  let friendsApiService: FriendsApiService;

  beforeEach(() => {
    const matSnackBarStub = () => ({});
    actions$ = of('') as any;

    friendsApiService = new FriendsApiService();
    friendsEffects = new FriendsEffects(
      actions$,
      friendsApiService,
      matSnackBarStub as any);

  });

  it('can load instance', () => {
    expect(friendsEffects).toBeTruthy();
  });

  // describe('loadFriends$', () => {
  //
  //   it('should call the friends api and return the results', () => {
  //
  //     const action = FriendsTrackerPageActions.enter();
  //     actions$ = hot('-a', {a: action});
  //
  //     const response = cold('-a|', {a: []});
  //     friendsApiService.list = jest.fn(() => response);
  //
  //     const outcome = FriendsApiActions.loadSuccess({friends: []});
  //     const expected = cold('--b', {b: outcome});
  //
  //     expect(friendsEffects.loadFriends$).toBeObservable(expected);
  //   });
  // });
});
