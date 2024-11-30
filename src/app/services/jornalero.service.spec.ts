import { TestBed } from '@angular/core/testing';

import { JornaleroService } from './jornalero.service';

describe('JornaleroService', () => {
  let service: JornaleroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JornaleroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
