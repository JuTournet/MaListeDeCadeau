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

  createListe(response: string): void {
    let data: any[] = JSON.parse(response);
    for (let i = 0; i < data.length; i++) {
      this.cadeau = new Cadeau();
      this.cadeau.nom = data[i].nom;
      this.cadeau.description = data[i].description;
      this.cadeau.prix = data[i].prix;
      ListeCadeaux.push(this.cadeau);
    }
  }

  getCadeaux(): Observable<Cadeau[]> {
    return of(ListeCadeaux);
  }
}
