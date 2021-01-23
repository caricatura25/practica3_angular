import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { Page404Component } from './componente/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
