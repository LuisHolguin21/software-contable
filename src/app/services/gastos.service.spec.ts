import { TestBed } from '@angular/core/testing';

import { gastosService } from './gastos.service';

describe('GastosService', () => {
  let service: gastosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(gastosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
