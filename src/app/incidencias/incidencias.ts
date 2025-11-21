import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { IncidenciasService } from '../services/incidencias';

export interface Incidencia {
  id: number;
  tipo_nombre: string;         // Coincide con tu JSON
  direccion_nombre: string;    // Coincide con tu JSON
  departamento_nombre: string; // Coincide con tu JSON
  estado: string;
}

@Component({
  selector: 'app-incidencias',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './incidencias.html',
  styleUrl: './incidencias.css'
})
export class IncidenciasComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'tipo', 'direccion', 'departamento', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Incidencia>([]);

  constructor(private incidenciasService: IncidenciasService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.incidenciasService.getIncidencias().subscribe({
      next: (datos) => {
        console.log('Datos recibidos:', datos);
        this.dataSource.data = datos;
      },
      error: (e) => console.error('Error conectando:', e)
    });
  }

  getColorEstado(estado: string): string {
    const estadoNormalizado = estado ? estado.toLowerCase() : '';
    switch (estadoNormalizado) {
      case 'derivada': return 'badge-blue';
      case 'abierta': return 'badge-green';
      case 'finalizada': return 'badge-gray';
      case 'proceso': return 'badge-yellow';
      default: return 'badge-gray';
    }
  }
}
