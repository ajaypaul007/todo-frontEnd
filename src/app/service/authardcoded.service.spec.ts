import { TestBed } from '@angular/core/testing';

import { AuthardcodedService } from './authardcoded.service';

describe('AuthardcodedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthardcodedService = TestBed.get(AuthardcodedService);
    expect(service).toBeTruthy();
  });
});
