import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

  isEmpty (_tasks){
    return  _tasks.length!=0;
  }

  del(index){
    this.tasks.splice(index, 1);
  }

}


class Task {
  public taskName: string;
  public done: boolean;  
}
