export class RegistroPluviometria {

    public id!: Number;
    public dtHoraRegistro!: Date;
    public registro!: number;
    public locais: string[]=[];
    public responsavel!: string;
    public isLigouIrrigacao!: boolean;

  constructor(){}

}
