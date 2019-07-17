import { Injectable, Testability } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';
import { environment } from '../environments/environment';
import { JWTService } from './jwt.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public service: HttpClient;
  public current: User;

  constructor(p_service: HttpClient, private jwt:JWTService ) {
    this.service = p_service;

    // Données utilisateur par défaut 
    this.current = {
      id: 1,
      email: "webstaff.itstyle@gmail.com",
      password: "admin",
      role: "default_role",
      connected: false
    };

  }




  public getAll(): Observable<User[]> {
    return this.service.get<User[]>(
      environment.domain + "/users",
      {headers: this.jwt.getHeaders()}
    );
  }

  public getById(p_id: number): Observable<User> {

    return this.service.get<User>(
      environment.domain + "/users/"+p_id,
      {headers: this.jwt.getHeaders()}
    );

  }

  public addUser(p_user: User): Observable<User> {

    return this.service.post<User>(
      environment.domain + "/users",
      p_user,
      {headers: this.jwt.getHeaders()}
    );
  }

  public editUser(p_id: number, p_user: User): Observable<User> {

    return this.service.put<User>(
      environment.domain + "/users/" + p_id,
      p_user,
      {headers: this.jwt.getHeaders()}
    );
  }

  public deleteUser(p_id: number): Observable<boolean> {
    return this.service.delete<boolean>(
      environment.domain + "/users/" + p_id,
      {headers: this.jwt.getHeaders()}
    );
  }

}

