import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RegistroPluviometria } from './../model/registro-pluviometria'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CadastroPrecipitacaoPromisesService {
  URL = 'http://localhost:3000/registros'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  constructor(private httpClient: HttpClient) {}

  save(registro: RegistroPluviometria) {
    return this.httpClient
      .post<RegistroPluviometria>(
        this.URL,
        JSON.stringify(registro),
        this.httpOptions,
      )
      .toPromise()
  }

  getRegistros(): Promise<RegistroPluviometria[]> {
    return firstValueFrom(
      this.httpClient.get<RegistroPluviometria[]>(`${this.URL}/`),
    )
  }

  patch(registro: RegistroPluviometria): Promise<RegistroPluviometria> {
    return firstValueFrom(
      this.httpClient.patch<RegistroPluviometria>(
        `${this.URL}/${registro.id}`,
        JSON.stringify(registro),
        this.httpOptions,
      ),
    )
  }

  update(registro: RegistroPluviometria): Promise<RegistroPluviometria> {
    return firstValueFrom(
      this.httpClient.put<RegistroPluviometria>(
        this.URL,
        JSON.stringify(registro),
        this.httpOptions,
      ),
    )
  }
}
