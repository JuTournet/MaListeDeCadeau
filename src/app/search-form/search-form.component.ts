import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OpenAiService } from '../service/open-ai.service';
import { ServiceCadeauxService } from '../service/service-cadeaux.service';
import { isValidated } from '../model/listeCadeaux.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  searchForm!: FormGroup;
  genres: any[] = ['Masculin', 'Féminin', 'Ne se prononce pas'];
  isValidated = isValidated;

  constructor(
    public fb: FormBuilder,
    private service: OpenAiService,
    private serviceCad: ServiceCadeauxService,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      prenom: [''],
      genre: ['', [Validators.required]],
      age: [''],
      centre_interet: [''],
    });
  }

  onChange(event: any) {}

  onSubmit(): void {
    isValidated[0] = true;
    const prenom = this.searchForm.get('prenom')?.value;
    const age = this.searchForm.get('age')?.value;
    const centreInteret = this.searchForm.get('centre_interet')?.value;
    let genre = this.searchForm.get('genre')?.value;
    let requete = '';
    if (genre === 'Ne se prononce pas') {
      requete =
        prenom + ' , ' + age + ' ans qui aime : ' + centreInteret;
    } else {
       requete =
        prenom + ' , ' + age + ' ans, de sexe ' + genre + ' qui aime : ' + centreInteret;
    }
    this.service.getDataFromOpenAI(requete);
  }
}
