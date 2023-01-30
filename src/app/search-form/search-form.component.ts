import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  searchForm!:FormGroup;
  isValidated = false;
  genres: any[] = ['male', 'female', 'non-declared'];

  constructor (public fb:FormBuilder) {

    this.searchForm = this.fb.group ({
      prenom: [''],
      genre: ['', [Validators.required]],
      age: [''],
      centre_interet: [''],
    })
  }

  // get genre() {
  //   return this.searchForm.get('genre');
  // }

  onChange(event: any) {
    console.log(event.value);
  }

}
