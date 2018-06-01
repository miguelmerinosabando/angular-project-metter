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
  private proyectosUrl = 'http://10.211.55.4:55264/api/Proyectoes'; // URL API Proyectos

  constructor( private http: HttpClient ) { }

  //GET Proyectos
  getProyectos (): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.proyectosUrl);
  }

  getProyecto(id: number): Observable<Proyecto> {
    const url = `${this.proyectosUrl}/${id}`;
    return this.http.get<Proyecto>(url);
  }

  deleteProyecto (proyecto: Proyecto | number): Observable<Proyecto> {
    const id = typeof proyecto === 'number' ? proyecto : proyecto.proyectoId;
    const url = `${this.proyectosUrl}/${id}`;
    return this.http.delete<Proyecto>(url, httpOptions);
  }
}
