import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subpotensi-detail',
  templateUrl: './subpotensi-detail.component.html',
  styleUrls: ['./subpotensi-detail.component.css']
})
export class SubpotensiDetailComponent implements OnInit {
  latitude = -7.428007;
  longitude = 109.236618;
  zoom: number = 15;

  onChooseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
  constructor() { }

  ngOnInit() {
  }

}
