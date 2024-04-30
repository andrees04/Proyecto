import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, EncabezadoComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

  mostrarFondo: boolean = false;

  titulo = "Potencia tus estudios sorbe la educacion sexual";
  subtitulo = "En colaboracion con la sociedad";

  aplicarFiltro(hover: boolean) {
    const img = document.querySelector('.card-img-top') as HTMLElement;
    img.style.filter = hover ? 'brightness(70%)' : 'none';
  }
}
