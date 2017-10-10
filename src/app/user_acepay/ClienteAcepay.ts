import { ContaAcepay } from '../conta_acepay/ContaAcepay';
import { EnderecoAcepay } from '../util_acepay/EnderecoAcepay';

// Classe ClienteAcepay
// tslint:disable-next-line:one-line
export class ClienteAcepay{

    id_cli_acepay = 0;
    nome_cli_acepay: string;
    data_nasc_cli_acepay: string;
    identidade_cli_acepay: string;
    cpf_cli_acepay: string;
    login_cli_acepay: string;
    senha_cli_acepay: string;
    endereco_cli_acepay: EnderecoAcepay;
    ct_acepay: ContaAcepay;


    // Construtor da classe ClienteAcepay
    /*
    constructor( id_cli_acepay,
        nome_cli_acepay,
        data_nasc_cli_acepay,
        identidade_cli_acepay,
        cpf_cli_acepay,
        login_cli_acepay,
        senha_cli_acepay,
        endereco_cli_acepay,
        // tslint:disable-next-line:one-line
        ct_acepay){


        }*/
}
