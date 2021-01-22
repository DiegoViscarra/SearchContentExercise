import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../models/SearchResult';
import { CollectionService } from '../../services/collection.service'

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  collections: SearchResult[] = [];
  emptySearch: boolean;

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
        this.collections = res.results.filter(s => s.artistName.toLowerCase( ) === title.toLowerCase( ));
      })
      console.log(this.collections)
    }

  }

}
