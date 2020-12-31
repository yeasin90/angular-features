import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'pipeApp';
  persons = [
    {
      id: 1,
      name: 'David Beckham',
      gender: 0
    },
    {
      id: 2,
      name: 'Kate Winslet',
      gender: 1
    },
    {
      id: 3,
      name: 'Cristiano Ronaldo',
      gender: 0
    }
  ]

}
