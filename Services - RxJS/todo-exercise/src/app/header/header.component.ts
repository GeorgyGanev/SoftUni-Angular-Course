import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @ViewChild('newItem') inputValue:any;
  @Output() newItemEvent = new EventEmitter<string>;

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.inputValue.nativeElement.value = '';
  }

}
