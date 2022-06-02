import { FormControl } from '@angular/forms';
import { RegistroPluviometria } from './../model/registro-pluviometria';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cadastro-precipitacao',
  templateUrl: './cadastro-precipitacao.component.html',
  styleUrls: ['./cadastro-precipitacao.component.css']
})
export class CadastroPrecipitacaoComponent implements OnInit, OnChanges {

  public dataHoraRegistro: FormControl;

  @Input() registro!: RegistroPluviometria;
  favoriteColor = '';

  constructor() { 

    this.dataHoraRegistro = new FormControl('');

  }
  ngOnChanges(changes: SimpleChanges): void {
    
    
  }

  ngOnInit(): void {
    this.registro = new RegistroPluviometria(new Date(), 1, [''], '', true);

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });
  
    // Or with jQuery
  
    $(document).ready(function(){
      $('.datepicker').datepicker();
    });
  }

  onButtonClick() : void {

  }

}
