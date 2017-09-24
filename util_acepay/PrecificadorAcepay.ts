import {AdminAcepay} from "../user_acepay/AdminAcepay";

/* 
Autor: Ewerton Souto
Data: 19/09/2017

Descrição: Classe com a finalidade de disponibilizar recursos para 
definição de preços e taxas no sistema AcePay

*/

//Classe PrecificadorAcepay
export class PrecificadorAcepay{

    valor_btc_venda: number;
    valor_btc_compra: number;
    valor_dollar: number;
    valor_real: number;
    taxa_transf_btc: number;
    taxa_deposito_btc: number;
    taxa_deposito_real: number;
    admin_acepay: AdminAcepay;
    constructor(
        valor_btc_venda,
        valor_btc_compra,
        valor_dollar,
        valor_real,
        taxa_transf_btc,
        taxa_deposito_btc,
        taxa_deposito_real,
        admin_acepay
    ){
                
    }
}