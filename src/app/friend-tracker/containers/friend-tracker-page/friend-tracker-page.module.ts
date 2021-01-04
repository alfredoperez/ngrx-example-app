import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddFriendModalModule } from '../../components/add-friend-modal/add-friend-modal.module';
import { FriendsTableModule } from '../../components/friends-table/friends-table.module';
import { FriendTrackerPageComponent } from './friend-tracker-page.component';

@NgModule({
  declarations: [FriendTrackerPageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,

    FriendsTableModule,
    AddFriendModalModule
  ],
  exports: [FriendTrackerPageComponent]
})
export class FriendTrackerPageModule {
}
