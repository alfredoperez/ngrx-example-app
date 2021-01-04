import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FriendsNamesPipe } from '../../../shared/pipes/friends-names/friends-names.pipe';
import { FriendsTableComponent } from './friends-table.component';
import { FriendsTableModule } from './friends-table.module';

describe('FriendsTableComponent', () => {

  let component: FriendsTableComponent;
  let fixture: ComponentFixture<FriendsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FriendsTableModule],
      providers: [FriendsNamesPipe]
    });
    fixture = TestBed.createComponent(FriendsTableComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {

    it('should set the visible columns', () => {
      component.visibleColumns = [];
      component.friends = of([]);
      component.ngOnInit();
      expect(component.visibleColumns).toEqual(['name', 'created', 'age', 'weight', 'friends']);
    });

  });

});
