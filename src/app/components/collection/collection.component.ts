import { Component, OnInit } from '@angular/core';
import { Collection } from '../../models/Collection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collections:Collection[];
  constructor() { }

  ngOnInit() {
    this.collections=[
      {
        artworkUrl100: "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/b9/ad/59/b9ad597b-44a0-600a-8077-e75f7ec9e11d/source/100x100bb.jpg",
        collectionName: "Teenage Dream",
        artistName: "Katy Perry",
        collectionPrice: 9.99
      },
      {
        artworkUrl100: "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/74/50/98/745098ae-4553-57cb-5e9f-9e00ff84441f/source/100x100bb.jpg",
        collectionName: "Rise",
        artistName: "Katy Perry",
        collectionPrice: 1.29
      },
      {
        artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/95/99/6a/95996ae9-4ce3-da1f-1a18-396b31af9075/source/100x100bb.jpg",
        collectionName: "The One That Got Away (feat. B.o.B) - Single",
        artistName: "Katy Perry",
        collectionPrice: 1.29
      }
    ]
  }

}
