import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service'
import { QuestionarioModel } from '../../model/questionarioModel'
import { MatFormFieldModule} from '@angular/material/form-field';
import { IQuestionario } from '../../interfaces/IQuestionario'
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.scss']
})

export class QuestoesComponent implements OnInit {


  columns: string[] = ['id', 'nome', 'cor', 'quantidade', 'preco'];

  dataSource!: MatTableDataSource<IQuestionario>;


  constructor(private questionarioSrv: QuestionarioService,
    private router: Router,
    private active: ActivatedRoute) { 
  }

  ngOnInit() {
    this.bind();
  }
  async bind() {
    console.log("inicio")
    const questoes = await this.questionarioSrv.GetAll();
    console.log ("----");
    console.log(questoes);
    console.log ("----");
    this.dataSource = new MatTableDataSource(questoes.data);    
  }
  

  async delete(questionario: QuestionarioModel): Promise<void> {
      const result = await this.questionarioSrv.delete(questionario.id);
      this.bind();     
      this.router.navigateByUrl('/questoes');      
  }
}
