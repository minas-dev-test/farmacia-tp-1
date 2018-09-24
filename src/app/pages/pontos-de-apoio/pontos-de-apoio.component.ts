import { Component, OnInit, ViewChild } from '@angular/core';
import { PontosDeApoioService } from './pontos-de-apoio.service';


@Component({
  selector: 'app-pontos-de-apoio',
  templateUrl: './pontos-de-apoio.component.html',
  styleUrls: ['./pontos-de-apoio.component.css']
})
export class PontosDeApoioComponent implements OnInit {


  constructor(private pontosDeApoioService:PontosDeApoioService) { }

  ngOnInit() {
    console.log(`chamando funcao: `,this.pontosDeApoioService.getDataFake());
  }

}
