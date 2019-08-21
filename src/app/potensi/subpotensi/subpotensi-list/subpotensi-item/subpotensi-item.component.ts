import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Potensi } from 'src/app/potensi/potensi.model';

@Component({
  selector: 'app-subpotensi-item',
  templateUrl: './subpotensi-item.component.html',
  styleUrls: ['./subpotensi-item.component.css']
})
export class SubpotensiItemComponent implements OnInit {
  @Input() potensi: Potensi;
  @Output() subpotensiSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onSelected() {
    this.subpotensiSelected.emit();
  }
}
