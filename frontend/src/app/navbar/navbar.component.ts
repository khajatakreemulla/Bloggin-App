import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private articleService: ArticlesService, private router: Router) { }

  advanceSearch(q: string){
    this.router.navigate(['/article/search'], { queryParams: { q: q } });
  }

  ngOnInit(): void {
  }

}
