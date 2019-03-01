import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';

import { HttpSupportService } from '../http-support.service';
import { JSON_DATA_CONFIG, JsonConfig } from './json-config';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  providers: [
    // HttpSupportService
    // 축약형
    {
      provide: HttpSupportService,
      useClass: HttpSupportService
    },
    {
      provide: JsonConfig,
      useValue: JSON_DATA_CONFIG
    }
  ]
})
export class SearchBoxComponent implements OnInit {

  _bookCategory: string;
  //@Input() bookCategory:string;
  //@Input('bookCategory') mySelected:string;

  @Input('seletedValue') selectedValue: string;

  @Input()
  set bookCategory(value: string) {
    if ( value != null ) {
      // 추가적인 작업이 들어올 수 있습니다.
      this._bookCategory = 'category: ' + value;
    } else {
      this._bookCategory = value;
    }

  }

  @Output() searchEvent = new EventEmitter();

  keyword = null;

  constructor(private httpSupportService: HttpSupportService, private jsonConfig: JsonConfig) { }

  ngOnInit() {
  }

  setKeyword(keyword: string): void {
    this.keyword = keyword;
    this.searchEvent.emit({
      keyword : `${this.keyword}`,
      category: `${this._bookCategory.replace('category: ', '')}`
    });

    this.httpSupportService.getJsonData(this.jsonConfig.url, this.jsonConfig.name, this.selectedValue, this.keyword);
  }

  inputChange(): void {

  }
}
