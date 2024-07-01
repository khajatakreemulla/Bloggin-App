import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'https://devwrite-green.vercel.app/auth';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkAuthenticationStatus().subscribe();
   }

  signup(email: string, fullName : string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, { email, fullName, password }, { withCredentials: true });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }, { withCredentials: true }).pipe(
      // Manually update the authentication status based on response message
      map(response => {
        if (response.success) {
          this.isAuthenticatedSubject.next(true);
        }
        return response;
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).pipe(
      map(response => {
          this.isAuthenticatedSubject.next(false);
        return response;
      })
    );
  }

  isAuthenticated(): Observable<{ success: boolean, userProfilePic: string }> {
    return this.http.get<{ success: boolean,  userProfilePic: string }>(`${this.apiUrl}/is-authenticated`, { withCredentials: true }).pipe(
      // Manually update the authentication status based on response message
      map(response => {
        this.isAuthenticatedSubject.next(response.success);
        return response;
      })
    );
  }

  getAuthenticationStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  private checkAuthenticationStatus(): Observable<any> {
    return this.isAuthenticated();
  }

}
