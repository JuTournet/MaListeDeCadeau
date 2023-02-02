import { Component, OnInit } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';
import listCadeaux from '../../assets/listCadeaux.json';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ReadingJsonFile } from '../service/readingJson';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.scss']
})
export class CadeauListComponent implements OnInit {
  cadeaux$!: Observable<Cadeau[]>;
  constructor(
    private service: ReadingJsonFile,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cadeaux$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.service.getCadeaux();
      })
    );
  }

}
