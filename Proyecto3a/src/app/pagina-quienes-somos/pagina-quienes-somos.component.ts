import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pagina-quienes-somos',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './pagina-quienes-somos.component.html',
  styleUrl: './pagina-quienes-somos.component.css'
})
export class PaginaQuienesSomosComponent {
  titulo = "Quienes somos?";
  subtitulo = "En colaboracion con la sociedad";

}
