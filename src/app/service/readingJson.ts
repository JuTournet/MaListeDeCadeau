import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cadeau } from '../model/cadeau.model';
import listCadeaux from '../../assets/listCadeaux.json';

@Injectable({
  providedIn: 'root',
})
export class ReadingJsonFile {
  ListeCadeaux!: any;
  getCadeaux(): Observable<Cadeau[]> {
    this.ListeCadeaux  = listCadeaux;
    return of(this.ListeCadeaux);
  }
}
