import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() event = new EventEmitter();
  id: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.id = this.id + 1;
    this.event.emit('Hello, I am Child. Track' + this.id);
  }
}
