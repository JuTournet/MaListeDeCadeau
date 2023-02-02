import { Injectable } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCadeauxService {
  listeCadeaux!:any;

  createListe(response:string) : void {
    this.listeCadeaux = JSON.parse("[" + response + "]");
    console.log(this.listeCadeaux);
  }

  getCadeaux(): Observable<Cadeau[]> {
    return of(this.listeCadeaux);
  }
}
