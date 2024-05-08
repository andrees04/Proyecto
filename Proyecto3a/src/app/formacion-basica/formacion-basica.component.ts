import { Component } from '@angular/core';
import { EncabezadoComponent } from '../component/encabezado/encabezado.component';
import { FooterComponent } from '../component/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formacion-basica',
  standalone: true,
  imports: [EncabezadoComponent,FooterComponent,RouterLink],
  templateUrl: './formacion-basica.component.html',
  styleUrl: './formacion-basica.component.css'
})
export class FormacionBasicaComponent {
  titulo = "Inscripciones ";
  subtitulo = "En colaboración con la sociedad";
}
