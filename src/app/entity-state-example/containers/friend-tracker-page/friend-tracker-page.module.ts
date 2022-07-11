import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FriendsTableModule } from 'src/app/shared/components/friends-table/friends-table.module';
import { FriendTrackerPageComponent } from './friend-tracker-page.component';
import { AddFriendModalModule } from '../../../shared/components/add-friend-modal/add-friend-modal.module';
import { MaterialModule } from '../../../shared';

@NgModule({
  declarations: [FriendTrackerPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    // FlexLayoutModule,
    // MatProgressSpinnerModule,
    // MatButtonModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatIconModule,
    // MatInputModule,
    // MatTooltipModule,
    // MatDialogModule,
    // MatSnackBarModule,

    FriendsTableModule,
    AddFriendModalModule
  ],
  exports: [FriendTrackerPageComponent]
})
export class FriendTrackerPageModule {}
