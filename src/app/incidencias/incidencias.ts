import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { IncidenciasService } from '../services/incidencias';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DerivarDialogComponent } from './derivar-dialog/derivar-dialog';
import { Router } from '@angular/router';
import { ExitoDialogComponent } from './exito-dialog/exito-dialog';

export interface Incidencia {
  id: number;
  tipo_nombre: string;
  direccion_nombre: string;
  departamento_nombre: string;
  estado: string;
}

@Component({
  selector: 'app-incidencias',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './incidencias.html', 
  styleUrl: './incidencias.css' 
})
export class IncidenciasComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'tipo', 'direccion', 'departamento', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Incidencia>([]);

  constructor(
    private incidenciasService: IncidenciasService,
    private dialog: MatDialog,
    private router: Router
  ) {}

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

  verDetalle(id: number) {
    this.router.navigate(['/departamentos/ver', id]); 
  }

  abrirDerivacion(incidencia: Incidencia) {
    const dialogRef = this.dialog.open(DerivarDialogComponent, {
      width: '400px',
      data: incidencia 
    });

    dialogRef.afterClosed().subscribe(cuadrillaId => {
      if (cuadrillaId) {
        this.procesarDerivacion(incidencia, cuadrillaId);
      }
    });
  }

  procesarDerivacion(incidencia: Incidencia, cuadrillaId: number) {
    this.incidenciasService.derivarIncidencia(incidencia.id, cuadrillaId).subscribe({
      next: (res) => {
        console.log('¡Derivada con éxito!', res);       
        this.dialog.open(ExitoDialogComponent, {
          width: '350px',
          disableClose: true 
        });

        incidencia.estado = 'derivada'; 
        this.cargarDatos(); 
      },
      error: (err) => {
        console.error('Error al derivar:', err);
        alert('Hubo un error al intentar derivar la incidencia.');
      }
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