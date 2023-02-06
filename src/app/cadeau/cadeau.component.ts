import { Component, Input, OnInit } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';

@Component({
  selector: 'app-cadeau',
  templateUrl: './cadeau.component.html',
  styleUrls: ['./cadeau.component.scss'],
})
export class CadeauComponent implements OnInit {
  @Input('inputCadeau') cadeau!: Cadeau;
  productURL!: string;
  tag!: string[];

  ngOnInit(): void {}
  goToProduct(cadeau: Cadeau) {
    this.tag = cadeau.nom.split(' ');
    this.productURL = 'https://www.google.com/search?q=';
    for (let i = 0; i < this.tag.length; i++) {
    this.productURL += this.tag[i];
      if (i < this.tag.length - 1 ) {
        this.productURL += '+';
      }
    }
    window.open(this.productURL, '_blank');
  }
}
