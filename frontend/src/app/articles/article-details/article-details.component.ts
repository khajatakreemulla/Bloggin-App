import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  constructor(private articleService : ArticlesService) { }
  
  ngOnInit(): void {
    this.articleService.getArticleDetails("id").subscribe(article=>{
      console.log(article)
    })
  }

}
