import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'https://bloggin-app.onrender.com/article';

  createArticle(article : any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/write`, article, { withCredentials: true });
  }

  getArticleDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, {withCredentials : true})
  }

  getLatestArticles(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/latest`, {withCredentials: true})
  }

  advanceSearch(searchQueryString : string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?q=${searchQueryString}`, {withCredentials: true})
  }

  constructor(private http: HttpClient) { }
}
