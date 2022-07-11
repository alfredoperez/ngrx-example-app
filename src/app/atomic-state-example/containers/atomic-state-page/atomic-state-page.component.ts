import { Component } from '@angular/core';
import { FriendsApiService } from '../../../shared/services/friends-api.service';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { State } from '../../../entity-state-example/state/reducers/friends-tracker.reducers';
import {
  AtomicStatePageActions,
  selectAllFriends,
  selectError,
  selectIsLoaded,
  selectIsLoading
} from '../../state';
import { AddFriendModalComponent } from '../../../shared';

@Component({
  selector: 'app-atomic-state-page',
  templateUrl: './atomic-state-page.component.html',
  styleUrls: ['./atomic-state-page.component.scss']
})
export class AtomicStatePageComponent {
  /**
   * Observable of the list of friends
   */
  public friends$ = this.store.select(selectAllFriends);

  /**
   * Observable with a flag when it is loading data
   */
  public isLoading$ = this.store.select(selectIsLoading);

  /**
   * Observable with a flag when the data was loaded
   */
  public isLoaded$ = this.store.select(selectIsLoaded);

  /**
   * Observable with a flag when it is loading data
   */
  public error$ = this.store.select(selectError);

  constructor(
    private friendsService: FriendsApiService,
    private dialog: MatDialog,
    private store: Store<State>
  ) {
    this.store.dispatch(AtomicStatePageActions.enter());
  }

  /**
   * Opens a modal to add a new friend.
   * Dispatches an action to save the friend once the dialog is closed
   */
  public async addFriend(): Promise<void> {
    const friend = await this.dialog
      .open(AddFriendModalComponent, {
        data: {
          friends$: this.store.select(selectAllFriends)
        }
      })
      .afterClosed()
      .toPromise();

    if (!friend) {
      return;
    }

    this.store.dispatch(AtomicStatePageActions.addFriend({ friend }));
  }
}
