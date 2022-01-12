import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCustomerComponent } from './components/login-customer/login-customer.component';
import { LoginSellerComponent } from './components/login-seller/login-seller.component';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import { RegisterIndividualSellerComponent } from './components/register-individual-seller/register-individual-seller.component';
import { RegisterProfessionalSellerComponent } from './components/register-professional-seller/register-professional-seller.component';

const routes: Routes = [
  {path : 'loginSeller',component : LoginSellerComponent},
  {path : 'loginCustomer',component : LoginCustomerComponent},
  {path : 'registerCustomer',component : RegisterCustomerComponent},
  {path :'registerSellerInd',component : RegisterIndividualSellerComponent},
  {path : 'registerSellerPro',component : RegisterProfessionalSellerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
