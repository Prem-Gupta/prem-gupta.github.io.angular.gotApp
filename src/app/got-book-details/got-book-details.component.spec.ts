import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotBookDetailsComponent } from './got-book-details.component';

describe('GotBookDetailsComponent', () => {
  let component: GotBookDetailsComponent;
  let fixture: ComponentFixture<GotBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
