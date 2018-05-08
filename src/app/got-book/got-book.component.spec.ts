import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotBookComponent } from './got-book.component';

describe('GotBookComponent', () => {
  let component: GotBookComponent;
  let fixture: ComponentFixture<GotBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
