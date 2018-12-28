import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../todo/todo.component';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { API_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoList(username) {

    console.log(username);

    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  retreiveTodobyId(username, id) {

    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  deletetodoService(id, username) {

    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);

  }

  updateTodo(username, id, todo) {

    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  postTodo(username, todo) {

    return this.http.post<Todo>(`${API_URL}/users/${username}/todos/`, todo);
  }


}
