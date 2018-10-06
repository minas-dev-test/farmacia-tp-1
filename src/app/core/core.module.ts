import { SharedModule } from './../shared/shared.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    NavbarModule,
  ],
  exports: [
    BrowserAnimationsModule,
  ],
  declarations: [NotFoundComponent]
})
export class CoreModule { 
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
