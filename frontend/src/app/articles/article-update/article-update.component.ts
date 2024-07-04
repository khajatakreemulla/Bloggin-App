import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {
  article :any = {}
  errorMessage : string = ""
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
      this.articleService.updateArticle(this.formData, this.article.id).subscribe(response=>{
        if(response && response.article && response.success){
          this.router.navigate(["/article/" + response.article.id])
        } else if(response && !response.article && !response.success) {
          this.errorMessage = response.errorMessage
        }
      })
    }
  }

  closeAlert(){
    this.errorMessage = ""
  }

  constructor(private route: ActivatedRoute, private articleService: ArticlesService, private router: Router, private http : HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const articleId = params.get('id'); // Assuming 'id' is the parameter name in your route
      if (articleId) {
        // Call your service method with the extracted articleId
        this.articleService.getArticleDetails(articleId).subscribe(response => {
          if(response && response.success && response.article){
            this.article = response.article
            this.formData.title = this.article.title || '';
            this.formData.description = this.article.description || '';
            this.formData.tags = this.article.tags || '';
            this.formData.featuredImageUrl = this.article.featuredImageUrl || '';
          }
        });
      }
    });
  }

}
