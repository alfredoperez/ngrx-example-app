import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicStatePageComponent } from './atomic-state-page.component';

describe('AtomicStateExamplePageComponent', () => {
  let component: AtomicStatePageComponent;
  let fixture: ComponentFixture<AtomicStatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomicStatePageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AtomicStatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
