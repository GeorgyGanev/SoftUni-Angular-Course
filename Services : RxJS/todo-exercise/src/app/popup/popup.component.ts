import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ITodo } from '../types/Todo';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {

  @Input() todoToEdit!: ITodo;
  @Output() cancelEdit: EventEmitter<any> = new EventEmitter();
  @Output() titleToChange: EventEmitter<any> = new EventEmitter();

  // @Input() todoToEdit!: Todo;
  // @Output() cancelEdit: EventEmitter<boolean> = new EventEmitter();
  // @Output() editData: EventEmitter<any> = new EventEmitter();

  // hideEdit(){
  //   this.cancelEdit.emit(true);
  // }
  
  // onUpdate(value:string){
  //   this.editData.emit({oldTitle: this.todoToEdit.title, newTitle: value});
  // }

  hidePopup(){
    this.cancelEdit.emit(true);
  }

  onEditUpdate(title:string){
    this.titleToChange.emit({oldTitle: this.todoToEdit.title, newTitle: title});
  }

 


}
