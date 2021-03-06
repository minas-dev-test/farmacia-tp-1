import { Authentication } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { PdaRoutingModule } from './/pda-routing.module';
import { PontosDeApoioListComponent } from './pontos-de-apoio-list/pontos-de-apoio-list.component';
import { SharedModule } from '../shared/shared.module';
import { PontosDeApoioFormComponent } from './pontos-de-apoio-form/pontos-de-apoio-form.component';

@NgModule({
  imports: [
    SharedModule,
    PdaRoutingModule
  ],
  providers: [Authentication],
  declarations: [PontosDeApoioListComponent, PontosDeApoioFormComponent],
  entryComponents: [PontosDeApoioListComponent]
})
export class PontosDeApoioModule { }
