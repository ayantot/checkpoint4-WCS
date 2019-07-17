import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authenticate.service';
import { User } from '../user';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  public current:User;

  constructor( private service:AuthService) { 
    this.current = null;
  }

  public auth():void{
    this.service.auth(this.current.email, this.current.password).subscribe(
      ( token:string ) => {
        this.current.connected = true;
      }, 
      () => {
        alert("Erreur lors de la connexion !");
      }
    );
  }

  ngOnInit() {
    this.current = new User();
  }

}
