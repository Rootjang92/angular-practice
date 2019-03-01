import {Component, OnInit,
  ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'app-book-search-main',
  templateUrl: './book-search-main.component.html',
  styleUrls: ['./book-search-main.component.css',
  ]
})

export class BookSearchMainComponent implements OnInit {

  selectedValue = null;
  displayCategoryName = null;

  bookCaterory = [
  {value: 'all', viewValue: '국내외도서'},
  {value: 'country', viewValue: '국내도서'},
  {value: 'foreign', viewValue: '국외도서'}
  ];

  searchTitle = null;

  constructor() { }

  ngOnInit() {
  }

  changeValue(category: string): void {
    for(let element of this.bookCaterory ) {
      if(element.value == category) {
        this.displayCategoryName = element.viewValue;
      }
    }
  }

  changeTitleBar(searchInfo) : void {
    this.searchTitle = `${searchInfo.keyword} ( ${searchInfo.category} )`;
  }

  @ViewChild(SearchBoxComponent) searchComp: SearchBoxComponent;
  @ViewChildren(SearchBoxComponent) searchCompArr: QueryList<SearchBoxComponent>;

  clearCondition(): void {
    this.selectedValue = null;
    this.searchTitle = null;
  /*
  @ViewChild를 사용할 경우
  this.searchComp._bookCategory = null;
  this.searchComp.keyword = null;
  */
  // @ViewChildren을 사용할 경우
    this.searchCompArr.toArray()[0]._bookCategory = null;
    this.searchCompArr.toArray()[0].keyword = null;

  }
}
