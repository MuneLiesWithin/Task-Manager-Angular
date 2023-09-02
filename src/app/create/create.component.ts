import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  title : string = ''
  description : string = '' 

  constructor(private serv: TaskService, private router: Router) {

  }
  adicionaTarefa() {
    this.serv.addTask(this.title, this.description)
    console.log(this.title + this.description)
    this.router.navigate(['all'])
  }
}
