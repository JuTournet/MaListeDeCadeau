import { Component, OnInit } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, concatMap } from 'rxjs/operators';
import { ServiceCadeauxService } from '../service/service-cadeaux.service';

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
  ) {
    // this.cadeaux$ = this.service.getCadeaux();
  }

  ngOnInit() {
    this.cadeaux$ = this.route.paramMap.pipe(
      concatMap((params) => {
        return this.service.getCadeaux();
      })
    );
  }
}
