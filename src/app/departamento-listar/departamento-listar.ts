import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { DepartamentosService } from '../services/departamentos';

export interface Departamento {
  id: number;
  nombre: string;
  encargado_nombre: string;
  correo_encargado: string;
  direccion_nombre: string; 
  esta_activo: boolean;
}

@Component({
  selector: 'app-departamento-listar',
  standalone: true,
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
  
  displayedColumns: string[] = ['id', 'nombre', 'encargado', 'direccion', 'estado', 'acciones'];
  
  dataSource = new MatTableDataSource<Departamento>([]);
  filtroValores = {
    estado: '',
    direccion: ''
  };

  listaDirecciones = [
    { id: 1, nombre: 'Dirección de Obras' },
    { id: 2, nombre: 'Dirección de Tránsito' },
  ];

  constructor(
    private deptoService: DepartamentosService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.cargarDatosReales();
    this.configurarFiltros();
  }

  cargarDatosReales() {
    this.deptoService.getDepartamentos().subscribe({
      next: (datos) => {
        console.log('¡Éxito! Datos recibidos:', datos);
        this.dataSource.data = datos;
      },
      error: (err) => {
        console.error('Error conectando con Django:', err);
      }
    });
  }

  configurarFiltros() {
    this.dataSource.filterPredicate = (data: Departamento, filter: string) => {
      const searchTerms = JSON.parse(filter);
      const coincideEstado = searchTerms.estado ? String(data.esta_activo) === searchTerms.estado : true;
      const coincideDireccion = searchTerms.direccion ? data.direccion_nombre === searchTerms.direccion : true;

      return coincideEstado && coincideDireccion;
    };
  }

  aplicarFiltro(valor: string, tipo: string) {
    if (tipo === 'estado') {
      this.filtroValores.estado = valor;
    } else if (tipo === 'direccion') {
      this.filtroValores.direccion = valor;
    }

    this.dataSource.filter = JSON.stringify(this.filtroValores);
    console.log('Filtros aplicados:', this.filtroValores);
  }

  crearDepartamento() { 
    this.router.navigate(['/departamentos/crear']);
  }

  verDepartamento(id: number) { 
    this.router.navigate(['/departamentos/ver', id]);
  }

  editarDepartamento(id: number) { 
    this.router.navigate(['/departamentos/editar', id]);
  }

  toggleEstado(depto: Departamento) {
    const nuevoEstado = !depto.esta_activo;

    this.deptoService.actualizarEstado(depto.id, nuevoEstado).subscribe({
      next: (respuesta) => {
        depto.esta_activo = nuevoEstado;
        console.log(`Departamento ${depto.nombre} actualizado a: ${nuevoEstado}`);
        
        const filtrosActuales = this.dataSource.filter;
        this.dataSource.filter = ''; 
        this.dataSource.filter = filtrosActuales;
      },
      error: (error) => {
        console.error('No se pudo actualizar el estado:', error);
        alert('Hubo un error al intentar cambiar el estado.');
      }
    });
  }
}

