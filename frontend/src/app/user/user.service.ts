import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.baseUrl}/user`;

  dashboard(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dashboard`, {withCredentials : true})
  }

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`, {withCredentials: true})
  }

  updateUserDetails(data: Object, userId: string,): Observable<any> {
    return this.http.post(`${this.apiUrl}/profile/${userId}`, data, {withCredentials: true})
  }

  constructor(private http : HttpClient) { }
}
