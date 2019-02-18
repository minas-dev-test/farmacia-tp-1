import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  template: `
    <h2 mat-dialog-title>{{this.data.noticia.titulo}}</h2>
    <div mat-dialog-content>
        <p>{{this.data.noticia.corpo}}</p>
    </div>
  `
})
export class NoticiaDialogComponent implements OnInit{



  constructor(
     @Inject(MAT_DIALOG_DATA) public data : any
  ) {}

    ngOnInit() {
        //console.log(this.data);
    }
}