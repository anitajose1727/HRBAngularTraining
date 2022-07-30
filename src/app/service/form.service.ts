import { Injectable } from '@angular/core';
import { DataClass } from '../data-class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  [x: string]: any;

  apiUrl = "http://localhost:3000/customers"

  constructor() { }
  registerNewCustomer(FormService:DataClass): void {
    console.log("Cus service save customer method called service called.....");
    console.log(FormService.Email);
    console.log(FormService.Name);
    console.log(FormService.Phone);
    console.log(FormService.TaxiType);
    console.log(FormService.Extras);
    console.log(FormService.PickupPlace);
    console.log(FormService.DropoffPlace);
    console.log(FormService.SpecialInstructions);

    this['http'].post("http://localhost:3000/customers", FormService).subscribe(() =>
      console.log("Saved Successfully"));
  }

  getCustomerList(): Observable<any> {
    console.log("service getCustomerList called");
    return this['http'].get('http://localhost:3000/customers');
  }
  getCustomer(id: any): Observable<any> {
    console.log("service getCustomer called");
    return this['http'].get('http://localhost:3000/customers/' + id);
  }

  

}
