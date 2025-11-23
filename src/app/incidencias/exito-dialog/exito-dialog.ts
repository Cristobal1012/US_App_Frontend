import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-exito-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './exito-dialog.html',
  styleUrl: './exito-dialog.css'
})
export class ExitoDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ExitoDialogComponent>,
    private router: Router
  ) {}

  cerrar() {
    this.dialogRef.close(); 
  }

  volverAlMenu() {
    this.dialogRef.close();
    this.router.navigate(['/dashboard']); 
  }
}