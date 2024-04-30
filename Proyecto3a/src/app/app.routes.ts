import { Routes } from '@angular/router';
import { PaginaAsumimosRiesgosComponent } from './pagina-asumimos-riesgos/pagina-asumimos-riesgos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaEstadisticasComponent } from './pagina-estadisticas/pagina-estadisticas.component';
import { PaginaTiendaComponent } from './pagina-tienda/pagina-tienda.component';
import { PaginaPagosComponent } from './pagina-pagos/pagina-pagos.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [

    { path: '',   redirectTo: '/pagina-principal', pathMatch: 'full' },

    { path: 'pagina-principal', title:"Home", component: PaginaPrincipalComponent },

    { path: 'pagina-asumimos-riesgos', component: PaginaAsumimosRiesgosComponent },
    
    { path: 'pagina-estadisticas', component: PaginaEstadisticasComponent },

    { path: 'pagina-tienda', component: PaginaTiendaComponent },
    
    { path: 'pagina-pagos', component: PaginaPagosComponent },

];
