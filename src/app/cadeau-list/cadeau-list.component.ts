import { Component, OnInit } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ServiceCadeauxService } from '../service/service-cadeaux.service';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.scss']
})
export class CadeauListComponent implements OnInit {

  cadeaux$!: Observable<Cadeau[]>;

  constructor(
    private service: ServiceCadeauxService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  refreshComponent() {
    this.router.navigate([this.router.url]);
  }

  ngOnInit() {
    this.cadeaux$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.service.getCadeaux();
      })
    );
  }
}
