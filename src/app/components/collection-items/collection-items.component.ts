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
  collectionPrice: Number;
  defaultArtwork: string = "https://km.support.apple.com/kb/image.jsp?productid=PP488&size=240x240";

  constructor() { }

  ngOnInit() {
    this.initializeComp();
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
      this.artworkExists();
      this.collectionName = this.collection.collectionName;
      this.collectionPrice = this.collection.collectionPrice;
    }
  }
  
  artworkExists(){
    if(this.collection.artworkUrl100 == "")
    {
      this.artworkUrl100 = this.defaultArtwork;
    }
    else
    {
      this.artworkUrl100 = this.collection.artworkUrl100;
    }
  }

}
