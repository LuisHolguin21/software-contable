import { TestBed } from '@angular/core/testing';

import { TipoTrabajoService } from './tipotrabajos.service';

describe('TrabajosService', () => {
  let service: TipoTrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoTrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
