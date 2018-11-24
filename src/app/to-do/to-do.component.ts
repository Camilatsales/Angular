import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  
  tasks: Task[] = [
    { taskName: "Fazer Comida", done: true },
    { taskName: "Tomar banho", done: true },
    { taskName: "Lavar roupa", done: false },
    { taskName: "Dormir", done: false },
  ];


  add(_taskName, _done){
    let task: Task = { taskName: _taskName, done: _done};
    this.tasks.push(task);
  }
  
  
}


class Task {
  public taskName: string;
  public done: boolean;  
}