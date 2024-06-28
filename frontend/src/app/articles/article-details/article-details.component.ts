import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article : any
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
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
