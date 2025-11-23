import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private apiUrl = 'http://localhost:8000/api/departamentos/';

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  actualizarEstado(id: number, estaActivo: boolean): Observable<any> {
    return this.http.patch(`${this.apiUrl}${id}/`, { esta_activo: estaActivo });
  }
}
