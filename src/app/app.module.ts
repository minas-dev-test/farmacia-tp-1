
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CoreModule } from './core/core.module';
import { NavbarModule } from './navbar/navbar.module';
import { SobreOProjetoComponent } from './sobre-o-projeto/sobre-o-projeto.component';
import { SacComponent } from './sac/sac.component';


@NgModule({
  declarations: [
    AppComponent,
    SobreOProjetoComponent,
    SacComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
