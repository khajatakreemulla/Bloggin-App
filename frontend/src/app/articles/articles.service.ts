import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'http://localhost:3000/article';

  createArticle(article : any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/write`, article, { withCredentials: true });
  }

  constructor(private http: HttpClient) { }
}
