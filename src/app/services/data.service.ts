import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};
@Injectable({
	providedIn: 'root'
})
export class DataService {
	private getComputerUrl = 'https://api.myjson.com/bins/1e04hg';
	private addComputerUrl = 'https://jsonplaceholder.typicode.com/posts';

	constructor(private http: HttpClient) { }
	getComputers() {
		return this.http.get(this.getComputerUrl);
	}

	addComputers(computer) {
		return this.http.post<any>(this.addComputerUrl, computer, httpOptions);
	}
}
