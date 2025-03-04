import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPortalComponent } from './why-portal.component';

describe('WhyPortalComponent', () => {
  let component: WhyPortalComponent;
  let fixture: ComponentFixture<WhyPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
