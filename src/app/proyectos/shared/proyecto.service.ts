import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Proyecto } from './proyecto.model'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private proyectosUrl = 'http://localhost:55264/api/Proyectoes'; // URL API Proyectos

  constructor( private http: HttpClient ) { }

  //GET Proyectos
  getProyectos (): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.proyectosUrl);
  }
}
