import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddFriendModalComponent } from './add-friend-modal.component';
import { AddFriendModalModule } from './add-friend-modal.module';

describe('AddFriendModalComponent', () => {

  let component: AddFriendModalComponent;
  let fixture: ComponentFixture<AddFriendModalComponent>;
  let formBuilder: FormBuilder;
  const matDialogRefStub = {close: friend => ({})};

  beforeEach(() => {
    const formBuilderStub = () => ({group: object => ({})});

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [AddFriendModalModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {data: {}}},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFriendModalComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should make expected calls', () => {
      // tslint:disable-next-line:no-string-literal
      component['formBuilder'] = formBuilder;

      jest.spyOn(formBuilder, 'group').mockReturnValue(null);
      component.ngOnInit();
      expect(formBuilder.group).toHaveBeenCalled();
    });

  });

  describe('save', () => {
    it('should make expected calls', () => {
      component.form = {value: 'new'} as any;
      // tslint:disable-next-line:no-string-literal
      component['dialogRef'] = matDialogRefStub as any;

      spyOn(matDialogRefStub, 'close').and.callThrough();
      component.save();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
