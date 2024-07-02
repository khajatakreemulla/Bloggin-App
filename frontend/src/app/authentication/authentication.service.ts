import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = `${environment.baseUrl}/auth`;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkAuthenticationStatus().subscribe();
  }

  signup(email: string, fullName: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, { email, fullName, password }, { withCredentials: true });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }, { withCredentials: true }).pipe(
      tap(response => {
        console.log('Login response:', response);
        if (response.success) {
          this.isAuthenticatedSubject.next(true);
        }
      }),
      map(response => response)
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).pipe(
      tap(response => {
        console.log('Logout response:', response);
        this.isAuthenticatedSubject.next(false);
      }),
      map(response => response)
    );
  }

  isAuthenticated(): Observable<{ success: boolean, userProfilePic: string }> {
    return this.http.get<{ success: boolean, userProfilePic: string }>(`${this.apiUrl}/is-authenticated`, { withCredentials: true }).pipe(
      tap(response => {
        console.log('Is authenticated response:', response);
        this.isAuthenticatedSubject.next(response.success);
      }),
      map(response => response)
    );
  }

  getAuthenticationStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  private checkAuthenticationStatus(): Observable<any> {
    return this.isAuthenticated();
  }
}
