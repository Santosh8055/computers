import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private configUrl = 'https://api.myjson.com/bins/1e04hg';
	constructor(private http: HttpClient) { }
	getComputers() {
		return this.http.get(this.configUrl);
	}
}
