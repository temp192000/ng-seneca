import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMartComponent } from './e-mart.component';

describe('EMartComponent', () => {
  let component: EMartComponent;
  let fixture: ComponentFixture<EMartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
