import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service'
import { QuestionarioModel } from '../../model/questionarioModel'
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field';
import { IQuestionario } from '../../interfaces/IQuestionario'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  model: QuestionarioModel = new QuestionarioModel();

  constructor(
    private questionarioSrv: QuestionarioService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(p => this.getId(p['id']));
  }
  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.questionarioSrv.GetById(id);
    this.model = result.data as QuestionarioModel;
  }

  async save(): Promise<void> {
    const result = await this.questionarioSrv.post(this.model);
    if (result.success) {
      this.router.navigateByUrl('/questoes');
    }
  }

}
