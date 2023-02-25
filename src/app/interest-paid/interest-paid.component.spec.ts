import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPaidComponent } from './interest-paid.component';

describe('InterestPaidComponent', () => {
  let component: InterestPaidComponent;
  let fixture: ComponentFixture<InterestPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestPaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
