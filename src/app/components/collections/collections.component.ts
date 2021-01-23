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
  optionForOrder: string = "Ascendant";
  constructor(private albumService:CollectionService) { }

  ngOnInit() {
    this.collections = [];
    this.emptySearch = true;
  }

  searchAlbum(title: string){
    this.actualPage = 1;
    this.itemsPerPag = 5;
    if(title==="")
    {
      this.emptySearch=true;
    }
    else
    {
      this.emptySearch=false;
      this.albumService.getAlbums(title).subscribe(res => {
        this.collections = res.results.filter(s => s.artistName.toLowerCase( ) === title.toLowerCase( ));
        this.orderData(this.optionForOrder);
      })
    }
  }

  orderData(option: string){
    if(option==="Ascendant")
    {
      console.log("ord asc");
      this.optionForOrder="Ascendant";
      this.collections.sort((a,b) => a.collectionName.localeCompare(b.collectionName));
    }
    else if(option==="Descendant")
    {
      console.log("ord desc");
      this.optionForOrder="Descendant";
      this.collections.sort((b,a) => a.collectionName.localeCompare(b.collectionName));
    }
  }

  showAllAlbums() {
    this.itemsPerPag = this.collections.length;
    this.actualPage = 1;
  }

}
