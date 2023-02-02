import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OpenAiService } from '../open-ai.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  searchForm!:FormGroup;
  isValidated = false;
  genres: any[] = ['Masculin', 'Féminin', 'Ne se prononce pas'];

  constructor (public fb:FormBuilder, private service:OpenAiService) {

    this.searchForm = this.fb.group ({
      prenom: [''],
      genre: ['', [Validators.required]],
      age: [''],
      centre_interet: [''],
    })
  }

  onChange(event: any) {
    console.log(event.value);
  }

  onSubmit(): void {
    const prenom = this.searchForm.get('prenom')?.value;
    let genre = this.searchForm.get('genre')?.value;
    if(genre === "Ne se prononce pas") {
      genre = "mixte";
    }
    const age = this.searchForm.get('age')?.value;
    const centreInteret = this.searchForm.get('centre_interet')?.value;
    const requete = prenom + " , " + age + " ans" + " qui aime : " + centreInteret;
    let response:string = this.service.getDataFromOpenAI(requete);
  }

}
