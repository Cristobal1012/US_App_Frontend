import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {
  // Tu URL de Django
  private apiUrl = 'http://localhost:8000/api/incidencias/';

  constructor(private http: HttpClient) { }

  getIncidencias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
