import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FriendsEffects } from './effects/friends.effects';
import * as fromFriendsTracker from './reducers/friends-tracker.reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(
      fromFriendsTracker.featureKey,
      fromFriendsTracker.reducers
    ),
    EffectsModule.forFeature([
      FriendsEffects
    ])
  ]
})
export class FriendTrackerStateModule {
}
