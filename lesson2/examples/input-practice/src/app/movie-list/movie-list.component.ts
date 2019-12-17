import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }
   addMovie(newTitle: string) {
      let errorMsg: string = '';
      if (this.movies.includes(newTitle)){
         errorMsg= `${newTitle} is already in your movie list.`;
      } else if (newTitle === ''){
         errorMsg=`Please enter a movie title`;
      } else{
         this.movies.push(newTitle);
      }
      return errorMsg;
   }
}