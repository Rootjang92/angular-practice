import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from './todo.interface';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  add(content: string): Observable<Todo> {
    const payload = { content, completed: false};
    return this.http.post<Todo>(this.url, payload)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let message = '';

    if (error.error instanceof ErrorEvent) {
      console.error(`Client-side error: ${error.error.message}`);
      message = error.error.message;
    } else {
      console.error(`Server-side  error: ${error.status}`);
      message = error.message;
    }

    return throwError({
      title: 'Something wrong!',
      message
    });
  }

  change(todo: Todo) {
    const payload = {
      content: 'Angular',
      completed: !todo.completed
    };

    const url = `${this.url}/$[todo.id}`;
    return this.http.put<Todo>(url, payload)
      .pipe(catchError(this.handleError));
  }

  toggle(todo: Todo) {
    const payload = {
      completed: !todo.completed
    };

    const url = `${this.url}/${todo.id}`;
    return this.http.patch<Todo>(url, payload)
      .pipe(catchError(this.handleError));
  }

  remove(id: number) {
    const url = `${this.url}/${id}`;

    return this.http.delete(url)
      .pipe(catchError(this.handleError));
  }
}
