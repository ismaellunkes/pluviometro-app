import { CadastroPrecipitacaoObservableService } from './../services/cadastro-precipitacao-observable.service'
import { ActivatedRoute, Router } from '@angular/router'
import { CadastroPrecipitacaoPromisesService } from './../services/cadastro-precipitacao-promises.service'
import { CadastroPrecipitacaoStorageService } from '../services/cadastro-precipitacao-storage.service'
import { NgForm } from '@angular/forms'
import { RegistroPluviometria } from './../model/registro-pluviometria'
import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  OnChanges,
} from '@angular/core'
import { param } from 'jquery'

@Component({
  selector: 'app-cadastro-precipitacao',
  templateUrl: './cadastro-precipitacao.component.html',
  styleUrls: ['./cadastro-precipitacao.component.css'],
})
export class CadastroPrecipitacaoComponent implements OnInit {
  @ViewChild('form') form!: NgForm

  registroPluviometrias?: RegistroPluviometria[]
  @Input() @Output() registro!: RegistroPluviometria

  isLocalSelecionado!: boolean

  responsaveis: String[] = ['Ismael', 'Maria', 'João']
  locais: String[] = [
    'Pomar 01',
    'Pomar 02',
    'Pomar 03',
    'Pomar 04',
    'Pomar 05',
  ]

  modal = {
    show: false,
    title: '',
    text: '',
  }

  isSubmitted!: boolean
  isShowMessage: boolean = false
  isSuccess!: boolean
  message!: string

  constructor(
    private cadastroPrecipitacaoStorageService: CadastroPrecipitacaoStorageService,
    private cadastroPrecipitacaoPromisesService: CadastroPrecipitacaoPromisesService,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    //Shared.initializeWebStorage()
    this.registro = new RegistroPluviometria()
    this.registroPluviometrias = []
    this.isLocalSelecionado = false

    this.activeRoute.paramMap.subscribe(
      (params) => {
        if (params.keys.length > 0) {
          // @ts-ignore
          let dtHora: Date = params?.get('datahora')

          if (dtHora != null && dtHora != undefined) {
            let r = this.cadastroPrecipitacaoStorageService.findByDataHoraRegistro(
              dtHora,
            )

            if (r != undefined) {
              this.registro = r
            }
          }
        }
      },
      (e) => {
        this.registro = new RegistroPluviometria()
        this.registroPluviometrias = []
        this.isLocalSelecionado = false
      },
    )
  }

  onSubmit() {
    /*Armazenamento no JSON Server */
    this.cadastroPrecipitacaoPromisesService
      .save(this.registro)
      .then(() => alert('Salvo no JSON Server com sucesso.'))
      .catch(() => {
        /*Armazenamento no LocalStorage */
        if (!this.cadastroPrecipitacaoStorageService.isExist(this.registro)) {
          this.cadastroPrecipitacaoStorageService.save(this.registro)
        } else {
          this.cadastroPrecipitacaoStorageService.update(this.registro)
        }
        this.cadastroPrecipitacaoStorageService.notifyTotalregistros()
        alert('Json Server indisponível. Salvo em LocalStorage com sucesso.')
      })
      .finally(() => {
        /*Demais controles do form*/
        this.isSubmitted = true
        this.isShowMessage = true
        this.isSuccess = true
        this.form.reset()
        this.registro = new RegistroPluviometria()
        this.modal.show = true
        this.modal.title = 'Sucesso!'
        this.modal.text = `Seu cadastro foi realizado com sucesso!`
      })
  }

  onSelectChange(event: Event) {
    this.registro.responsavel = (event.target as HTMLInputElement).value
  }

  addLocal(event: Event) {
    let checked = (event.target as HTMLInputElement).checked
    let itemClicado = (event.target as HTMLInputElement).value

    if (checked && !this.registro.locais.some((a) => a === itemClicado)) {
      this.registro.locais.push(itemClicado)
    }

    if (!checked && this.registro.locais.some((a) => a === itemClicado)) {
      this.registro.locais = this.registro.locais.filter(
        (r) => r != itemClicado,
      )
    }
  }

  isLigou(event: any) {
    this.registro.isLigouIrrigacao = event.target.checked ? true : false
  }

  onCloseModal() {
    this.modal.show = false
  }
}
