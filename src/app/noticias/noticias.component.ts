import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias = [
  {
    titulo: 'Titulo da noticia 1',
    resumo: 'resumo noticia 1 ...',
    corpo: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    titulo: 'Titulo da noticia 2',
    resumo: 'resumo noticia 2 ...',
    corpo: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  }
]

  constructor() { }

  ngOnInit() {
    console.log('noticias');
  }

}
