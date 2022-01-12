import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../models/Login';
import { Seller } from '../models/Seller';
import { User } from '../models/User';
import { ServerService } from './server.service';

const SERVER_URL : string = environment.api.url

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwt : JwtHelperService = new JwtHelperService()
  private loggin : boolean = false;
  

  constructor(private server : ServerService,
              private router : Router,
              private http : HttpClient,
            ) 
   {   
      this.loggin = this.checkToken()
    }

  public login(username : string, password :string): Observable<Boolean>{
    let userLogin  = new Login(username,password)
    return this.http.post<User>(SERVER_URL + "login",userLogin)
        .pipe(map((user) => {
          return this.saveToken(user)
        } ))
  }

  public registerSellerInd(seller : Seller) : Observable<Boolean>{
    return this.server.post<Seller>("registerSellerInd",seller)
            .pipe(map((seller) => {
              return this.saveToken(seller)
            }))
  }

  public registerSellerPro(seller : Seller) : Observable<Boolean>{
    return this.server.post<Seller>("registerSellerPro",seller)
            .pipe(map((seller) => {
              return this.saveToken(seller)
            }))
  }

  public logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    this.loggin = false
  }

  public isLoggin(){
    return this.loggin
  }

  /**
   * permet d'enregister le token et l'utilisateur 
   * tant que le browser est ouvert 
   * @param user 
   * @returns un boolean qui permet de savoir si le token existe
   */
  private saveToken(user : User) : boolean{
    if(user.token){
      localStorage.setItem('token',user.token.replace("Bearer ",""))
      localStorage.setItem('user',JSON.stringify(user))
      return this.loggin = true
    }
    return this.loggin
  }

  private checkToken() : boolean{
    let token = localStorage.getItem("token")

    if(!token || this.jwt.isTokenExpired(token)){
      this.logout
      return false
    }
    return true
  }
}
