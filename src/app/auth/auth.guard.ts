import { AuthService } from './auth.service';
import { CanActivate, Router, Route } from '@angular/router';
import {Injectable } from '@angular/core';

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