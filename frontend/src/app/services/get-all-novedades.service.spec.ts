import { TestBed } from '@angular/core/testing';

import { GetAllNovedadesService } from './get-all-novedades.service';

describe('GetAllNovedadesService', () => {
  let service: GetAllNovedadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllNovedadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
