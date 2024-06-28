import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable : true,
    height: "200px",
    toolbarHiddenButtons: [
      ['insertImage', "insertVideo"]
    ]
  }

  formData = {
    title: '',
    description: '',
    tags: '',
    featuredImageUrl: ''
  };

  onSubmit() {
    if(this.formData){
      this.articleService.createArticle(this.formData).subscribe(response=>{
        if(response && response.article && response.success){
          this.router.navigate(["/article/" + response.article.id])
        } else if(response && response.message && !response.success) {
  
        }
      })
    }
  }


  constructor(private articleService: ArticlesService, private router: Router, private http : HttpClient) { }

  ngOnInit(): void {
  }

}
