import { NoticiasComponent } from './noticias.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { NoticiasRoutingModule } from './/noticias-routing.module';

@NgModule({
  imports: [
    SharedModule,
    NoticiasRoutingModule,
  ],
  declarations: [NoticiasComponent],
  entryComponents: [NoticiasComponent]
})
export class NoticiasModule { }
