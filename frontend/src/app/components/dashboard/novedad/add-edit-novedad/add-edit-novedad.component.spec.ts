import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNovedadComponent } from './add-edit-novedad.component';

describe('AddEditNovedadComponent', () => {
  let component: AddEditNovedadComponent;
  let fixture: ComponentFixture<AddEditNovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNovedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
