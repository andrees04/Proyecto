import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';


@Component({
  selector: 'app-pagina-asumimos-riesgos',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './pagina-asumimos-riesgos.component.html',
  styleUrl: './pagina-asumimos-riesgos.component.css'
})
export class PaginaAsumimosRiesgosComponent {
  titulo = "Pagina riesgos";
  subtitulo = "qwertyuiop";
}
