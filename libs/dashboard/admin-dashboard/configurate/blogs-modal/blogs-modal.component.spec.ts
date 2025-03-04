import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsModalComponent } from './blogs-modal.component';

describe('BlogsModalComponent', () => {
  let component: BlogsModalComponent;
  let fixture: ComponentFixture<BlogsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
