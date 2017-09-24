import { EnderecoAcepay } from "../util_acepay/EnderecoAcepay";


//Classe ContaBancaria
export class ContaBancaria{
    
    id_ct_bancaria: number; 
    banco_cta: number; 
    agencia_banco: string;
    endereco: EnderecoAcepay;
    saldo_moeda: number; 
    saldo_btc: number;

    //Construtor da classe ContaBancaria
    constructor(    id_ct_bancaria, 
                    banco_cta,
                    agencia_banco,
                    endereco,
                    saldo_moeda, 
                    saldo_btc){
                }                                     
}