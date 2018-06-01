import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../shared/proyecto.model';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProyectoService } from '../shared/proyecto.service';

@Component({
  selector: 'app-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  styleUrls: ['./proyecto-detail.component.scss']
})
export class ProyectoDetailComponent implements OnInit {

  @Input() proyecto: Proyecto;
  
  constructor(private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    private location: Location) { }

  ngOnInit() {
    this.getProyecto();
  }

  getProyecto(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.proyectoService.getProyecto(id)
          .subscribe(proyecto => this.proyecto = proyecto);
  }

}
