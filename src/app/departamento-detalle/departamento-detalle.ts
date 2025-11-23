import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 👈 1. Importamos ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IncidenciasService } from '../services/incidencias'; 
import { MatIconModule } from '@angular/material/icon';

interface IncidenciaDetalle {
    id: number;
    tipo_nombre: string;
    descripcion: string;
    direccion_textual: string;
    direccion_nombre: string;
    departamento_nombre: string;
    estado: string;
}

@Component({
    selector: 'app-departamento-detalle',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule,MatIconModule],
    templateUrl: './departamento-detalle.html',
    styleUrls: ['./departamento-detalle.css']
})
export class DepartamentoDetalleComponent implements OnInit {

    incidenciaId!: number;
    incidencia: IncidenciaDetalle | null = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private incidenciaService: IncidenciasService,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.incidenciaId = +params['id'];
            this.cargarDetalle(this.incidenciaId);
        });
    }

    cargarDetalle(id: number): void {
        this.incidenciaService.getIncidenciaById(id).subscribe({
            next: (data: any) => { 
                console.log('Datos llegaron, actualizando vista...', data);
                this.incidencia = data; 
                
                this.cd.detectChanges(); 
            },
            error: (err: any) => { 
                console.error('Error al cargar detalle:', err);
                this.router.navigate(['/incidencias']);
            }
        });
    }
    
    volver(): void {
        this.router.navigate(['/incidencias']);
    }
    getColorEstado(estado: string | undefined): string {
        if (!estado) return 'badge-gray';
        const estadoNormalizado = estado.toLowerCase();
        
        switch (estadoNormalizado) {
            case 'derivada': return 'badge-blue';
            case 'abierta': return 'badge-green';
            case 'finalizada': return 'badge-gray';
            case 'proceso': return 'badge-yellow';
            default: return 'badge-gray';
        }
    }
}
