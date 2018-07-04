import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
	selector: 'computers',
	templateUrl: './computers.component.html',
	styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
	public computers: any = [];
	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.dataService.getComputers().subscribe((result) => {
			this.computers = result;
		});
	}

}
