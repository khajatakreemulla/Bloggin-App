import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailsComponent implements OnInit {
  article : any = {}
  latestArticles : any = [];
  featuredArticles : any = [];
  editorsPicks : any = [];

  constructor(private articleService : ArticlesService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const articleId = params.get('id'); // Assuming 'id' is the parameter name in your route
      if (articleId) {
        // Call your service method with the extracted articleId
        this.articleService.getArticleDetails(articleId).subscribe(response => {
          if(response && response.success && response.article){
            this.article = response.article
          }
        });
      }
      this.articleService.getArticleList('latest').subscribe(response=>{
          if(response && response.success && response.articles){
            this.latestArticles = response.articles.filter((articleResponse: { id: string | null; }) => articleId !== articleResponse.id)
          }
      })
      this.articleService.getArticleList('featured').subscribe(response=>{
        if(response && response.success && response.articles){
          this.featuredArticles = response.articles.filter((articleResponse: { id: string | null; }) => articleId !== articleResponse.id)
        }
      })
      this.articleService.getArticleList('editorPick').subscribe(response=>{
        if(response && response.success && response.articles){
          this.editorsPicks = response.articles.filter((articleResponse: { id: string | null; }) => articleId !== articleResponse.id)
        }
      })
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
