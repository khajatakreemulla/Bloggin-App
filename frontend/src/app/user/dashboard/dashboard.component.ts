import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  articles: any = [] ;

  articlesBackend = []

  navigateToBlog(id: string){
    this.router.navigate(["/article/" + id])
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  constructor(private router : Router, private userService: UserService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.userService.dashboard().subscribe(userArticles=>{
      this.articles = userArticles.articles
    })
  }

}
