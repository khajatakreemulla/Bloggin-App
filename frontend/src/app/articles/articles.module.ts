import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { FeaturedArticleComponent } from './featured-article/featured-article.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { TrendingArticlesComponent } from './trending-articles/trending-articles.component';
import { EditorsPickComponent } from './editors-pick/editors-pick.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';


@NgModule({
  declarations: [
    FeaturedArticleComponent,
    LatestArticlesComponent,
    ArticleCardComponent,
    TrendingArticlesComponent,
    EditorsPickComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  exports: [
    LatestArticlesComponent,  // Exporting the component to be used in other modules
    FeaturedArticleComponent,
    TrendingArticlesComponent,
    EditorsPickComponent
  ]
})
export class ArticlesModule { }
