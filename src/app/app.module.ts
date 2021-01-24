import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionItemsComponent } from './components/collection-items/collection-items.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { OrderDataComponent } from './components/order-data/order-data.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { EmptySearchComponent } from './components/layout/header/messages/empty-search/empty-search.component';
import { NoResultsComponent } from './components/layout/header/messages/no-results/no-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    CollectionItemsComponent,
    SearchFieldComponent,
    OrderDataComponent,
    HeaderComponent,
    EmptySearchComponent,
    NoResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
