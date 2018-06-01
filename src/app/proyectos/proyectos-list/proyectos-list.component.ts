import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../shared/proyecto.service';
import { Proyecto } from '../shared/proyecto.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-proyectos-list',
  templateUrl: './proyectos-list.component.html',
  styleUrls: ['./proyectos-list.component.scss']
})
export class ProyectosListComponent implements OnInit {

  proyectos: Proyecto[];

  constructor(private proyectoService: ProyectoService,private location: Location) { }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos(): void {
    this.proyectoService.getProyectos()
      .subscribe(proyectos => this.proyectos = proyectos);
  }

  delete(proyecto: Proyecto): void {
    this.proyectos = this.proyectos.filter(p => p !== proyecto);
    this.proyectoService.deleteProyecto(proyecto).subscribe();
  }
  

}
