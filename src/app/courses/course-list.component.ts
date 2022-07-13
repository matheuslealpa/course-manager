import {Component, OnInit} from "@angular/core";
import {Courses} from "./courses";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit{
  courses: Courses[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular Forms',
        imageUrl: '/assets/img/forms.png',
        price: 99.9,
        code: 'ANG-0125',
        duration: 120,
        rating: 4.5,
        releaseDate: 'January 10, 2022'
      },
      {
        id: 2,
        name: 'Java',
        imageUrl: '/assets/img/http.png',
        price: 108.9,
        code: 'JAR-0125',
        duration: 80,
        rating: 1,
        releaseDate: 'May 18, 2022'
      }
    ]
  }



}
