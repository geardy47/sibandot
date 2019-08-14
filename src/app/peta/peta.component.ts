import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peta',
  templateUrl: './peta.component.html',
  styleUrls: ['./peta.component.css']
})
export class PetaComponent implements OnInit {
  latitude = -7.428007;
  longitude = 109.236618;
  zoom: number = 15;

onChooseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
}
  constructor() { }

  ngOnInit() {
  }

}
