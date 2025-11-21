import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DepartamentosService } from '../services/departamentos';
export interface Departamento {
  id: number;
  nombre: string;
  encargado: string;
  correo_encargado: string;
  direccion: string;
  esta_activo: boolean;
}

@Component({
  selector: 'app-departamento-listar',
  standalone: true, // Esto permite importar módulos aquí mismo
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  templateUrl: './departamento-listar.html',
  styleUrls: ['./departamento-listar.css']
})
export class DepartamentoListarComponent implements OnInit {
  
  // Las columnas que se verán en la tabla (deben coincidir con el HTML)
  displayedColumns: string[] = ['id', 'nombre', 'encargado', 'direccion', 'estado', 'acciones'];
  
  // La fuente de datos
  dataSource = new MatTableDataSource<Departamento>([]);

  // Datos falsos para el filtro de direcciones
  listaDirecciones = [
    { id: 1, nombre: 'Dirección de Obras' },
    { id: 2, nombre: 'Dirección de Tránsito' }
  ];
  // 👇 Inyectamos el servicio aquí
  constructor(private deptoService: DepartamentosService) { }

  ngOnInit(): void {
    this.cargarDatosReales();
  }

  // 👇 Esta función pide los datos a Django
  cargarDatosReales() {
    this.deptoService.getDepartamentos().subscribe({
      next: (datos) => {
        console.log('¡Éxito! Datos recibidos:', datos);
        this.dataSource.data = datos; // Aquí llenamos la tabla con datos reales
      },
      error: (err) => {
        console.error('Error conectando con Django:', err);
      }
    });
  }

  // Funciones vacías por ahora (solo para que no den error los botones)
  aplicarFiltro(valor: string, tipo: string) { console.log('Filtro:', tipo, valor); }
  crearDepartamento() { console.log('Crear'); }
  verDepartamento(id: number) { console.log('Ver', id); }
  editarDepartamento(id: number) { console.log('Editar', id); }
  toggleEstado(depto: Departamento) { depto.esta_activo = !depto.esta_activo; }
}


