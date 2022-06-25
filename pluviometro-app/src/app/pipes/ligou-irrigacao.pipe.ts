import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ligouIrrigacao'
})
export class LigouIrrigacaoPipe implements PipeTransform {

  transform(isLigouIrrigacao: boolean): String {
    return isLigouIrrigacao ? "SIM" : "NÃO";
  }

}
