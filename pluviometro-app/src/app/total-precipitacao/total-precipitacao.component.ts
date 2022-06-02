import { RegistroPluviometria } from './../model/registro-pluviometria';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-total-precipitacao',
  templateUrl: './total-precipitacao.component.html',
  styleUrls: ['./total-precipitacao.component.css']
})
export class TotalPrecipitacaoComponent implements OnInit, OnChanges {

  @Input() totalPrecipitacao!: number;

  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(): void {
    
  }  

}
