import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Friend} from '../../../shared/models/friends.model';
import {FriendsApiService} from '../../../shared/services/friends-api.service';
import {AddFriendModalComponent} from '../../components/add-friend-modal/add-friend-modal.component';
import {
  selectAllFriends,
  selectError,
  selectFriendAcquisitionDifference,
  selectIsLoaded,
  selectIsLoading,
  selectTotalFriendsCurrentMonth
} from '../../state';
import {FriendsTrackerPageActions} from '../../state/actions';
import {State} from '../../state/reducers/friends-tracker.reducers';

@Component({
  templateUrl: './friend-tracker-page.component.html',
  styleUrls: ['./friend-tracker-page.component.scss']
})
export class FriendTrackerPageComponent {

  /**
   * Observable of the list of friends
   */
  public friends$: Observable<Array<Friend>>;

  /**
   * Observable with a flag when it is loading data
   */
  public isLoading$: Observable<boolean>;

  /**
   * Observable with a flag when the data was loaded
   */
  public isLoaded$: Observable<boolean>;

  /**
   * Observable with a flag when it is loading data
   */
  public error$: Observable<string | null>;


  public totalFriendsCurrentMonth$: Observable<number>;
  // public friendsCurrentMonth$: Observable<Array<TimelineDataPoint>>;
  public percentageDifference$: Observable<number>;

  constructor(
    private friendsService: FriendsApiService,
    private dialog: MatDialog,
    private store: Store<State>) {

    this.store.dispatch(FriendsTrackerPageActions.enter());

    this.friends$ = this.store.select(selectAllFriends);
    this.isLoaded$ = this.store.select(selectIsLoaded);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);

    this.totalFriendsCurrentMonth$ = this.store.select(selectTotalFriendsCurrentMonth);
    this.percentageDifference$ = this.store.select(selectFriendAcquisitionDifference);
    // this.friendsCurrentMonth$ = this.store.select(selectTimelineDataOfFriendsCurrentMonth);
  }

  /**
   * Opens a modal to add a new friend.
   * Dispatches an action to save the friend once the dialog is closed
   */
  public async addFriend(): Promise<void> {

    const friend = await this.dialog.open(
      AddFriendModalComponent,
      {
        data: {
          friends$: this.store.select(selectAllFriends)
        }
      }
    ).afterClosed().toPromise();

    if (!friend) {
      return;
    }

    this.store.dispatch(FriendsTrackerPageActions.addFriend({friend}));
  }
}
