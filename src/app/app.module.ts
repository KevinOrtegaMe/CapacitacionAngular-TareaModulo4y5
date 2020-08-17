import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { RouterModule } from '@angular/router';
import { ComponentePadreHijoComponent } from './componente-padre-hijo/componente-padre-hijo.component';
import { PracticaRealizadaComponent } from './practica-realizada/practica-realizada.component';
import { DificultadesTareaComponent } from './dificultades-tarea/dificultades-tarea.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    DatabindingComponent,
    ComponentePadreHijoComponent,
    PracticaRealizadaComponent,
    DificultadesTareaComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
