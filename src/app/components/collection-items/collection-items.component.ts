import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../../models/Collection'

@Component({
  selector: 'app-collection-items',
  templateUrl: './collection-items.component.html',
  styleUrls: ['./collection-items.component.css']
})
export class CollectionItemsComponent implements OnInit {
  @Input() collection: Collection;
  
  constructor() { }

  ngOnInit() {
  }

}
