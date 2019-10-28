import { TestBed } from '@angular/core/testing';

import { ThearteService } from './thearte.service';

describe('ThearteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThearteService = TestBed.get(ThearteService);
    expect(service).toBeTruthy();
  });
});
