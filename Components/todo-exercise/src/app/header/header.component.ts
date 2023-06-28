import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Output() newItemEvent = new EventEmitter<string>;

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  @ViewChild('newItem') inputValue:any;

  handleClear(){
  this.inputValue.nativeElement.value = '';
  }

}
