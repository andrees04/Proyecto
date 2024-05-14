import { Component } from '@angular/core';
import { EncabezadoComponent } from '../component/encabezado/encabezado.component';
import { FooterComponent } from '../component/footer/footer.component';


@Component({
  selector: 'app-pagina-estadisticas',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './pagina-estadisticas.component.html',
  styleUrl: './pagina-estadisticas.component.css'
})
export class PaginaEstadisticasComponent {
  titulo = "Estadísticas";
  subtitulo = "En colaboracion con la sociedad";


}
