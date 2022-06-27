import { Router } from '@angular/router'
import { CadastroPrecipitacaoObservableService } from './../services/cadastro-precipitacao-observable.service'
import { CadastroPrecipitacaoComponent } from './../cadastro-precipitacao/cadastro-precipitacao.component'
import { CadastroPrecipitacaoPromisesService } from './../services/cadastro-precipitacao-promises.service'
import { Constants } from './../util/constants'
import { WebStorageUtil } from './../util/web-storage-util'
import { RegistroPluviometria } from './../model/registro-pluviometria'
import {
  Component,
  OnChanges,
  OnInit,
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
  registrosPluviometria: RegistroPluviometria[] = []
  isEditable: boolean = false
  totalPrecipitacao: number = 0

  constructor(
    private cadastroPrecipitacaoPromisesService: CadastroPrecipitacaoPromisesService,
    private cadastroPrecipitacaoObservableService: CadastroPrecipitacaoObservableService,
    private router: Router,
  ) {
    this.isEditable = false
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.getRegistros()
  }

  getRegistros() {
    /*this.cadastroPrecipitacaoPromisesService
      .getRegistros()
      .then((r: RegistroPluviometria[]) => {
        this.getRegistrosPromisesServices(r);
        this.setRegistrosSorted();
        this.calcularTotal();
      })
      .catch((e) => {
        this.getRegistrosLocalStorage()
        this.setRegistrosSorted();
        this.calcularTotal();
      })*/

    this.cadastroPrecipitacaoObservableService.getRegistros().subscribe(
      (r) => {
        this.registrosPluviometria = r
        this.setRegistrosSorted()
        this.calcularTotal()
      },
      (e) => {
        this.getRegistrosLocalStorage()
        this.setRegistrosSorted()
        this.calcularTotal()
      },
    )
  }

  onEdit(registro: RegistroPluviometria) {
    const url = `/edit/${registro.dtHoraRegistro}`
    this.router.navigate([url])
  }

  getRegistrosPromisesServices(r: RegistroPluviometria[]) {
    r.forEach((registro) => {
      this.registrosPluviometria.push(registro)
    })
  }

  getRegistrosLocalStorage() {
    //alert('JSON Server não disponível! Estou usando o LocalStorage!')
    this.registrosPluviometria = WebStorageUtil.get(Constants.REGISTROS_KEY)
  }

  setRegistrosSorted() {
    this.registrosPluviometria.sort(function (x, y) {
      if (x.dtHoraRegistro > y.dtHoraRegistro) {
        return 1
      }

      if (x.dtHoraRegistro < y.dtHoraRegistro) {
        return -1
      }
      return 0
    })
  }

  calcularTotal() {
    this.totalPrecipitacao = 0
    this.registrosPluviometria.forEach((element) => {
      this.totalPrecipitacao =
        parseInt(element.registro.toString()) + this.totalPrecipitacao
    })
  }

  onDelete(registro: RegistroPluviometria) {}
}
