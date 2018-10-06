import { Component, OnInit } from '@angular/core';

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
    {
      nome: "PDA 1",
      rua: "Rua A",
      bairro: "Bairro 1",
      cidade: "Cidade B"
    },
    {
      nome: "PDA 2",
      rua: "Rua D",
      bairro: "Bairro 2",
      cidade: "Cidade B"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
