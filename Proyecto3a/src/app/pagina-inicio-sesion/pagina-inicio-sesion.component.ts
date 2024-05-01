import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pagina-inicio-sesion',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './pagina-inicio-sesion.component.html',
  styleUrl: './pagina-inicio-sesion.component.css'
})
export class PaginaInicioSesionComponent {
  titulo = "Potencia tus estudios sobre la educacion sexual";
  subtitulo = "En colaboracion con la sociedad";
}
