import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataClass } from '../data-class';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private formService: FormService, private route: ActivatedRoute) { }

  cusList: DataClass[] = [];

  ngOnInit(): void {
    console.log("ng on init is called customer comp");
    this.formService.getCustomerList().subscribe((data: DataClass[]) => {
      console.log("Display customer list...." + data);
      this.cusList = data;
    });
  }

  
  }


