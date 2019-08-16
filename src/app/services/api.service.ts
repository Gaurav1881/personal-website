import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpClient) { }

  getData() {
    this.httpService.get('https://personal-website-52d41.firebaseio.com/experiances.json').subscribe(
      (data) => console.log(data)
    );
  }
}
