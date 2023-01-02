import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

export interface CreateAndUpdateTodo {
  todo: string;
  done: boolean;
}

const ENDPOINT = 'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  public getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(ENDPOINT);
  }

  public addTodo(todo: CreateAndUpdateTodo): Observable<Todo> {
    return this.http.post<Todo>(ENDPOINT, todo);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${ENDPOINT}?id=${todo.id}`, {
      todo: todo.todo,
      done: todo.done,
    });
  }

  public deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${ENDPOINT}?id=${id}`);
  }
}
