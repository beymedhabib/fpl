import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BaseUrl = environment.baseuri;
  constructor(private http: HttpClient, private router: Router) { }

  addsujet(data, id) {
    const url = `${this.BaseUrl}/user/addsujet/${id}`;
    return this.http.post(url, data);
  }

  getsujetbyid(id) {
    const url = `${this.BaseUrl}/user/getsujet/${id}`;
    return this.http.get(url);
  }
  getallsujet() {
    const url = `${this.BaseUrl}/user/getallsujet`;
    return this.http.get(url);
  }
  sujetbyid(id) {
    const url = `${this.BaseUrl}/user/getsujetbyid/${id}`;
    return this.http.get(url);
  }
  oui(id, user) {
    const url = `${this.BaseUrl}/user/oui/${user}/${id}`;
    return this.http.get(url);
  }
  no(id, user) {
    const url = `${this.BaseUrl}/user/no/${user}/${id}`;
    return this.http.get(url);
  }
}
