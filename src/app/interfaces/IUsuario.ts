import { IInterface } from './IInterface';

export interface IUsuario extends IInterface {
  nome: string;
  cpf: string;
  cep: string;
  telefone: string;
}
