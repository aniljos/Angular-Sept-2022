import { TestBed } from '@angular/core/testing';

import { GadgetService } from './gadget.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { UserService } from '../auth/services/user-service';
import { UserServiceImpl } from '../auth/services/user-service-impl';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

fdescribe('GadgetService', () => {
  let service: GadgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: UserService, useClass: UserServiceImpl}, GadgetService]
    });
    service = TestBed.inject(GadgetService);
  });

  it('should be created', () => {

    const controller = TestBed.inject(HttpTestingController);
    expect(service).toBeTruthy();

    service
      .fetchProducts()
      .subscribe(function(data){

        expect(data).toBeTruthy();
        expect(data.length).toBe(3);

      })

      const request = controller.expectOne(environment.baseUrl);
      request.flush([
          new Product(1, "", 3000, ""),
          new Product(2, "", 3000, ""),
          new Product(3, "", 3000, ""),
      ])

  });
});
