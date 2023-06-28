import { Component, ViewChild } from '@angular/core';

export interface Todo {
  title: string;
  isComplete: boolean
}

 export class Todo implements Todo {
  constructor(public title: string, public isComplete: boolean){
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'to-do';
  showEdit: boolean = false;
  todoToEdit!: Todo;

  todos: Todo[] = [];

  addNewTodo(todo:string){
    let instance = new Todo(todo, false);
    this.todos.push(instance);
  }

  deleteTodo(todo:Todo){
    this.todos = this.todos.filter(item => todo.title !== item.title);
    this.showEdit = false;
  }

  editTodo(todo: Todo){
    this.showEdit = true;
    this.todoToEdit = todo;
  }

  cancelEdit(command: boolean){
    this.showEdit = false;
  }

  onEditTodo(data:any){
    this.todos = this.todos.map(x => x.title === data.oldTitle ? Object.assign({}, x, {title: data.newTitle, isComplete: false}) : x);
    this.showEdit = false;
  }

}
