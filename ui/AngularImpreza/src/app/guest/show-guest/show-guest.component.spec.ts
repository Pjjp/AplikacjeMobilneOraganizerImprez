import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGuestComponent } from './show-guest.component';

describe('ShowGuestComponent', () => {
  let component: ShowGuestComponent;
  let fixture: ComponentFixture<ShowGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
