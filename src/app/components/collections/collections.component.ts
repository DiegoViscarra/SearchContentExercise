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
      this.showEmptySearchPage();
    }
    else
    {
      this.getAlbums(title);
    }
  }

  showEmptySearchPage(){
    this.emptySearch = true;
    this.collections = [];
  }

  getAlbums(title: string){
    this.emptySearch=false;
    this.albumService.getAlbums(title).subscribe(res => {
      this.convertResults(res, title);
    });
  }

  convertResults(resultSearch:any, artist:string){
    if(artist!="" && artist!=null)
    {
      this.collections = resultSearch.results;
      this.filterByArtist(artist);
      this.orderData(this.optionForOrder);
    }
  }

  filterByArtist(artist:string):void{
    this.collections = this.collections.filter(s => s.artistName.toLowerCase() == artist.toLowerCase());  
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
