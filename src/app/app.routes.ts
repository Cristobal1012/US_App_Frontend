import { Routes } from '@angular/router';
import { DepartamentoListarComponent } from './departamento-listar/departamento-listar';
import { IncidenciasComponent } from './incidencias/incidencias';
import { DashboardComponent } from './dashboard/dashboard';
import { DepartamentoDetalleComponent } from './departamento-detalle/departamento-detalle';
import { DepartamentoEditar } from './departamento-editar/departamento-editar';
import { DepartamentoCrear } from './departamento-crear/departamento-crear';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'departamentos', component: DepartamentoListarComponent },
    { path: 'departamentos/crear', component: DepartamentoCrear },
    { path: 'departamentos/ver/:id', component: DepartamentoDetalleComponent },
    { path: 'departamentos/editar/:id', component: DepartamentoEditar },
    { path: 'incidencias', component: IncidenciasComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];