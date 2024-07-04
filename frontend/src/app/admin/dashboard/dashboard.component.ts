import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/articles/articles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles : any = []

  publishArticle(id: string){}
  featureArticle(id: string){}
  markAsEditorPick(id: string){}
  deleteArticle(id: string){}
  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getArticleList('admin').subscribe(response=>{
      if(response && response.success && response.articles){
        this.articles = response.articles
      }
    })
  }

}
