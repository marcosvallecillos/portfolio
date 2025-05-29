import { TestBed } from '@angular/core/testing';

import { LenguajeServiceService } from './lenguaje-service.service';

describe('LenguajeServiceService', () => {
  let service: LenguajeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LenguajeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
