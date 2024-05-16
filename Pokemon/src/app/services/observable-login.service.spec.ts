import { TestBed } from '@angular/core/testing';

import { ObservableLoginService } from './observable-login.service';

describe('ObservableLoginService', () => {
  let service: ObservableLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
