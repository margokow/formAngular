import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './liste-course.component.html',
  styleUrl: './liste-course.component.css'
})
export class ListeCourseComponent {

  articles: string[] = [];

  newArticle!: string;

  addArticle(){

    this.articles.push(this.newArticle);
    this.newArticle = "";

    console.log(this.articles)
  }

}
