import { Component } from '@angular/core';

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  template: `
   <input #todo type="text">
   <button (click)="add(todo.value)">add</button>
   <ul>
     <li *ngFor="let todo of (todos | limit: 8)" (click)="completed(todo.id)" [class.completed]="todo.completed">{{ todo.content }}</li>
   </ul>
   <pre>{{ todos | json }}</pre>
  `,
  styles: []
})
export class TodosComponent  {
  todos: Todo[] = [
    {id: 1, content: 'HTML', completed: true},
    {id: 2, content: 'CSS3', completed: false},
    {id: 3, content: 'JavaScript', completed: false},
    {id: 4, content: 'Angular', completed: false},
    {id: 5, content: 'React.js', completed: false}
  ];

  add(content: string) {
    // this.todos.push({
    //   id: this.getNextId(),
    //   content,
    //   completed: false
    // });
    this.todos = [...this.todos, {id: this.getNextId(), content, completed: false}];
  }

  completed(id: number) {
    this.todos = this.todos.map(
      todo => todo.id === id ? ({...todo, completed: !todo.completed}) : todo
    );
  }

  private getNextId(): number {
    return !this.todos.length ? 1 : Math.max(...this.todos.map(({ id }) => id)) + 1;
  }
}
