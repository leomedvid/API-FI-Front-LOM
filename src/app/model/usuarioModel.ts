import { BaseModel } from './baseModel';

export class UsuarioModel extends BaseModel {  
  nome: string | undefined;  
  cpf: string| undefined;
  cep: string | undefined;
  telefone: string | undefined;
}