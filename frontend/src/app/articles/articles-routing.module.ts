import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path : "article/:id", component: ArticleDetailsComponent},
  { path : "user/write", component : CreateArticleComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
