import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-pagina-estadisticas',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './pagina-estadisticas.component.html',
  styleUrl: './pagina-estadisticas.component.css'
})
export class PaginaEstadisticasComponent {
  titulo = "Pagina estadisticas";
  subtitulo = "1234567890-"
}
