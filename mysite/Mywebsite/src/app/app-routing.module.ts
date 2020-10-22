import { ApiobfComponent } from './apiobf/apiobf.component';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog/blog.component';
import { ContentComponent } from './content/content.component';
import { IntroComponent } from './intro/intro.component';
import { PricingComponent } from './pricing/pricing.component';
import { ClientsComponent } from './clients/clients.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HeaderComponent},
  {path: 'about', component: IntroComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'services', component: ContentComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'apiobf', component: ApiobfComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
