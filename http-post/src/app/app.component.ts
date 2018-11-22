import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';



@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="content" placeholder="todo">
    <button (click)="addTodo()">Add</button>
    <ul>
      <li *ngFor="let todo of todos" [class.completed]="!todo.completed">
      {{ todo.content }}
      <button (click)="toggleTodo(todo)">change</button>
      <button (click)="removeTodo(todo.id)">remove</button>
      </li>
    </ul>
    <pre> {{ todos | json }}</pre>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[];
  content: string;


  constructor(private todo: TodoService) {}

  ngOnInit() {
    this.todo.getAll()
      .subscribe(
        todos => this.todos = todos,
        error => console.error('[TodoService.getAll]', error)
      );
  }

  addTodo() {
    if (!this.content) { return ; }

    this.todo.add(this.content)
      .subscribe(
        todo => this.todos = [...this.todos, todo],
        error => console.error('[TodoService.add]', error)
      );
      this.content = '';
  }

  changeTodo(todo: Todo) {
    this.todo.change(todo)
      .subscribe(
        newTodo => this.todos = this.todos.map(
          todo => todo.id === newTodo.id ? newTodo : todo
        ),
        error => console.error('[TodoService.change]', error)
      );
  }

  toggleTodo(todo: Todo) {
    this.todo.toggle(todo)
      .subscribe(
        newTodo => this.todos = this.todos.map(
          todo => todo.id === newTodo.id ? newTodo : todo
        ),
        error => console.error('[TodoService.toggle]', error)
      );
  }

  removeTodo(id: number) {
    this.todo.remove(id)
      .subscribe(
        () => this.todos = this.todos.filter(todo => todo.id !== id),
        error => console.error('[TodoService.remove]', error)
      );
  }
}
