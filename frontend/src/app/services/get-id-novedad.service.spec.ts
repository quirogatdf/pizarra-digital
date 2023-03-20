import { TestBed } from '@angular/core/testing';

import { GetIdNovedadService } from './get-id-novedad.service';

describe('GetIdNovedadService', () => {
  let service: GetIdNovedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIdNovedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
