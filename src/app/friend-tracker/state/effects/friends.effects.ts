import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { FriendsApiService } from '../../../shared/services/friends-api.service';
import { FriendsApiActions, FriendsTrackerPageActions } from '../actions';

@Injectable()
export class FriendsEffects {

  loadFriends$ = createEffect(
    () => this.actions$.pipe(
      ofType(FriendsTrackerPageActions.enter),
      switchMap(() => {
        return this.friendsApiService.list()
          .pipe(
            map(friends => {
              return FriendsApiActions.loadSuccess({friends});
            }),
            catchError((error) => of(FriendsApiActions.loadFailure(
              {error: 'Failed loading the list of friends. Please contact your administrator'})))
          );
      })
    ));

  loadFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(FriendsApiActions.loadFailure),
      map(() => {
        setTimeout(
          () =>
            this.snackBar.open('Error loading friends!', 'Error', {
              duration: 2500,
            }),
          0
        );
      })
    ), {dispatch: false}
  );

  addFriend$ = createEffect(
    () => this.actions$.pipe(
      ofType(FriendsTrackerPageActions.addFriend),
      concatMap(({friend}) => {
        return this.friendsApiService.add(friend)
          .pipe(
            map(newFriend => {
              return FriendsApiActions.addFriendSuccess({friend: newFriend});
            }),
            catchError((error) => of(FriendsApiActions.addFriendFailure({
              error: 'Failed adding a friend. Please contact your administrator'
            })))
          );
      })
    )
  );

  addFriendFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(FriendsApiActions.addFriendFailure),
      map(() => {
        setTimeout(
          () =>
            this.snackBar.open('Error adding a friend', 'Error', {
              duration: 2500,
            }),
          0
        );
      })
    ), {dispatch: false}
  );


  constructor(private actions$: Actions,
              private friendsApiService: FriendsApiService,
              private snackBar: MatSnackBar) {
  }
}
