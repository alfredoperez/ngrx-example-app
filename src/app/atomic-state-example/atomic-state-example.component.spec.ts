import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicStateExampleComponent } from './atomic-state-example.component';

describe('AtomicStateExampleComponent', () => {
  let component: AtomicStateExampleComponent;
  let fixture: ComponentFixture<AtomicStateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicStateExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
