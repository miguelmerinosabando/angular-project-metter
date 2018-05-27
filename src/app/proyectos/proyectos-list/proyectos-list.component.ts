import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../shared/proyecto.service';
import { Proyecto } from '../shared/proyecto.model';

@Component({
  selector: 'app-proyectos-list',
  templateUrl: './proyectos-list.component.html',
  styleUrls: ['./proyectos-list.component.scss']
})
export class ProyectosListComponent implements OnInit {

  proyectos: Proyecto[];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos(): void {
    this.proyectoService.getProyectos()
        .subscribe(proyectos => this.proyectos = proyectos);
  }
}
