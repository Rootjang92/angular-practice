import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ greeting }}</p>
    <router-outlet></router-outlet>
  `,
  providers: [GreetingService],
  styles: []
})
export class AppComponent {
  greeting: string;
  // greetingService: GreetingService;

  constructor(private greetingService: GreetingService) {
    // this.greetingService = new GreetingService();
    // 서비스 인스턴스 직접 생성
  }
  sayHi() {
    this.greeting = this.greetingService.sayHi();
  }
}
