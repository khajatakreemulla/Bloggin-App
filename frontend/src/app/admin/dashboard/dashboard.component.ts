import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/articles/articles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles : any = []

  publishArticle(article: any, id: string){
    article.publishingStatus = "published"
    this.articleService.updateArticle(article, id).subscribe(response=>{
      if(response && response.success && response.article){
        this.router.navigate(['/admin/dashboard'])
      }
    })
  }
  featureArticle(article:any, id: string){
    article.featured = true
    this.articleService.updateArticle(article, id).subscribe(response=>{
      if(response && response.success && response.article){
        this.router.navigate(['/admin/dashboard'])
      }
    })
  }
  markAsEditorPick(article: any, id: string){
    article.editorPick = true
    this.articleService.updateArticle(article, id).subscribe(response=>{
      if(response && response.success && response.article){
        this.router.navigate(['/admin/dashboard'])
      }
    })
  }
  deleteArticle(article:any, id: string){
    article.deleted = true
    this.articleService.updateArticle(article, id).subscribe(response=>{
      if(response && response.success && response.article){
        this.router.navigate(['/admin/dashboard'])
      }
    })
  }
  constructor(private articleService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.articleService.getArticleList('admin').subscribe(response=>{
      if(response && response.success && response.articles){
        this.articles = response.articles
      }
    })
  }

}
