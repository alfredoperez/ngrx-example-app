import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFriendModalComponent } from './add-friend-modal.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [AddFriendModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
    // FlexLayoutModule,
    // MatDialogModule,
    // MatInputModule,
    // MatButtonModule,
    // MatIconModule,
    // MatDividerModule,
    // MatSelectModule,
  ],
  entryComponents: [AddFriendModalComponent],
  exports: [AddFriendModalComponent]
})
export class AddFriendModalModule {}
