import { TestBed } from '@angular/core/testing';

import { ValidatorInterceptor } from './validator.interceptor';

describe('ValidatorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ValidatorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ValidatorInterceptor = TestBed.inject(ValidatorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
