import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, EncabezadoComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {
  titulo = "Potencia tus estudios sorbe la educacion sexual";
  subtitulo = "En colaboracion con la sociedad";
}
