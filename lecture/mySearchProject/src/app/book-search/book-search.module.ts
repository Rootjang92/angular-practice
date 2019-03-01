import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/core';
import { BookSearchMainComponent } from '../book-search/book-search-main/book-search-main.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';
import { ListBoxComponent } from './list-box/list-box.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';

import { COMPOSITION_BUFFER_MODE } from '@angular/forms';



@NgModule({
  declarations: [BookSearchMainComponent, SearchBoxComponent, DetailBoxComponent, ListBoxComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [
    {
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    }
  ],
})
export class BookSearchModule { }
