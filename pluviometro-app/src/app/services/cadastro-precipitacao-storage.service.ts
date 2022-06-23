import { RegistroPluviometria } from '../model/registro-pluviometria'
import { BehaviorSubject, Observable } from 'rxjs'

//import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core'
import { WebStorageUtil } from 'src/app/util/web-storage-util'
import { Constants } from '../util/constants'

@Injectable()
export class CadastroPrecipitacaoStorageService {
  registros!: RegistroPluviometria[]
  private registrosource!: BehaviorSubject<number>

  constructor() {
    this.registros = WebStorageUtil.get(Constants.REGISTROS_KEY)
    this.registrosource = new BehaviorSubject<number>(this.registros?.length)
  }

  save(registro: RegistroPluviometria) {
    this.registros = WebStorageUtil.get(Constants.REGISTROS_KEY)
    this.registros.push(registro)
    WebStorageUtil.set(Constants.REGISTROS_KEY, this.registros)
  }

  update(registro: RegistroPluviometria) {
    this.registros = WebStorageUtil.get(Constants.REGISTROS_KEY)
    this.delete(registro)
    this.save(registro)
  }

  delete(registro: RegistroPluviometria): boolean {
    this.registros = WebStorageUtil.get(Constants.REGISTROS_KEY)
    this.registros = this.registros.filter((r) => {
      r.dtHoraRegistro != registro.dtHoraRegistro
    })

    WebStorageUtil.set(Constants.REGISTROS_KEY, this.registros)
    return true
  }

  isExist(registro: RegistroPluviometria): boolean {
    this.registros = WebStorageUtil.get(Constants.REGISTROS_KEY)
    for (let u of this.registros) {
      if (
        u.dtHoraRegistro == registro.dtHoraRegistro
      ) {
        return true
      }
    }
    return false
  }

  getRegistros(): RegistroPluviometria[] {
    this.registros = WebStorageUtil.get(Constants.REGISTROS_KEY)
    return this.registros
  }

  notifyTotalregistros() {
    this.registrosource.next(this.getRegistros()?.length)
    if (this.getRegistros()?.length > 1) {
       this.registrosource.complete();
    }
  }

   asObservable(): Observable<number> {
    return this.registrosource
    //return this.userSource.asObservable()
  }
}
