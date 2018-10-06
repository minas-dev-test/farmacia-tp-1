import { NgModule } from '@angular/core';
import { PdaRoutingModule } from './/pda-routing.module';
import { PontosDeApoioListComponent } from './pontos-de-apoio-list/pontos-de-apoio-list.component';
import { SharedModule } from '../shared/shared.module';
import { PontosDeApoioComponent } from './pontos-de-apoio.component';

@NgModule({
  imports: [
    SharedModule,
    PdaRoutingModule
  ],
  declarations: [PontosDeApoioListComponent, PontosDeApoioComponent],
  entryComponents: [PontosDeApoioComponent]
})
export class PontosDeApoioModule { }
