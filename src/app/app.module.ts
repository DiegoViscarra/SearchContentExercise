import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionItemsComponent } from './components/collection-items/collection-items.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    CollectionItemsComponent,
    SearchFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
