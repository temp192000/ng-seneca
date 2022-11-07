import { Component, OnInit } from '@angular/core';
import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList: any = [];

  constructor(private todoDB: DatafetchService) {}

  ngOnInit(): void {}

  retrieveCompleted() {
    this.todoList = this.todoDB
      .getAPI('https://jsonplaceholder.typicode.com/todos?completed=true')
      .subscribe((response: any) => (this.todoList = response));
  }
  retrievePending() {
    this.todoList = this.todoDB
      .getAPI('https://jsonplaceholder.typicode.com/todos?completed=false')
      .subscribe((response: any) => (this.todoList = response));
  }
}
