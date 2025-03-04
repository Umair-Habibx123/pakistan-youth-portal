import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogs2Component } from './blogs2.component';

describe('Blogs2Component', () => {
  let component: Blogs2Component;
  let fixture: ComponentFixture<Blogs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blogs2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
