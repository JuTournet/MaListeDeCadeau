import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CadeauListComponent } from './cadeau-list/cadeau-list.component';
import { CadeauComponent } from './cadeau/cadeau.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    CadeauListComponent,
    CadeauComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
