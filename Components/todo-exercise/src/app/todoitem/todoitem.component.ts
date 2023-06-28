import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {
  @Input() todo!: Todo;
  @Output() outputTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() editClick: EventEmitter<Todo> = new EventEmitter();

  onMarkComplete(){
    this.todo.isComplete = !this.todo.isComplete;
  }

  onDeleteSubmit(todo:Todo){
    this.outputTodo.emit(todo); 
  }

  onEditClick(todo:Todo){
    this.editClick.emit(todo);
  }

}
