import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Potensi } from '../../potensi.model';

@Component({
  selector: 'app-subpotensi-list',
  templateUrl: './subpotensi-list.component.html',
  styleUrls: ['./subpotensi-list.component.css']
})
export class SubpotensiListComponent implements OnInit {
  @Output() subpotensiWasSelected = new EventEmitter<Potensi>();
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

  onSubpotensiSelected(potensi: Potensi) {
    this.subpotensiWasSelected.emit(potensi);
  }
}
