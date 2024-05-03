import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pagina-estadisticas',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './pagina-estadisticas.component.html',
  styleUrl: './pagina-estadisticas.component.css'
})
export class PaginaEstadisticasComponent {
  titulo = "Pagina estadisticas";
  subtitulo = "Estadisticas"
}
