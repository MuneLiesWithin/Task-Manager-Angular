import { Injectable } from '@angular/core';
import { Task } from '../models/task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [] 

  constructor() {
    this.mock()
  }
  mock() {
    this.tasks[0] = new Task(this.tasks.length + 1, "Faculdade", "Desenvolvimento Mobile")
    this.tasks[1] = new Task(this.tasks.length + 1, "Trabalho", "Sou desempregado")
    this.tasks[2] = new Task(this.tasks.length + 1, "Academia", "100 Flexões")
    this.tasks[3] = new Task(this.tasks.length + 1, "Compras", "Maça e Banana")
  }
  getTaskById(id : number) {
    for(let index = 0; index < this.tasks.length; index++){
      if(id == this.tasks[index].id) {
        return this.tasks[index]
      }
    }
    return
  }
  updateStatus(id : number) {
    if(this.tasks[id - 1].done){
      this.tasks[id - 1].done = false
    } else {
      this.tasks[id - 1].done = true
    }
  }
  deleteTask(id : number) {
    this.tasks.splice(id - 1, 1)
  }
  addTask(title : string, description : string) {
    this.tasks.push(new Task(this.tasks.length + 1, title, description))
  }
  updateTask(id : number, title : string, description : string) {
    this.tasks[id - 1].title = title
    this.tasks[id - 1].description = description
  }
}
