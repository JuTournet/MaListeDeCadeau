import { Injectable } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';
import { Observable, of } from 'rxjs';
import { ListeCadeaux } from '../model/listeCadeaux.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceCadeauxService {
  listeCadeaux!: Cadeau[];
  cadeau!: Cadeau;

  addToListe(data: Cadeau, image_url: string, index: number): void {
      this.cadeau = new Cadeau();
      this.cadeau.nom = data.nom;
      this.cadeau.description = data.description;
      this.cadeau.prix = data.prix;
      this.cadeau.imgURL = image_url;
      ListeCadeaux[index] = this.cadeau;
  }

  getCadeaux(): Observable<Cadeau[]> {
    return of(ListeCadeaux);
  }
}
