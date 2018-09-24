import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PontosDeApoioService {

  constructor() { }

  getDataFake(){
      return "Hello world!";
  }

}