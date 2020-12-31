import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  constructor() { }
  parentMessage = {
    message: 'Hello, I am parent',
    id: 1
  }
  ngOnInit(): void {
  }

}
