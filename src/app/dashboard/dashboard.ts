import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// 👇 Importamos el servicio que acabas de crear
import { DashboardService } from '../services/dashboard'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  
  // Aquí guardaremos los números que lleguen de Django
  stats: any = {
    total_creadas: 0,
    count_derivadas: 0,
    count_rechazadas: 0,
    count_finalizadas: 0,
    count_abiertas: 0
  };

  // Inyectamos el servicio
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.cargarEstadisticas();
  }

  cargarEstadisticas() {
    this.dashboardService.getStats().subscribe({
      next: (data) => {
        console.log('Stats recibidas de Django:', data);
        this.stats = data; // ¡Actualizamos los números!
      },
      error: (err) => {
        console.error('Error conectando con el Dashboard:', err);
      }
    });
  }
}