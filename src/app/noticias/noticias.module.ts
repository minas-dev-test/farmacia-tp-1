import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { NoticiasRoutingModule } from './/noticias-routing.module';
import { NoticiasFullComponent } from './noticias-full/noticias-full.component';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';

@NgModule({
  imports: [
    SharedModule,
    NoticiasRoutingModule,
  ],
  declarations: [NoticiasFullComponent, NoticiasListComponent],
  entryComponents: [NoticiasListComponent]
})
export class NoticiasModule { }
