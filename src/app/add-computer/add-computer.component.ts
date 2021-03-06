import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
	selector: 'add-computer',
	templateUrl: './add-computer.component.html',
	styleUrls: ['./add-computer.component.scss']
})
export class AddComputerComponent implements OnInit {

	public computerDetails = {
		name: "",
		ip: "",
		mac: "",
		onCreate: "",
		location: ""
	};

	public submitComputer() {
		var details = JSON.stringify(this.computerDetails);
		if (this.computerDetails.name !== '' &&
			this.computerDetails.ip !== '' &&
			this.computerDetails.mac !== '' &&
			this.computerDetails.location !== '') {
			this.dataService.addComputers(details).subscribe((result) => {
				console.log(result);
				alert('computer added');
				this.computerDetails = {
					name: "",
					ip: "",
					mac: "",
					onCreate: "",
					location: ""
				}
			});
		} else {
			alert('fill all details');
		}
	}

	constructor(private dataService: DataService) { }

	ngOnInit() {
	}

}
