import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

interface ErrorMessage {
  title: string;
  message: string;
}

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
    <pre>{{ todos | json }}</pre>
    <h3 class="title">{{ error.title }}</h3>
    <p class="message">{{ error.message }}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[];
  error: ErrorMessage;
  url = 'http://localhost:3000/todos';

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http.get<Todo[]>(this.url)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(
        todos => this.todos = todos,
        (error: ErrorMessage) => this.error = error
      );
  }

  private handleError(error: HttpErrorResponse) {
    let message = '';

    if ( error.error instanceof ErrorEvent ) {
      console.error(`Client-side error: ${error.error.message}`);
      message = error.error.message;
    } else {
      console.error(`Server-side error: ${error.status}`);
      message = error.message;
    }

    return throwError({
      title: 'Something wrong! please try again later.',
      message
    });
  }
}
