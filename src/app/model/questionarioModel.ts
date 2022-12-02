import { BaseModel } from './baseModel';

export class QuestionarioModel extends BaseModel {  
  nome: string | undefined;  
  cor: string| undefined;
  quantidade: number | undefined;
  preco: string | undefined;
}