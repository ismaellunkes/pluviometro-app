export class RegistroPluviometria {
    dataHoraRegistro: Date;
   

    constructor(public dtHoraRegistro: Date, public registro: number, public  locais: string[], public  responsavel: string, public  isLigouIrrigacao: boolean){
        this.dataHoraRegistro = dtHoraRegistro;
        this.registro = registro;
        this.locais = locais;
        this.responsavel = responsavel;
        this.isLigouIrrigacao = isLigouIrrigacao;
    }



}
