import { ContaAcepay } from '../conta_acepay/ContaAcepay';
import { EnderecoAcepay } from '../util_acepay/EnderecoAcepay';

// Classe AdminAcepay
export class AdminAcepay {

    id_admin_acepay = 0;
    nome_admin_acepay: string;
    data_nasc_admin_acepay: string;
    identidade_admin_acepay: string;
    cpf_admin_acepay: string;
    login_admin_acepay: string;
    senha_admin_acepay: string;
    endereco_admin_acepay: EnderecoAcepay;
    ct_acepay: ContaAcepay;


    // Construtor da classe AdminAcepay
    constructor( id_admin_acepay,
        nome_admin_acepay,
        data_nasc_admin_acepay,
        identidade_admin_acepay,
        cpf_admin_acepay,
        login_admin_acepay,
        senha_admin_acepay,
        endereco_admin_acepay,
        ct_acepay) {


        }
}
