import { SubirService } from './../services/subir.service';
import { Component, OnInit } from '@angular/core';
import { Horario } from '../horarios.model';

@Component({
  selector: 'app-lista-comedor',
  templateUrl: './lista-comedor.component.html',
  styleUrls: ['./lista-comedor.component.css']
})
export class ListaComedorComponent implements OnInit {

  constructor(private rs: SubirService) { }

  columns = ['Nombre', 'Tipo Alimento', 'Hora', 'Ubicacion'];
  index = ['nombre', 'tipo_alimento', 'hora', 'ubicacion'];

  horarios: Horario[] = [];

  ngOnInit(): void {
    this.rs.getHorarios().subscribe
     (
       (response) =>
       {
         this.horarios = response;
       },
       (error) => console.log(error)
     )
  }

}
