import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLocalComponent } from './add-edit-local.component';

describe('AddEditLocalComponent', () => {
  let component: AddEditLocalComponent;
  let fixture: ComponentFixture<AddEditLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
