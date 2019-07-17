import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';
import { environment } from '../environments/environment';
import { JWTService } from './jwt.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public service: HttpClient;
  private jwt: JWTService;

  constructor(p_service: HttpClient, p_jwt: JWTService) {
    this.service = p_service;
    this.jwt = p_jwt;
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders().append(
      "Content-type", "application/json"
    );
  }

  public auth(p_email: string, p_password: string): Observable<string> {

    const url: string = environment.domain + "login";
    const user: any = { username: p_email, password: p_password };

    return this.service.post(url, user, {headers: this.getHeaders() }).pipe(
      map(
        (obj: any) => {

          this.jwt.setToken(obj.token as string);
          return obj.token as string;
          
        }
      )
    );
  }
}

