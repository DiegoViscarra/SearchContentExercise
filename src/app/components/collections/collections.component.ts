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
      this.emptySearch = true;
      this.collections = [];
    }
    else
    {
      this.emptySearch=false;
      this.albumService.getAlbums(title).subscribe(res => {
        this.filterData(res, title);
        this.orderData(this.optionForOrder);
      });
    }
  }

  filterData(resultSearch:any, artist:string){
    if(artist!="" && artist!=null)
    {
      this.collections = resultSearch.results.filter(s => s.artistName.toLowerCase() == artist.toLowerCase());
    }
  }

  orderData(option: string){
    if(option==="Ascendant")
    {
      this.optionForOrder="Ascendant";
      this.collections.sort((a,b) => a.collectionName.localeCompare(b.collectionName));
    }
    else if(option==="Descendant")
    {
      this.optionForOrder="Descendant";
      this.collections.sort((b,a) => a.collectionName.localeCompare(b.collectionName));
    }
  }

  showAllAlbums() {
    this.itemsPerPag = this.collections.length;
    this.actualPage = 1;
  }

}
