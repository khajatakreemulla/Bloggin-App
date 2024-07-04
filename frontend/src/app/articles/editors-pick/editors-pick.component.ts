import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-editors-pick',
  templateUrl: './editors-pick.component.html',
  styleUrls: ['./editors-pick.component.css']
})
export class EditorsPickComponent implements OnInit {
  articles : any = [];
  constructor(private articleService : ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getArticleList("editorPick").subscribe(response=>{
      if(response && response.success && response.articles){
        this.articles = response.articles
      }
    })
  }

}
