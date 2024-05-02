import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-pagina-registro',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './pagina-registro.component.html',
  styleUrl: './pagina-registro.component.css'
})
export class PaginaRegistroComponent {
  titulo = "Potencia tus estudios sobre la educacion sexual";
  subtitulo = "En colaboracion con la sociedad";
}
