import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { OrderDataComponent } from '../order-data/order-data.component';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { CollectionsComponent } from './collections.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CollectionItemsComponent } from '../collection-items/collection-items.component';
import { HttpClientModule } from '@angular/common/http';

describe('CollectionsComponent', () => {
  let component: CollectionsComponent;
  let fixture: ComponentFixture<CollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CollectionsComponent,
        SearchFieldComponent,
        OrderDataComponent,
        CollectionItemsComponent
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
});
