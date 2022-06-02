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
  registroPluviometria!: RegistroPluviometria
  registrosPluviometria: RegistroPluviometria[] = []
  isEditable: boolean = false
  totalPrecipitacao!: number

  constructor() {
    this.isEditable = false
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.registrosPluviometria.push(
      new RegistroPluviometria(
        new Date('2022/02/22 00:00:00'),
        120,
        ['Pomar01', 'Pomar03'],
        'Ismael',
        true,
      ),
      new RegistroPluviometria(
        new Date('2022/02/23 00:00:00'),
        0,
        ['Pomar01', 'Pomar03'],
        'Ismael',
        true,
      ),
      new RegistroPluviometria(
        new Date('2022/02/24 00:00:00'),
        10,
        ['Pomar01', 'Pomar03'],
        'João',
        true,
      ),
      new RegistroPluviometria(
        new Date('2022/02/25 00:00:00'),
        1,
        ['Pomar01', 'Pomar03'],
        'Arnoldo',
        true,
      ),
      new RegistroPluviometria(
        new Date('2022/02/26 00:00:00'),
        12,
        ['Pomar01', 'Pomar03'],
        'Schurastey',
        false,
      ),
      new RegistroPluviometria(
        new Date('2022/02/27 00:00:00'),
        1,
        ['Pomar01', 'Pomar03'],
        'Ismael',
        true,
      ),
      new RegistroPluviometria(
        new Date('2022/02/28 00:00:00'),
        45,
        ['Pomar01', 'Pomar03'],
        'Ismael',
        false,
      ),
      new RegistroPluviometria(
        new Date('2022/02/29 00:00:00'),
        54,
        ['Pomar01', 'Pomar03'],
        'Ismael',
        true,
      ),
    )

    this.totalPrecipitacao = 0
    this.registrosPluviometria.forEach((element) => {
      this.totalPrecipitacao += element.registro
    })
  }
}
