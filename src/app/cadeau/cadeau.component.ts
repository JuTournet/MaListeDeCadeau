import { Component, Input, OnInit } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';

@Component({
  selector: 'app-cadeau',
  templateUrl: './cadeau.component.html',
  styleUrls: ['./cadeau.component.scss'],
})
export class CadeauComponent implements OnInit {
  @Input('inputCadeau') cadeau!: Cadeau;

  ngOnInit(): void {}
  goToProduct(cadeau: Cadeau) {}
}
