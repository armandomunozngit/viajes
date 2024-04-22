import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DestinoViaje } from '../models/destino-viale.model';

@Component({
  selector: 'app-lista-destinos-ul',
  standalone: true,
  imports: [],
  templateUrl: './lista-destinos-ul.component.html',
  styleUrl: './lista-destinos-ul.component.css'
})

export class ListaDestinosUlComponent implements OnInit{
  @Input() destino: DestinoViaje | undefined;

  constructor(){
  }

  ngOnInit(){
  }
}
