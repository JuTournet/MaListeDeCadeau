import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadeauListComponent } from './cadeau-list/cadeau-list.component';
import { CadeauComponent } from './cadeau/cadeau.component';

@NgModule({
  declarations: [
    AppComponent,
    CadeauListComponent,
    CadeauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
