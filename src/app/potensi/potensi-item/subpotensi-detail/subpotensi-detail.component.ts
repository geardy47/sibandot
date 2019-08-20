import { Component, OnInit, Input } from '@angular/core';
import { Potensi } from 'src/app/potensi/potensi.model';

@Component({
  selector: 'app-subpotensi-detail',
  templateUrl: './subpotensi-detail.component.html',
  styleUrls: ['./subpotensi-detail.component.css']
})
export class SubpotensiDetailComponent implements OnInit {
  @Input() potensi: Potensi;
  latitude = -7.428007;
  longitude = 109.236618;
  zoom = 15;

  onChooseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
  constructor() {}

  ngOnInit() {}
}
