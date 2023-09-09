import { Component } from '@angular/core';
import { Task } from 'src/models/task';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  task: Task | undefined
  id : number = 0
  title : string = ''
  description : string = ''

  constructor(private serv: TaskService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.task = this.serv.getTaskById(this.id);
      if (this.task) {
        this.title = this.task.title;
        this.description = this.task.description;
      } else {
        this.router.navigate(['all'])
        alert('Ocorreu um erro!')
      }
    });
  }
  atualizaTarefa() {
    this.serv.updateTask(this.id, this.title, this.description)
    this.router.navigate(['all'])
  }
}
