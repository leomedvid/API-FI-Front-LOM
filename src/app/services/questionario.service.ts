import { QuestionarioModel } from './../model/questionarioModel';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpService } from './http.service';
import { IResultHttp } from '../interfaces/IResultHttp';
import { environment } from './../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService extends BaseService<QuestionarioModel> {

  private loginSubject = new Subject<boolean>();

  constructor(public override http: HttpService) {
    super('sistemaLOM', http);
  }

  login(email: string, password: string): Promise<IResultHttp> {
    return this.http.post(`${environment.url_api}/sistemaLOM/auth`, { email, password });
  }
}