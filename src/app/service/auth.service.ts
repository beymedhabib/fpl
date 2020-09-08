import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BaseUrl = environment.baseuri;
  constructor(private http: HttpClient, private router: Router) { }

  Register(data) {
    const url = `${this.BaseUrl}/auth/register`;
    return this.http.post(url, data);
  }
  Login(data) {
    const url = `${this.BaseUrl}/auth/login`;
    return this.http.post(url, data);
  }


}
