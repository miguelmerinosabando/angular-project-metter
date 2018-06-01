import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
//Importamos MDBootstrap 
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
//Importamos componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectosEditComponent } from './proyectos/proyectos-edit/proyectos-edit.component';
import { ProyectosListComponent } from './proyectos/proyectos-list/proyectos-list.component';
import { ProyectoService } from './proyectos/shared/proyecto.service';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosComponent } from './empleados/empleados.component';
import { TareasComponent } from './tareas/tareas.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { ProyectoDetailComponent } from './proyectos/proyecto-detail/proyecto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProyectosComponent,
    ProyectosEditComponent,
    ProyectosListComponent,
    EmpleadosComponent,
    TareasComponent,
    IncidenciasComponent,
    ProyectoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ ProyectoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
