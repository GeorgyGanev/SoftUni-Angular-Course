import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from './todo.service';
import { ITodo, Todo } from './types/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'to-do';
  showEdit: boolean = false;
  todos: ITodo[] = [];
  todoToEdit!: ITodo;
  missingTitle: boolean = false;
    
  constructor(private todoService: TodoService){}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos => {
      this.todos = todos.slice(0, 5);
    }))
  }

  addNewTodo(title:string){
    if (title !== ''){
      this.missingTitle = false;
      this.todos.push(new Todo(title, false))
    } else {
      this.missingTitle = true;
    }
  }

  deleteTodo(todoToDelete:ITodo){
    this.todos = this.todos.filter(todo => todo.title !== todoToDelete.title);
  }

  editTodo(todoToEdit: ITodo){
    this.showEdit = true;
    this.todoToEdit = todoToEdit;
  }

  cancelEdit(value: boolean){
    this.showEdit = false;
  }

  titleToChange(data:any){
      this.todos = this.todos.map(todo => todo.title === data.oldTitle ? {...todo, title: data.newTitle} : {...todo});
      this.showEdit = false;
  }

}
