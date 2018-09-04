import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PontosDeApoioComponent } from './pages/pontos-de-apoio/pontos-de-apoio.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { NewPdaFormComponent } from './components/new-pda-form/new-pda-form.component';




@NgModule({
  declarations: [
    AppComponent,
    PontosDeApoioComponent,
    HomeComponent,
    NavbarComponent,
    NewPdaFormComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
