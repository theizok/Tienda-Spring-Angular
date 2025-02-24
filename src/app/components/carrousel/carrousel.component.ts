import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-carrousel',
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements OnInit {
  ngOnInit(){
    var myCarrousel = document.querySelector('#carouselExampleRide');
    if(myCarrousel){
      new bootstrap.Carousel(myCarrousel,{
        interval: 2000,
        ride: 'carousel'
      });
    }
  }
}
