import { Component, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-not-found',
  template: `
    <div>
      <h1 class="mat-display-4">OOPS!</h1>
      <h2 class="mat-headline">Error 404, page not found!</h2>
      <a routerLink="" mat-raised-button color="warn">Back to home</a>
    </div>
  `,
  styles: []
})
export class NotFoundComponent implements OnDestroy {

  constructor(
    
  ) { }

  ngOnDestroy(): void {
    
  }

}