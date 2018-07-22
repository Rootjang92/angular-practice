import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos.component';
import { LimitPipe } from './limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LimitPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
