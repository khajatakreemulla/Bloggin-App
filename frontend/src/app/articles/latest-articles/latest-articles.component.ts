import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.css']
})
export class LatestArticlesComponent implements OnInit {

  articles : any = [];

  goToDetails(id : string) {
    this.router.navigate(['/article/' + id])
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  constructor(private router : Router, private articleService : ArticlesService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.articleService.getArticleList('latest').subscribe(response=>{
      if(response && response.success && response.articles){
        this.articles = response.articles
      }
    })
  }

}
