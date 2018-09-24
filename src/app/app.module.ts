import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, Authentication } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatExpansionModule, MatMenuModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { PontosDeApoioModule } from './pages/pontos-de-apoio/pontos-de-apoio.module';
import { AuthService } from './auth/auth.service';
import { PontosDeApoioService } from './pages/pontos-de-apoio/pontos-de-apoio.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatMenuModule,
    // modulo das paginas
    PontosDeApoioModule,
  ],
  providers: [
    AuthService,
    Authentication,
    PontosDeApoioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
