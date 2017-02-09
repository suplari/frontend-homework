/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SupplierDataService } from './supplier-data.service';

describe('Service: SupplierData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierDataService]
    });
  });

  it('should ...', inject([SupplierDataService], (service: SupplierDataService) => {
    expect(service).toBeTruthy();
  }));
});
