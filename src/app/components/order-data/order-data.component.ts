import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.css']
})
export class OrderDataComponent implements OnInit {
  @Output() optionToOrder: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  orderByAsc(){
    this.optionToOrder.emit("Ascendant");
  }

  orderByDesc(){
    this.optionToOrder.emit("Descendant");
  }

}
