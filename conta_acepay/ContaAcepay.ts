import { ContaBancaria } from "../conta_bancaria/ContaBancaria";
import { CarteiraAcepay } from "../carteira_acepay/CarteiraAcepay";


//Classe ContaAcepay
export class ContaAcepay{
    
    id_ct_acepay: number; 
    ct_bancaria: ContaBancaria; 
    carteira: CarteiraAcepay;
    status: number;
    saldo_moeda: number; 
    saldo_btc: number;

    //Construtor da classe ContaAcepay
    constructor(id_ct_acepay, 
                ct_bancaria, 
                carteira, 
                saldo_moeda, 
                saldo_btc){


                }                                     
}