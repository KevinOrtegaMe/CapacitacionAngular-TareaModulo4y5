import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { NavegacionComponent } from './navegacion/navegacion.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ComponentePadreHijoComponent } from './componente-padre-hijo/componente-padre-hijo.component';
import { PracticaRealizadaComponent } from './practica-realizada/practica-realizada.component';
import { combineLatest } from 'rxjs';
import { DificultadesTareaComponent } from './dificultades-tarea/dificultades-tarea.component';
import { HomeComponent } from './home/home.component';

const rutas: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'navegacion', 
    component: NavegacionComponent
  },
  {
    path: 'databinding',
    component: DatabindingComponent
  },
  {
    path:'componentePadreHijo',
    component: ComponentePadreHijoComponent
  },
  {
    path:'practicaRealizada',
    component: PracticaRealizadaComponent
  },
  {
    path:'dificultadesTarea',
    component: DificultadesTareaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(rutas, {
    useHash: true, /* usa # en ves de / -- rutas en server*/
    enableTracing: true, /*se realiza un mejor debugging  */
    paramsInheritanceStrategy: 'always' /* ruta hija hereda datos de la padre */
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
