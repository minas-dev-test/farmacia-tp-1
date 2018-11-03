import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel-noticias',
  templateUrl: './carousel-noticias.component.html',
  styleUrls: ['./carousel-noticias.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CarouselNoticiasComponent implements OnInit {

  selectedIndex: number;
  transform: number;
  counter: number;

  constructor() {
    this.selectedIndex = 0;
    this.transform = 100;
    this.counter = 0;
  }

  sliderArray = [
    {img: 'https://images.pexels.com/photos/988872/pexels-photo-988872.jpeg?auto=compress', alt: '', text: 'Noticia 1'},
    {img: 'https://images.pexels.com/photos/218983/pexels-photo-218983.jpeg?auto=compress', alt: '',  text: 'Noticia 2'},
    {img: 'https://images.pexels.com/photos/988872/pexels-photo-988872.jpeg?auto=compress', alt: '', text: 'Noticia 3'},
    {img: 'https://images.pexels.com/photos/218983/pexels-photo-218983.jpeg?auto=compress', alt: '',  text: 'Noticia 4'},
    {img: 'https://images.pexels.com/photos/988872/pexels-photo-988872.jpeg?auto=compress', alt: '', text: 'Noticia 5'}
  ];

  ngOnInit() {
    this.sliderAutorun();
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;

   }

   keySelected(x) {
     this.downSelected(x);
     this.selectedIndex = x;
   }
   downSelected(i) {
    this.transform =  100 - (i) * 40;
      this.selectedIndex = this.selectedIndex + 1;
      if(this.selectedIndex > this.sliderArray.length-1) {
        this.selectedIndex = 0;
      }
   }

   sliderAutorun() {
    this.keySelected(this.counter);
    this.counter = this.counter + 1;
    if (this.counter > this.sliderArray.length-1) {
      this.counter = 0;
    }
    setTimeout(() => { this.sliderAutorun(); }, 2000);
  }

}
