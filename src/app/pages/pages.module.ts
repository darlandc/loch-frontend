import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [HomeComponent, PostComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
