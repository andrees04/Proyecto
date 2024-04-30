import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-pagina-tienda',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './pagina-tienda.component.html',
  styleUrl: './pagina-tienda.component.css'
})
export class PaginaTiendaComponent {
  titulo = "Pagina tienda";
  subtitulo = "Inscripciones";
}
