import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNovedadComponent } from './add-novedad.component';

describe('AddNovedadComponent', () => {
  let component: AddNovedadComponent;
  let fixture: ComponentFixture<AddNovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNovedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
