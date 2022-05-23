import { RegistroPluviometria } from './../model/registro-pluviometria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent implements OnInit {    

  registroPluviometria!: RegistroPluviometria;
  /* dataHoraRegistro = '17/12/2021';
  precipitacao = 102;
  locais = ['Pomar 001', 'Pomar 002'];
   responsavel = 'Ismael Lunkes'; */
  //ligouIrrigacao = 'Não';/*ligou == true ? 'Sim' : 'Não';*/
 
  constructor() { }

  ngOnInit(): void {    
  
    this.registroPluviometria = new RegistroPluviometria(new Date('2022/02/22 00:00:00'), 120, ['Pomar01', 'Pomar03'], 'Ismael', true);

  }

}
