import { Component, OnInit } from '@angular/core';
//import { Todo } from '../pojo/todo';
import { TodoService } from './../service/todo/todo.service';
import { Router } from '@angular/router';



export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
) {}

}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  message: string;

  // todos = [
  //          new Todo(1,'Learn Bhangra', true, new Date()),
  //          new Todo(2,'Visit India', true, new Date()),
  //          new Todo(3,'Learn Boxing', false, new Date())
  // ];

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {

    this.getUpdatedlist();
   
  }

  getUpdatedlist() {

    this.todoService.getTodoList('username').subscribe(
      response => {
        this.todos = response;
        console.log(response);
      }
    )

  }

  onDelete(id) {

    this.todoService.deletetodoService(id, 'username').subscribe(
     response => {
       console.log(response);
       this.message = 'Deleted todo of ${id}!!';
       this.getUpdatedlist();
     }
    )
  }

  onUpdate(id) {

    this.router.navigate(['/todo', id]);
  }

  onCreateTodo() {

    this.router.navigate(['todo', -1 ])
  }

  


}
