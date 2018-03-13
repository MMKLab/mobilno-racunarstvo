import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LekoviComponent } from './lekovi/lekovi.component';
import { LekoviListComponent } from './lekovi/lekovi-list/lekovi-list.component';
import { LekoviDetailComponent } from './lekovi/lekovi-detail/lekovi-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LekoviComponent,
    LekoviListComponent,
    LekoviDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
