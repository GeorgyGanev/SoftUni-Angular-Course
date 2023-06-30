import { Injectable } from '@angular/core';
import { ITodo } from './types/Todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[] = [];

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }

}
