import { Component,Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CanActivate, Router, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmacia-tp';
}

@Injectable()
export class Authentication implements CanActivate {

  constructor(public auth: AuthService, private router:Router) {
    
  }

  canActivate() {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}