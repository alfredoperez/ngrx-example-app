import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomicStatePageComponent } from './containers/atomic-state-page/atomic-state-page.component';
import { RouterModule } from '@angular/router';
import { FriendTrackerStateModule } from './state/friend-tracker-state.module';
import {
  AddFriendModalModule,
  FriendsTableModule,
  MaterialModule
} from '../shared';

const featureRoutes = [{ path: '', component: AtomicStatePageComponent }];

@NgModule({
  declarations: [AtomicStatePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(featureRoutes),
    FriendTrackerStateModule,
    FriendsTableModule,
    AddFriendModalModule
  ]
})
export class AtomicStateExampleModule {}
