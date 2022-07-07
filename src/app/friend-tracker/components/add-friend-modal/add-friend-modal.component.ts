import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Friend } from '../../../shared/models/friends.model';

@Component({
  selector: 'app-add-friend-modal',
  templateUrl: './add-friend-modal.component.html',
  styleUrls: ['./add-friend-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFriendModalComponent {
  /**
   * The form to add a friend
   */
  form: FormGroup;

  /**
   * Observable with a list of friends
   */
  friends$: Observable<Array<Friend>>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AddFriendModalComponent>,
    private formBuilder: FormBuilder
  ) {
    this.friends$ = this.defaults.friends$;
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      kids: ['', Validators.required],
      friends: ['']
    });
  }

  /**
   * Gets the form value and pass it to the caller
   */
  save(): void {
    const friend = this.form.value as Friend;

    this.dialogRef.close(friend);
  }
}
