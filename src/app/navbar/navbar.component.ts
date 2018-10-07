import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    profile: any;
    
    constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService) {
      console.log('Construtor navbar')
      auth.handleAuthentication();
        setTimeout(()=>{
          this.carregarPerfil();
        },1000);
    }
  
    carregarPerfil(){
      if(this.auth.isAuthenticated()){
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
        console.log('dados do usuario => ',this.profile)
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
          console.log('dados do usuario => ',this.profile)
        });
      }
    }
  }  
  }
