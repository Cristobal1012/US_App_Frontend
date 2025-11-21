import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  // Esta es la URL que probamos recién y funcionó
  private apiUrl = 'http://localhost:8000/api/dashboard-stats/';

  constructor(private http: HttpClient) { }

  // Función para pedir los números a Django
  getStats(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
