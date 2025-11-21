import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  // Esta es la dirección de tu API en Django
  private apiUrl = 'http://localhost:8000/api/departamentos/';

  constructor(private http: HttpClient) { }

  // Esta función la llamará tu tabla para pedir los datos
  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
