import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

interface IBook {
  bauthor: string;
  bdate: string;
  btranslator: string;
  bpublisher: string;
  btitle: string;
  bprice: number;
  bisbn: string;
  bimgurl: string;
}

@Injectable({
  providedIn: 'root'
})

export class HttpSupportService {

  books: IBook[];

  // Client에 의해 선택된 책의 정보 - 초기화
  selectedBook: IBook = {
    bauthor: '',
    bdate: '',
    btranslator: '',
    bpublisher: '',
    btitle: '',
    bprice: 0,
    bisbn: '',
    bimgurl: ''
  };

  constructor(private http: HttpClient) { }

  updateBooks: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>(this.books);
  updateSelectedBook: BehaviorSubject<IBook> = new BehaviorSubject<IBook>(this.selectedBook);

  getJsonData(url: string, name: string, category: string, keyword: string) {
    this.http.get<IBook[]>(`${url}${name}`)
      .subscribe(res => {
        let tmp = null;
        if (category == 'all') {
          tmp = res.filter((item, idx, arr) => {
            if (item.btitle.includes(keyword)) {
              return true;
            } else {
              return false;
            }
          });
        } else if ( category == 'country') {
          tmp = res.filter((item, idx, arr) => {
            if (item.btitle.includes(keyword)) {
              return true;
            } else {
              return false;
            }
          }).filter((item, idx, arr) => {
            if (item.btranslator == '') {
              return true;
            } else {
              return false;
            }
          });
        } else if (category == 'foreign') {
          tmp = res.filter((item, idx, arr) => {
            if (item.btitle.includes(keyword)) {
              return true;
            } else {
              return false;
            }
          }).filter((item, idx, arr) => {
            if (item.btranslator != '') {
              return true;
            } else {
              return false;
            }
          });
        }
        // this.books = tmp;
        this.updateBooks.next(tmp);
      });
  }

  getBooks(): IBook[] {
    return this.books;
  }
}
