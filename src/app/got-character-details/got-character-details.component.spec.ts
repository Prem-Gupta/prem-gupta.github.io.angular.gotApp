import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotCharacterDetailsComponent } from './got-character-details.component';

describe('GotCharacterDetailsComponent', () => {
  let component: GotCharacterDetailsComponent;
  let fixture: ComponentFixture<GotCharacterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotCharacterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotCharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
