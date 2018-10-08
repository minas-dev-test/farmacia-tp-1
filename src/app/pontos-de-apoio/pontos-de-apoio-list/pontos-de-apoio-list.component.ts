import { Pda } from './../../core/models/pda.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { PontosDeApoioFormComponent } from '../pontos-de-apoio-form/pontos-de-apoio-form.component';

@Component({
  selector: 'app-pontos-de-apoio-list',
  templateUrl: './pontos-de-apoio-list.component.html',
  styleUrls: ['./pontos-de-apoio-list.component.css']
})
export class PontosDeApoioListComponent implements OnInit {

  settings = {
    columns: {
      nome: {
        title: 'Nome'
      },
      rua: {
        title: 'Rua'
      },
      bairro: {
        title: 'Bairro'
      },
      cidade: {
        title: 'Cidade'
      },
    }
  };

  data = [
    new Pda("pda 1", "rua a", "bairro b", "cidade c"),
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    console.log('openDialog');


    this.dialog.open(PontosDeApoioFormComponent, dialogConfig);
}

}
