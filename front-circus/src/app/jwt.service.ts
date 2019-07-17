import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JWTService {

  private token:string = "";
  constructor() { 

  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders().append(
      "Authorization", this.getBearerToken() 
    ).append(
      "Content-type", "application/json"
    );
  }

  public getToken():string{
    return this.token;
  }

  public getBearerToken():string{
    return "Bearer " + this.token;
  }

  public setToken( p_token:string ):void{
    this.token = p_token;
  }
}

