import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddFriendModalComponent } from './add-friend-modal.component';
import { AddFriendModalModule } from './add-friend-modal.module';

describe('AddFriendModalComponent', () => {
  let component: AddFriendModalComponent;
  let fixture: ComponentFixture<AddFriendModalComponent>;
  let formBuilder: FormBuilder;
  const matDialogRefStub = { close: () => ({}) };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [AddFriendModalModule],
      providers: [
        MatDialogRef,
        { provide: MAT_DIALOG_DATA, useValue: { data: {} } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFriendModalComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('save', () => {
    it('should make expected calls', () => {
      component.form = { value: 'new' } as any;
      // tslint:disable-next-line:no-string-literal
      component['dialogRef'] = matDialogRefStub as any;

      spyOn(matDialogRefStub, 'close').and.callThrough();
      component.save();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
