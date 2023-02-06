import { Component, OnInit } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { ServiceCadeauxService } from '../service/service-cadeaux.service';
// import { ReadingJsonFile } from '../service/readingJson';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.scss'],
})
export class CadeauListComponent implements OnInit {
  cadeaux$!: Observable<Cadeau[]>;

  constructor(
    private service: ServiceCadeauxService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cadeaux$ = this.route.paramMap.pipe(
      concatMap((params) => {
        return this.service.getCadeaux();
      })
    );
  }
}
