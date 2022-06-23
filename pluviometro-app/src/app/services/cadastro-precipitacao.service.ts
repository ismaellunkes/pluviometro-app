import { ErrorUtil } from '../util/error-util';
import { RoutesAPI } from '../util/routes-api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RegistroPluviometria } from '../model/registro-pluviometria';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroPrecipitacaoService {

  URL = RoutesAPI.REGISTROS_PT;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

    constructor(
        private httpClient: HttpClient
      ) { }

    getByDataHoraRegistro(dataHoraRegistro: Date): Observable<RegistroPluviometria[]> {
      const query: HttpParams = new HttpParams().set('dataHoraRegistro', dataHoraRegistro.toISOString());
      const options = dataHoraRegistro ? { params: query } : {};

      return this.httpClient.get<RegistroPluviometria[]>(`${this.URL}`, options).pipe(
          catchError(ErrorUtil.handleError)
      );
    }

    save(registro: RegistroPluviometria): Observable<RegistroPluviometria> {
      debugger
      return this.httpClient.post<RegistroPluviometria> (
        this.URL,
        registro,
        this.httpOptions
      );

    }

    isExist(dataHoraRegistro: Date) {
      this.getByDataHoraRegistro(dataHoraRegistro) != null;
    }

    patch (registro: RegistroPluviometria): Observable<RegistroPluviometria> {
      return this.httpClient.patch<RegistroPluviometria> (
        this.URL,
        registro,
        this.httpOptions
      );
    }

    update (registro: RegistroPluviometria): Observable<RegistroPluviometria> {
      return this.httpClient.put<RegistroPluviometria> (
        this.URL,
        registro,
        this.httpOptions
      );
    }


}
