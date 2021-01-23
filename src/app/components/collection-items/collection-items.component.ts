import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../../models/Collection'

@Component({
  selector: 'app-collection-items',
  templateUrl: './collection-items.component.html',
  styleUrls: ['./collection-items.component.css']
})
export class CollectionItemsComponent implements OnInit {
  @Input() collection: Collection;

  artistName: string;
  artworkUrl100: string;
  collectionName: string;
  collectionPrice: Number;;

  constructor() { }

  /*Initialize components for testing*/
  ngOnInit() {
    this.initializeComp()
  }

  initializeComp(){
    if(this.collection == undefined)
    {
      this.artistName = "";
      this.artworkUrl100 = "";
      this.collectionName = "";
      this.collectionPrice = 0;
    }
    else
    {
      this.artistName = this.collection.artistName;
      this.artworkUrl100 = this.collection.artworkUrl100;
      this.collectionName = this.collection.collectionName;
      this.collectionPrice = this.collection.collectionPrice;
    }
  }
}
