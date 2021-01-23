import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http:HttpClient) { }

  getAlbums(artistName:string):Observable<any> {
    let itunesSearchURL = `https://itunes.apple.com/search?term=${artistName}&entity=album`;
    return this.http.get(itunesSearchURL)
  }
}
