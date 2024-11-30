import { TestBed } from '@angular/core/testing';

import { GastosRService } from './gastos-r.service';

describe('GastosRService', () => {
  let service: GastosRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastosRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
