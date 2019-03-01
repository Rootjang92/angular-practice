import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// routing
import { HomeComponent } from '../pages/home/home.component';
import { BookSearchMainComponent } from '../book-search/book-search-main/book-search-main.component';
import { MoviewSearchMainComponent } from '../movie-search/moview-search-main/moview-search-main.component';


const routers: Routes = [
  { path : '', component : HomeComponent },
  { path : 'book', component : BookSearchMainComponent },
  { path : 'movie', component : MoviewSearchMainComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
