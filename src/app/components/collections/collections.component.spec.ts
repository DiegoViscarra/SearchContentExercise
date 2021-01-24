import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { OrderDataComponent } from '../order-data/order-data.component';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { CollectionsComponent } from './collections.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CollectionItemsComponent } from '../collection-items/collection-items.component';
import { HttpClientModule } from '@angular/common/http';
import { EmptySearchComponent } from '../layout/header/messages/empty-search/empty-search.component';
import { NoResultsComponent } from '../layout/header/messages/no-results/no-results.component';
import { Collection } from '../../models/Collection';

describe('CollectionsComponent', () => {
  let component: CollectionsComponent;
  let fixture: ComponentFixture<CollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CollectionsComponent,
        SearchFieldComponent,
        OrderDataComponent,
        CollectionItemsComponent,
        EmptySearchComponent,
        NoResultsComponent
      ],
      imports: [ 
        FormsModule,
        NgxPaginationModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter search results by artist', () =>{
    var mockCollection: Collection[] = [];
    var mockAlbum1: Collection = {
      "artistName" : "Zedd", 
      "collectionName" : "Clarity", 
      "artworkUrl100" : "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/4c/a1/2c/4ca12c80-2971-4e53-c9a9-843735da352a/source/100x100bb.jpg", 
      "collectionPrice" : 7.99
    };
    
    var mockAlbum2: Collection = {
      "artistName" : "BTS", 
      "collectionName" : "Wings", 
      "artworkUrl100" : "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/48/a8/fb/48a8fb0a-c587-8559-ceb1-eafb1225fd26/source/100x100bb.jpg", 
      "collectionPrice" : 14.99
    };

    var mockAlbum3: Collection = {
      "artistName" : "Thousand Foot Krutch", 
      "collectionName" : "The End Is Where We Begin", 
      "artworkUrl100" : "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/06/a4/c7/06a4c717-6f71-2ac4-91d8-bbe7b4f557b3/source/100x100bb.jpg", 
      "collectionPrice" : 9.99
    };
    mockCollection.push(mockAlbum1,mockAlbum2,mockAlbum3);
    component.collections = mockCollection;
    component.filterByArtist("Zedd");
    expect(component.collections[0]).toBe(mockAlbum1);
    expect(component.collections.length).toBe(1);
  });

  it('should show no-search page when no title is searched', ()=>{
    component.emptySearch = false;
    component.searchAlbum("");
    expect(component.emptySearch).toBeTruthy();
  });

  it('should return to first page when another artist is searched', ()=>{
    component.actualPage = 4;
    component.searchAlbum("Bebe Rexha");
    expect(component.actualPage).toBe(1);
  });

  it("should sort collection name from A-Z", () => {
    var mockCollection: Collection[] = [];
    var mockAlbum1: Collection = {
      "artistName" : "Zedd & Alessia Cara", 
      "collectionName" : "Stay - Single", 
      "artworkUrl100" : "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/de/cb/47/decb473e-b528-079f-f505-46388fa3a02f/source/100x100bb.jpg", 
      "collectionPrice" : 1.29
    };
    var mockAlbum2: Collection = {
      "artistName" : "Zedd, Maren Morris & Grey", 
      "collectionName" : "The Middle - Single", 
      "artworkUrl100" : "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/99/1b/1e/991b1ea9-bedb-747c-7f38-85fdbb61919d/source/100x100bb.jpg", 
      "collectionPrice" : 1.29
    };
    var mockAlbum3: Collection = {
      "artistName" : "Zedd", 
      "collectionName" : "Clarity", 
      "artworkUrl100" : "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/4c/a1/2c/4ca12c80-2971-4e53-c9a9-843735da352a/source/100x100bb.jpg", 
      "collectionPrice" : 7.99
    };
    mockCollection.push(mockAlbum1, mockAlbum2, mockAlbum3);
    component.collections = mockCollection;
    component.orderData("Ascendant");
    var result1 = component.collections[0];
    var result2 = component.collections[1];
    var result3 = component.collections[2];
    expect(result1).toEqual(mockAlbum3);
    expect(result2).toEqual(mockAlbum1);
    expect(result3).toEqual(mockAlbum2);
  });

  it("should sort collection name from Z-A", () => {
    var mockCollection: Collection[] = [];
    var mockAlbum1: Collection = {
      "artistName" : "Zedd & Alessia Cara", 
      "collectionName" : "Stay - Single", 
      "artworkUrl100" : "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/de/cb/47/decb473e-b528-079f-f505-46388fa3a02f/source/100x100bb.jpg", 
      "collectionPrice" : 1.29
    };
    var mockAlbum2: Collection = {
      "artistName" : "Zedd, Maren Morris & Grey", 
      "collectionName" : "The Middle - Single", 
      "artworkUrl100" : "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/99/1b/1e/991b1ea9-bedb-747c-7f38-85fdbb61919d/source/100x100bb.jpg", 
      "collectionPrice" : 1.29
    };
    var mockAlbum3: Collection = {
      "artistName" : "Zedd", 
      "collectionName" : "Clarity", 
      "artworkUrl100" : "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/4c/a1/2c/4ca12c80-2971-4e53-c9a9-843735da352a/source/100x100bb.jpg", 
      "collectionPrice" : 7.99
    };
    mockCollection.push(mockAlbum1, mockAlbum2, mockAlbum3);
    component.collections = mockCollection;
    component.orderData("Descendant");
    var result1 = component.collections[0];
    var result2 = component.collections[1];
    var result3 = component.collections[2];
    expect(result1).toEqual(mockAlbum2);
    expect(result2).toEqual(mockAlbum1);
    expect(result3).toEqual(mockAlbum3);
  });

  it('should return to first page when see all albums button is clic', ()=>{
    component.actualPage = 3;
    component.showAllAlbums();
    expect(component.actualPage).toBe(1);
  });

});
