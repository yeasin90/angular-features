import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit, AfterViewInit {
  @ViewChild(Child3Component) child;
  viewChildData: string;

  constructor() { }

  ngAfterViewInit(): void {
    this.viewChildData = this.child.viewChildData;
  }

  ngOnInit(): void {
  }

}
