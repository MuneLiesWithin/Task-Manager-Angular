import { Component } from '@angular/core';
import { Task } from '../../models/task'
import { TaskService } from '../task.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  tasks : Task[]

  constructor(private serv: TaskService) {
      this.tasks = this.serv.tasks
  }
  atualizaStatus(id : number) {
    this.serv.updateStatus(id)
  }
  deletaTarefa(id : number) {
    this.serv.deleteTask(id)
  }
}
