import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.css']
})
export class FeaturedArticleComponent implements OnInit {

  articles : any = [];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getArticleList('featured').subscribe(response=>{
      if(response && response.success && response.articles){
        this.articles = response.articles
      }
    })
  }

}
