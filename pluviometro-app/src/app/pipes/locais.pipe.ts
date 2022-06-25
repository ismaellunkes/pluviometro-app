import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locais'
})
export class LocaisPipe implements PipeTransform {

  transform(locais: string[]): string {

    let localFormatado = '';

    locais.sort(function (x, y) {
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });

    let pos = 0;
    locais.forEach(local => {
      localFormatado += local
      if (pos < locais.length - 1) {
        localFormatado += ' | '
      }
      pos++;
    });
    return localFormatado;
  }

}
