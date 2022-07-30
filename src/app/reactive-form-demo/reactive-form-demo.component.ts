import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataClass } from '../data-class';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {

  constructor(private fb: FormBuilder, private formService: FormService, private router: Router) {
    this.myForm = this.fb.group({
      customer_name: ['', Validators.required],
      phone_number: ['', Validators.required, Validators.email],
      email_address: ['', Validators.required],
      taxi: ['', Validators.required],
      pickup_time: ['', Validators.required],
      pickup_place: ['', Validators.required],
      dropoff_place: ['', Validators.required],
      comments: ['', Validators.required]
    })
  }

  myForm!: FormGroup;
  cus: DataClass = new DataClass();
  custList: DataClass[] = [];


  ngOnInit(): void {
    this.myForm = new FormGroup({
      customer_name: new FormControl(''),
      phone_number: new FormControl(''),
      email_address: new FormControl(''),
      pickup_time: new FormControl(''),
      pickup_place: new FormControl(''),
      dropoff_place: new FormControl(''),
      comments: new FormControl('')
    })
  }

  customerRegistration(form: FormGroup) {
    console.log("Registered succesfully");
    console.log('Valid?', form.valid);
    console.log('Name', form.value.Name);
    console.log('Email', form.value.Email);
    console.log('Phone', form.value.Phone);
    console.log('TaxiType', form.value.TaxiType);
    console.log('Extras', form.value.Extras);
    console.log('PickupDateTime', form.value.PickupDateTime);
    console.log('PickupPlace', form.value.PickupPlace);
    console.log('DropoffPlace', form.value.DropoffPlace);
    console.log('SpecialInstructions', form.value.SpecialInstructions);

    this.cus.Email = form.value.Email;
    this.cus.Name = form.value.Name;
    this.cus.Phone = form.value.Phone;
    this.cus.TaxiType = form.value.TaxiType;
    this.cus.PickupDateTime = form.value.PickupDateTime;
    this.cus.PickupPlace = form.value.PickupPlace;
    this.cus.DropoffPlace = form.value.DropoffPlace;
    this.cus.SpecialInstructions = form.value.SpecialInstructions;

    this.formService.registerNewCustomer(this.cus);
    console.log("Registered successfully...");
    this.router.navigate(['../customerDashboard']);
    console.log("navigation!!!");

  }
}
