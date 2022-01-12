import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/Login';
import { Seller } from 'src/app/models/Seller';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrls: ['./login-seller.component.scss']
})
export class LoginSellerComponent implements OnInit {
  loginForm : FormGroup
  constructor(private auth : AuthService,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({ 
        email : [null,[Validators.required]],
        password : [null,Validators.required]
      }
    )
  }

  submit(){
    if(this.loginForm.valid){

      this.auth.login("S" + this.loginForm.get('email').value,this.loginForm.get('password').value).subscribe(
        (log) => {if(log){ let user = JSON.parse(localStorage.getItem('user')) as Seller 
                      alert("vous etes connecter" + user.name)} }
      )
    }
  }

}
