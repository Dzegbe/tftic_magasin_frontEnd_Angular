import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterIndividualSellerComponent } from './components/register-individual-seller/register-individual-seller.component';
import { RegisterProfessionalSellerComponent } from './components/register-professional-seller/register-professional-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSellerComponent } from './components/login-seller/login-seller.component';
import { LoginCustomerComponent } from './components/login-customer/login-customer.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterCustomerComponent,
    RegisterIndividualSellerComponent,
    RegisterProfessionalSellerComponent,
    LoginSellerComponent,
    LoginCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // NgModule,
    JwtModule.forRoot({
      config:
      {
        allowedDomains : ["localhost:808"]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
