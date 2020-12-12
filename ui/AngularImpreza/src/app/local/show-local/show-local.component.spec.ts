import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLocalComponent } from './show-local.component';

describe('ShowLocalComponent', () => {
  let component: ShowLocalComponent;
  let fixture: ComponentFixture<ShowLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
