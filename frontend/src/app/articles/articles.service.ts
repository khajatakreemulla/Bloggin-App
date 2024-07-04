import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = `${environment.baseUrl}/article`;

  createArticle(article : any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/write`, article, { withCredentials: true });
  }

  updateArticle(article: any, id: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/update`, article, {withCredentials: true})
  }

  getArticleDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, {withCredentials : true})
  }

  getArticleList(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/list?${query}=true`, {withCredentials: true})
  }

  advanceSearch(searchQueryString : string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?q=${searchQueryString}`, {withCredentials: true})
  }

  constructor(private http: HttpClient) { }
}
