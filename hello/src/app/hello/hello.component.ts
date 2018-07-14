import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HELLOComponent  {
  name: string;

  setName(name: string) {
    this.name = name;
  }
}
