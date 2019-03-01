import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import {HttpSupportService} from '../http-support.service';
import { SelectionModel } from '@angular/cdk/collections';

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

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent  {
  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books: IBook[];

  // event
  // 사용자가 선택한 row에 대한 정보 획득.
  selection = new SelectionModel<IBook>(false, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpSupportService: HttpSupportService) {
    this.httpSupportService.updateBooks.subscribe(data => {
      this.books = data;
      this.dataSource = new MatTableDataSource<IBook>(this.books);
      this.dataSource.paginator = this.paginator;
    });
  }

  rowSelect(row) {
    this.selection.select(row);
    this.httpSupportService.updateSelectedBook.next(this.selection.selected[0]);
  }

}
