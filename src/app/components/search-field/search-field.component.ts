import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
  @Output() searchAlbum: EventEmitter<string> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.searchAlbum.emit(this.title);
  }

}
