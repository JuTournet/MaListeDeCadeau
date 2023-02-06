import { Component, Input, OnInit } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { ServiceCadeauxService } from '../service/service-cadeaux.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { ReadingJsonFile } from '../service/readingJson';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.scss'],
})
export class CadeauListComponent implements OnInit {
  cadeaux$!: Observable<Cadeau[]>;
  montant:number = 500;
  filtre!:FormGroup;

  constructor(
    private service: ServiceCadeauxService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.filtre = this.fb.group({
      myRange: ['']
    })
  }

  ngOnInit() {
    this.cadeaux$ = this.route.paramMap.pipe(
      concatMap((params) => {
        return this.service.getCadeaux();
      })
    );

    let slider = document.getElementById("myRange") as HTMLFormElement;
    let output = document.getElementById("demo") as HTMLFormElement;

    output.innerHTML = slider['value'];

    slider.oninput = function() {
      output.innerHTML = slider['value'];
    }
  }

  onSubmit() : void {
    let output = document.getElementById("demo") as HTMLFormElement;
    this.montant = Number(output.innerHTML);
  }

}
