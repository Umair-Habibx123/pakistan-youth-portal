import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotScreenComponent } from './forgot-screen.component';

describe('ForgotScreenComponent', () => {
  let component: ForgotScreenComponent;
  let fixture: ComponentFixture<ForgotScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
