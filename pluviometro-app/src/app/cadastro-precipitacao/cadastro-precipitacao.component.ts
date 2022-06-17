import { Shared } from './../util/shared'
import { CadastroPrecipitacaoStorageService } from './cadastro-precipitacao-storage.service'
import { NgForm } from '@angular/forms'
import { RegistroPluviometria } from './../model/registro-pluviometria'
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core'

@Component({
  selector: 'app-cadastro-precipitacao',
  templateUrl: './cadastro-precipitacao.component.html',
  styleUrls: ['./cadastro-precipitacao.component.css'],
})
export class CadastroPrecipitacaoComponent implements OnInit {
  @ViewChild('form') form!: NgForm

  registroPluviometrias?: RegistroPluviometria[]
  @Input() @Output() registro!: RegistroPluviometria

  responsaveis: String[] = ['Ismael', 'Maria', 'João']
  locais: String[] = [
    'Pomar 01',
    'Pomar 02',
    'Pomar 03',
    'Pomar 04',
    'Pomar 05',
  ]

  isSubmitted!: boolean
  isShowMessage: boolean = false
  isSuccess!: boolean
  message!: string

  constructor(
    private cadastroPrecipitacaoStorageService: CadastroPrecipitacaoStorageService
  ) {}

  ngOnInit(): void {
    //Shared.initializeWebStorage()
    this.registro = new RegistroPluviometria();
    this.registroPluviometrias = [];
  }

  onSubmit() {
    this.isSubmitted = true
    if (!this.cadastroPrecipitacaoStorageService.isExist(this.registro)) {
      this.cadastroPrecipitacaoStorageService.save(this.registro)
    } else {
      this.cadastroPrecipitacaoStorageService.update(this.registro)
    }
    this.isShowMessage = true
    this.isSuccess = true
    this.message = 'Cadastro realizado com sucesso!'

    this.form.reset()
    this.registro = new RegistroPluviometria();

    this.registroPluviometrias = this.cadastroPrecipitacaoStorageService.getRegistros()

    this.cadastroPrecipitacaoStorageService.notifyTotalregistros()

    //debugger
    //alert(this.registro.dtHoraRegistro);
  }

  onSelectChange(event: Event) {
    this.registro.responsavel = (event.target as HTMLInputElement).value
  }

  addLocal(event: Event) {
    this.registro.locais.push((event.target as HTMLInputElement).value);
  }

  isLigou(event: any) {
    this.registro.isLigouIrrigacao = event.target.checked ? true : false
  }
}
