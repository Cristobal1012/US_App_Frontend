import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { IncidenciasService } from '../../services/incidencias';

@Component({
  selector: 'app-derivar-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatSelectModule, MatFormFieldModule, FormsModule],
  templateUrl: './derivar-dialog.html',
  styleUrl: './derivar-dialog.css' 
})
export class DerivarDialogComponent implements OnInit {
  
  cuadrillas: any[] = [];
  cuadrillaSeleccionada: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<DerivarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private incidenciaService: IncidenciasService
  ) {}

  ngOnInit(): void {
    this.incidenciaService.getCuadrillas().subscribe({
      next: (data: any) => {
        this.cuadrillas = data;
      },
      error: (e) => console.error('Error cargando cuadrillas:', e)
    });
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  confirmar(): void {
    if (this.cuadrillaSeleccionada) {
      this.dialogRef.close(this.cuadrillaSeleccionada);
    }
  }
}
