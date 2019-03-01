import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// BrowserAnimationModule import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material.module';
// Material Table Component
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

// Feature Module import
import { BookSearchModule } from './book-search/book-search.module';
import { MovieSearchModule } from './movie-search/movie-search.module';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { TextColorDirective } from './text-color.directive';
import { BookPricePipe } from './book-price.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextColorDirective,
    BookPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    BookSearchModule,
    MovieSearchModule,
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
