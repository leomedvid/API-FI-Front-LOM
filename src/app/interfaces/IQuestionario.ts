import { IInterface } from './IInterface';

export interface IQuestionario extends IInterface {
  nome: string;
  cor: string;
  quantidade: number;
  preco: string;
}
