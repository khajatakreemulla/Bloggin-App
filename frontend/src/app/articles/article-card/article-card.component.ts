import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
