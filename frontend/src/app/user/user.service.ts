import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/user';

  dashboard(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dashboard`, {withCredentials : true})
  }

  constructor(private http : HttpClient) { }
}
