import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';

const routes: Routes = [
  {
    path: 'reactiveformcomponent',
    component: ReactiveFormDemoComponent
  },
  {
    path: 'Customerdashboard',
    component: CustomerDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
