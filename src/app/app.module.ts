import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionItemsComponent } from './components/collection-items/collection-items.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { OrderDataComponent } from './components/order-data/order-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    CollectionItemsComponent,
    SearchFieldComponent,
    OrderDataComponent
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
