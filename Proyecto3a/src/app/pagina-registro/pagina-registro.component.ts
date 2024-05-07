import { Component } from '@angular/core';
import { EncabezadoComponent } from '../component/encabezado/encabezado.component';
import { FooterComponent } from '../component/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-registro',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent, RouterLink],
  templateUrl: './pagina-registro.component.html',
  styleUrl: './pagina-registro.component.css'
})
export class PaginaRegistroComponent {
  titulo = "Potencia tus estudios sobre la educacion sexual";
  subtitulo = "En colaboracion con la sociedad";
}
