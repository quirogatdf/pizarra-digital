import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDocenteComponent } from './detail-docente.component';

describe('DetailDocenteComponent', () => {
  let component: DetailDocenteComponent;
  let fixture: ComponentFixture<DetailDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
