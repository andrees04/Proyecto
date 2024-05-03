import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pagina-contacto',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './pagina-contacto.component.html',
  styleUrl: './pagina-contacto.component.css'
})
export class PaginaContactoComponent {
  titulo = "Contactanos";
  subtitulo = "En colaboracion con la sociedad";
}


