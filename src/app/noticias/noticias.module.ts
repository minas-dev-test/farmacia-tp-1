import { NoticiaDialogComponent } from './noticias-list/noticia-dialog.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { NoticiasRoutingModule } from './/noticias-routing.module';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';


@NgModule({
  imports: [
    SharedModule,
    NoticiasRoutingModule,
  ],
  declarations: [NoticiasListComponent, NoticiaDialogComponent],
  entryComponents: [NoticiasListComponent, NoticiaDialogComponent]
})
export class NoticiasModule { }
