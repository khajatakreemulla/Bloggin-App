import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() article: any;

  goToDetails(id : string) {
    this.router.navigate(["/article/" + id])
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  constructor(private router : Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
