import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'computer-group',
  templateUrl: './computer-group.component.html',
  styleUrls: ['./computer-group.component.scss']
})
export class ComputerGroupComponent implements OnInit {

  @Input() computers: any[];

  constructor() { }

  ngOnInit() {
  }

}
