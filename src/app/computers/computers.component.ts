import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  public computers = [{
    id: 1,
    name: "test",
    ipAddress: "0.0.0.1",
    mac: "00-14-22-01-23-45",
    createOn: "null",
    location: "Hyderabad"
  }, {
    id: 1,
    name: "test",
    ipAddress: "0.0.0.1",
    mac: "00-14-22-01-23-45",
    createOn: "null",
    location: "Hyderabad"

  }, {
    id: 1,
    name: "test",
    ipAddress: "0.0.0.1",
    mac: "00-14-22-01-23-45",
    createOn: "null",
    location: "Hyderabad"
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
