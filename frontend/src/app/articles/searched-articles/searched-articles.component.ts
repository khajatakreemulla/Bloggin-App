import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-searched-articles',
  templateUrl: './searched-articles.component.html',
  styleUrls: ['./searched-articles.component.css']
})
export class SearchedArticlesComponent implements OnInit {
  searchQuery: string = ""
  articles: any = [] ;

  navigateToBlog(id: string){
    this.router.navigate(["/article/" + id])
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer, private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    const query = params['q'];
    this.articleService.advanceSearch(query).subscribe(response=>{
      if(response && response.success && response.articles){
        this.searchQuery = query
        console.log(response.articles)
        this.articles = response.articles
      }
    })
  })
  }

}
