import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'add-computer',
	templateUrl: './add-computer.component.html',
	styleUrls: ['./add-computer.component.scss']
})
export class AddComputerComponent implements OnInit {

	private computerDetails = {
		name: "",
		ip: "",
		mac: "",
		onCreate: "",
		location: ""
	};

	private submitComputer(){
		console.log(this.computerDetails);
	}

	constructor() { }

	ngOnInit() {
	}

}
