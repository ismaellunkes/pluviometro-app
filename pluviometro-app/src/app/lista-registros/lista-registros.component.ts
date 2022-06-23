import { CadastroPrecipitacaoPromisesService } from './../services/cadastro-precipitacao-promises.service'
import { CadastroPrecipitacaoService } from '../services/cadastro-precipitacao.service'
import { Constants } from './../util/constants'
import { WebStorageUtil } from './../util/web-storage-util'
import { CadastroPrecipitacaoStorageService } from '../services/cadastro-precipitacao-storage.service'
import { RegistroPluviometria } from './../model/registro-pluviometria'
import {
  Component,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css'],
  providers: [],
})
export class ListaRegistrosComponent implements OnInit, OnChanges {
  //registroPluviometria!: RegistroPluviometria
  registrosPluviometria: RegistroPluviometria[] = []
  isEditable: boolean = false
  totalPrecipitacao: number = 0

  constructor(
    private cadastroPrecipitacaoPromisesService: CadastroPrecipitacaoPromisesService,
  ) {
    this.isEditable = false
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.cadastroPrecipitacaoPromisesService
      .getRegistros()
      .then((r: RegistroPluviometria[]) => {
        r.forEach((registro) => {
          this.totalPrecipitacao += Number(registro.registro)
          this.registrosPluviometria.push(registro)
        });
        this.registrosPluviometria.sort(function (x, y) {
          if (x.dtHoraRegistro > y.dtHoraRegistro) {
            return 1
          }

          if (x.dtHoraRegistro < y.dtHoraRegistro) {
            return -1
          }
          return 0
        });
      })
      .catch((e) => {
        alert('JSON Server não disponível! Estou usando o LocalStorage!')
        this.registrosPluviometria = WebStorageUtil.get(Constants.REGISTROS_KEY)
        this.registrosPluviometria.sort(function (x, y) {
          if (x.dtHoraRegistro > y.dtHoraRegistro) {
            return 1
          }

          if (x.dtHoraRegistro < y.dtHoraRegistro) {
            return -1
          }
          return 0
        })
        this.totalPrecipitacao = 0
        this.registrosPluviometria.forEach((element) => {
          this.totalPrecipitacao =
            parseInt(element.registro.toString()) + this.totalPrecipitacao
        })
      })
  }

  onEdit(registro: RegistroPluviometria) {
    debugger
    console.log(registro);
    //let r =  this.cadastroPrecipitacaoService.getByDataHoraRegistro(registro.dtHoraRegistro);
    //this.cadastroPrecipitacaoPromisesService.update(registro);
  }

  onDelete(registro: RegistroPluviometria) {}
}
