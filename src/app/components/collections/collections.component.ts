import { Component, OnInit } from '@angular/core';
import { Collection } from '../../models/Collection';
import { CollectionService } from '../../services/collection.service'


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  collections: Collection[] = [];
  emptySearch: boolean;
  actualPage: number = 1;
  itemsPerPag: number = 5;
  constructor(private albumService:CollectionService) { }

  ngOnInit() {
    this.collections=[];
    this.emptySearch=true;
  }

  searchAlbum(title:string){
    if(title==="")
    {
      this.emptySearch=true;
    }
    else
    {
      this.emptySearch=false;
      this.albumService.searchAlbums(title).subscribe(res => {
        this.collections = res.results.filter(s => s.artistName.toLowerCase( ) === title.toLowerCase( )).sort((a,b) => a.collectionName.localeCompare(b.collectionName));
      })
    }
  }

  orderData(option:string){
    if(option==="Ascendant")
    {
      this.collections.sort((a,b) => a.collectionName.localeCompare(b.collectionName));
    }
    else if(option==="Descendant")
    {
      this.collections.sort((b,a) => a.collectionName.localeCompare(b.collectionName));
    }
  }

}
