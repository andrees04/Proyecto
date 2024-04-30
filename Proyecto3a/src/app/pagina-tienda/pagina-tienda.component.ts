import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-pagina-tienda',
  standalone: true,
  imports: [EncabezadoComponent, RouterLink, RouterLinkActive],
  templateUrl: './pagina-tienda.component.html',
  styleUrl: './pagina-tienda.component.css'
})
export class PaginaTiendaComponent {
  titulo = "Pagina tienda";
  subtitulo = "Inscripciones";
}
