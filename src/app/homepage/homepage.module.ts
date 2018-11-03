import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CarouselNoticiasComponent } from './carousel-noticias/carousel-noticias.component';

@NgModule({
  imports: [
    SharedModule,
    HomepageRoutingModule
  ],
  declarations: [HomepageComponent, CarouselNoticiasComponent],
  entryComponents: [HomepageComponent]

})
export class HomepageModule { }
