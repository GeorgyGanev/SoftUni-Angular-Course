import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../types/Todo';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {

  isCompleted: boolean = false;

  @Input() todo: ITodo | undefined;
  @Output() todoToDelete: EventEmitter<ITodo> = new EventEmitter();
  @Output() todoToEdit: EventEmitter<ITodo> = new EventEmitter();

  toggleComplete(){
    this.isCompleted = !this.isCompleted;
  }

  onDelete(){
    this.todoToDelete.emit(this.todo);
  }

  OnEditClick(){
    this.todoToEdit.emit(this.todo)
  }

}
