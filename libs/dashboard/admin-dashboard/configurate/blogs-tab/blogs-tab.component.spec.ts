import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsTabComponent } from './blogs-tab.component';

describe('BlogsTabComponent', () => {
  let component: BlogsTabComponent;
  let fixture: ComponentFixture<BlogsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
