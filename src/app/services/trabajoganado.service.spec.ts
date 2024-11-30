import { TestBed } from '@angular/core/testing';

import { TrabajoganadoService } from './trabajoganado.service';

describe('TrabajoganadoService', () => {
  let service: TrabajoganadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajoganadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
