import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  @Input() details: any;

  public objectKeys(obj) {
    return Object.keys(obj);
  }
  constructor() { }

  ngOnInit() {
  }

}
