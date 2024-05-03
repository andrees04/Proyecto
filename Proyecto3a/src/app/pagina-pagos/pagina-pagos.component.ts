import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pagina-pagos',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './pagina-pagos.component.html',
  styleUrl: './pagina-pagos.component.css'
})
export class PaginaPagosComponent {
  titulo = "Formulario de Pago";
  subtitulo = "En colaboracion con la sociedad";
}
