import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FriendTrackerPageComponent } from './containers/friend-tracker-page/friend-tracker-page.component';
import { FriendTrackerPageModule } from './containers/friend-tracker-page/friend-tracker-page.module';
import { FriendTrackerStateModule } from './state/friend-tracker-state.module';

const featureRoutes = [{path: '', component: FriendTrackerPageComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureRoutes),
    FriendTrackerStateModule,
    FriendTrackerPageModule,
  ]
})
export class FriendTrackerModule {
}
