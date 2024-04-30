import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-pagina-pagos',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './pagina-pagos.component.html',
  styleUrl: './pagina-pagos.component.css'
})
export class PaginaPagosComponent {
  titulo = "Pagos";
  subtitulo = "";
  
}
