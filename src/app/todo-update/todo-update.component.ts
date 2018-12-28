import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo/todo.service';
import { Todo } from '../todo/todo.component';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  id:number;
  todo: Todo;

  constructor(private todoService: TodoService, 
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if(this.id!=-1) {
    this.todoService.retreiveTodobyId('username', this.id)
    .subscribe(
        response => {
        this.todo = response
        console.log(response)
        }
    
    ); 
    }
  }

  onSave() {

    if(this.id === -1) {

      this.todoService.postTodo('username', this.todo)
      .subscribe(
        response => {
          console.log(response)
          this.route.navigate(['todolist'])
        }
      )
    } else {
    this.todoService.updateTodo('username', this.id, this.todo)
    .subscribe(
      response => {
        console.log(response)
        this.route.navigate(['todolist'])

      }
    );
    }
  }



}
