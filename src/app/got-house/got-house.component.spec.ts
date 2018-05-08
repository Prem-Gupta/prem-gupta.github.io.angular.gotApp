import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotHouseComponent } from './got-house.component';

describe('GotHouseComponent', () => {
  let component: GotHouseComponent;
  let fixture: ComponentFixture<GotHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
