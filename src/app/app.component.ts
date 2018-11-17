import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  tasks: Task[] = [
    {taskName: "Fazer Comida", done: true},
    {taskName: "Tomar banho", done: true},
    {taskName: "Lavar roupa", done: false},
    {taskName: "Dormir", done: false},
  ];

  add(_taskName, _done){
    let task: Task = { taskName: _taskName, done: _done};
    this.tasks.push(task);
  }

  del(index){
    this.tasks.splice(index, 1);
  }

}

class Task {
  public taskName: string;
  public done: boolean;  
}