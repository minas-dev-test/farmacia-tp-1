import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './/navbar-routing.module';
import { PontosDeApoioModule } from '../pontos-de-apoio/pontos-de-apoio.module';
import { HomepageModule } from '../homepage/homepage.module';


@NgModule({
  imports: [
    SharedModule,
    NavbarRoutingModule,
    PontosDeApoioModule,
    HomepageModule,
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  entryComponents:[NavbarComponent]
})
export class NavbarModule { }
