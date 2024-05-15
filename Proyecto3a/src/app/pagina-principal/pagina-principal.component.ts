import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../component/footer/footer.component';
import { EncabezadoComponent } from '../component/encabezado/encabezado.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartasFooterComponent } from '../component/cartas-footer/cartas-footer.component';
import { ApiService } from '../servicio/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, EncabezadoComponent, RouterLink, RouterLinkActive, CommonModule, CartasFooterComponent, HttpClientModule],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

  

  mostrarFondo: boolean = false;

  titulo = "Potencia tus estudios sobre la educacion sexual";
  subtitulo = "En colaboracion con la sociedad";

  aplicarFiltro(hover: boolean) {
    const img = document.querySelector('.card-img-top') as HTMLElement;
    img.style.filter = hover ? 'brightness(70%)' : 'none';
  }


  data: any[] = [];

  constructor(private apiService: ApiService ) { }

  ngOnInit() : void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
