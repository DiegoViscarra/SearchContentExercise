import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { OrderDataComponent } from './components/order-data/order-data.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CollectionItemsComponent } from './components/collection-items/collection-items.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/layout/header/header.component';
import { EmptySearchComponent } from './components/layout/header/messages/empty-search/empty-search.component';
import { NoResultsComponent } from './components/layout/header/messages/no-results/no-results.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxPaginationModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        CollectionsComponent,
        SearchFieldComponent,
        OrderDataComponent,
        CollectionItemsComponent,
        HeaderComponent,
        EmptySearchComponent,
        NoResultsComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'search-content-exercise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('search-content-exercise');
  });

});
