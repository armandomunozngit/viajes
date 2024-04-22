import { Component, OnInit, Input } from '@angular/core';
import { DestinoViajeComponent } from "../destino-viaje/destino-viaje.component";
import { NgFor } from '@angular/common';
import { DestinoViaje } from '../models/destino-viale.model';
import { ListaDestinosUlComponent } from "../lista-destinos-ul/lista-destinos-ul.component";

@Component({
    selector: 'app-lista-destinos',
    standalone: true,
    templateUrl: './lista-destinos.component.html',
    styleUrl: './lista-destinos.component.css',
    imports: [DestinoViajeComponent, NgFor, ListaDestinosUlComponent]
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];

  constructor()
  {
    this.destinos=[];
  }
  ngOnInit(){
  }

  guardar(nombre:string, url:string) :boolean{
    this.destinos.push(new DestinoViaje(nombre, url));
      console.log(this.destinos);
      return false;
  }

}
