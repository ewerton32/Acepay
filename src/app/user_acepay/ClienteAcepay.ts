import { ContaAcepay } from '../conta_acepay/ContaAcepay';
import { EnderecoAcepay } from '../util_acepay/EnderecoAcepay';

// Classe ClienteAcepay
// tslint:disable-next-line:one-line
export class ClienteAcepay {

    private id_cli_acepay = 0;
    private nome_cli_acepay: string;
    private data_nasc_cli_acepay: string;
    private identidade_cli_acepay: string;
    private cpf_cli_acepay: string;
    private login_cli_acepay: string;
    private senha_cli_acepay: string;
    private endereco_cli_acepay: EnderecoAcepay;



    constructor() {
    }


}
