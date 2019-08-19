import { Potensi } from './../../../potensi.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subpotensi-item',
  templateUrl: './subpotensi-item.component.html',
  styleUrls: ['./subpotensi-item.component.css']
})
export class SubpotensiItemComponent implements OnInit {
  potensi: Potensi[] = [
    new Potensi(
      'SD Negeri 4 Kranji',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis euismod neque. In hac habitasse platea dictumst.',
      '(0281) 987654',
      'localhost:4200',
      '',
      '../../../../../assets/img/potensi-item/sdkranji4.jpg'
    ),
    new Potensi(
      'SD Negeri 4 Kranji',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis euismod neque. In hac habitasse platea dictumst.',
      '(0281) 987654',
      'localhost:4200',
      '',
      '../../../../../assets/img/potensi-item/sdkranji4.jpg'
    ),
    new Potensi(
      'SD Negeri 4 Kranji',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis euismod neque. In hac habitasse platea dictumst.',
      '(0281) 987654',
      'localhost:4200',
      '',
      '../../../../../assets/img/potensi-item/sdkranji4.jpg'
    ),
    new Potensi(
      'SD Negeri 4 Kranji',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis euismod neque. In hac habitasse platea dictumst.',
      '(0281) 987654',
      'localhost:4200',
      '',
      '../../../../../assets/img/potensi-item/sdkranji4.jpg'
    ),
    new Potensi(
      'SD Negeri 4 Kranji',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis euismod neque. In hac habitasse platea dictumst.',
      '(0281) 987654',
      'localhost:4200',
      '',
      '../../../../../assets/img/potensi-item/sdkranji4.jpg'
    ),
    new Potensi(
      'SD Negeri 4 Kranji',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis euismod neque. In hac habitasse platea dictumst.',
      '(0281) 987654',
      'localhost:4200',
      '',
      '../../../../../assets/img/potensi-item/sdkranji4.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
