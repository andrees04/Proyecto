import { Routes } from '@angular/router';
import { PaginaAsumimosRiesgosComponent } from './pagina-asumimos-riesgos/pagina-asumimos-riesgos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaEstadisticasComponent } from './pagina-estadisticas/pagina-estadisticas.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: '/pagina-principal', pathMatch: 'full' },

    { path: 'pagina-principal', title:"Home", component: PaginaPrincipalComponent },

    { path: 'pagina-asumimos-riesgos', component: PaginaAsumimosRiesgosComponent },
    
    { path: 'pagina-estadisticas', component: PaginaEstadisticasComponent },

];
