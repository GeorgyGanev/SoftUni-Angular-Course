import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {

  @Input() todoToEdit!: Todo;
  @Output() cancelEdit: EventEmitter<boolean> = new EventEmitter();
  @Output() editData: EventEmitter<any> = new EventEmitter();

  hideEdit(){
    this.cancelEdit.emit(true);
  }
  
  onUpdate(value:string){
    this.editData.emit({oldTitle: this.todoToEdit.title, newTitle: value});
  }
 
}
