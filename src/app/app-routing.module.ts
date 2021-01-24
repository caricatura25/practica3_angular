import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimacionesComponent } from './componente/animaciones/animaciones.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { Page404Component } from './componente/page404/page404.component';

const routes: Routes = [
  {path: '',component:NavbarComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'animaciones', component:AnimacionesComponent},
  {path: '**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
