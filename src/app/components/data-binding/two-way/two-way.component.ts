import { Component, OnInit } from '@angular/core';
import { Address } from '../models/address';
import { Student } from '../models/student';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  groups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-'];

  addressModel = new Address("Street name", "City name", "State name");
  studentModel = new Student("Full name", "your email", 7878787878, "male", "MCA", true, "A+", this.addressModel)

  SubmitDetails(studentData) {
    console.log(studentData);
  }
  constructor() { }
  ngOnInit() {
  }
  nameChanged(arg) {
    console.log("ngModelChange fired. " + arg);
  }
}
