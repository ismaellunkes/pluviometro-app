import { Constants } from './../util/constants';
import { WebStorageUtil } from './../util/web-storage-util';
import { CadastroPrecipitacaoStorageService } from './../cadastro-precipitacao/cadastro-precipitacao-storage.service';
import { RegistroPluviometria } from './../model/registro-pluviometria'
import {
  Component,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css'],
  providers: [],
})
export class ListaRegistrosComponent implements OnInit, OnChanges {
  //registroPluviometria!: RegistroPluviometria
  registrosPluviometria!: RegistroPluviometria[];
  isEditable: boolean = false
  totalPrecipitacao!: number

  constructor(
    private cadastroPrecipitacaoStorageService: CadastroPrecipitacaoStorageService
  ) {
    this.isEditable = false
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {

    this.registrosPluviometria = WebStorageUtil.get(Constants.REGISTROS_KEY);

    this.totalPrecipitacao = 0
    this.registrosPluviometria.forEach((element) => {
      this.totalPrecipitacao += element.registro
    })
  }
}
