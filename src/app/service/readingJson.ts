import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cadeau } from '../model/cadeau.model';
import listCadeaux from '../../assets/listCadeaux.json';

@Injectable({
  providedIn: 'root',
})
export class ReadingJsonFile {
  ListeCadeaux: any = listCadeaux;
  getCadeaux(): Observable<Cadeau[]> {
    return of(this.ListeCadeaux);
  }
}
