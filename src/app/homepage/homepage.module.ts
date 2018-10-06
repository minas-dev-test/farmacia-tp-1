import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomepageRoutingModule
  ],
  declarations: [HomepageComponent],
  entryComponents: [HomepageComponent]

})
export class HomepageModule { }
