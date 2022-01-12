import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adressForm } from 'src/app/forms/AdressForm';
import { Seller } from 'src/app/models/Seller';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-individual-seller',
  templateUrl: './register-individual-seller.component.html',
  styleUrls: ['./register-individual-seller.component.scss']
})
export class RegisterIndividualSellerComponent implements OnInit {

  registerSIForm : FormGroup
  adressForms : FormGroup= new FormGroup(adressForm)

  constructor(private auth : AuthService,
    private fb : FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
    this.registerSIForm = this.fb.group({
      name : [null,[Validators.required,Validators.maxLength(30),Validators.pattern("[a-zA-Z]*[a-z ]+")]],
      surname : [null,[Validators.required,Validators.maxLength(30),Validators.pattern("[a-zA-Z]*[a-z ]+")]],
      email : [null, [Validators.required,Validators.email]],
      password : [null, [Validators.required]],
      gsmNumber : [null, [Validators.required,Validators.pattern("[0-9]+")]],
      telNumber : [null,[Validators.pattern("([0-9]?)+")]],
      adress : this.adressForms
    })
  }  
  public submit(){
      if(this.registerSIForm.valid){
        
        let sellerInd = this.registerSIForm.value as Seller

        this.auth.registerSellerInd(sellerInd).subscribe(
          (log) =>{
            if(log){
              alert("vous etes bien connecter" + sellerInd.name)
            }else
              alert("buuuuzz")
          }  
        ) 
          }
        }

}
