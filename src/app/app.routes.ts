import { Routes } from '@angular/router';
import { DepartamentoListarComponent } from './departamento-listar/departamento-listar';
import { IncidenciasComponent } from './incidencias/incidencias';
import { DashboardComponent } from './dashboard/dashboard';

export const routes: Routes = [
    // Cuando la ruta sea 'departamentos', muestra la tabla
    { path: 'dashboard', component: DashboardComponent },
    { path: 'departamentos', component: DepartamentoListarComponent },
    { path: 'incidencias', component: IncidenciasComponent },
    // Ruta por defecto
    { path: '', redirectTo: '/departamentos', pathMatch: 'full' }
];