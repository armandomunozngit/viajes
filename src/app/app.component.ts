import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestinoViajeComponent } from "./destino-viaje/destino-viaje.component";
import { ListaDestinosComponent } from "./lista-destinos/lista-destinos.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DestinoViajeComponent, ListaDestinosComponent, NgFor]
})
export class AppComponent {
  title = 'Viajes';
}
