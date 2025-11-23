import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IncidenciasService {
  
  private apiUrl = 'http://localhost:8000/api/incidencias/';
  private apiCuadrillas = 'http://localhost:8000/api/cuadrillas/'; 

  constructor(private http: HttpClient) { }

  getIncidencias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCuadrillas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiCuadrillas);
  }

  derivarIncidencia(incidenciaId: number, cuadrillaId: number): Observable<any> {
    const datos = {
      cuadrilla: cuadrillaId, 
      estado: 'derivada'      
    };

    return this.http.patch(`${this.apiUrl}${incidenciaId}/`, datos);
  }
  getIncidenciaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }
}