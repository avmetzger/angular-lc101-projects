import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some of my favorite cats';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = '../../assets/img/2c1c5efc-43f1-4749-9a1e-ab26008044a0.jpg';
  image3 = '../../assets/img/5ff155d2-baa9-4965-affd-b8f1f63545e1.jpg';
  

  constructor() { }

  ngOnInit() {
  }

}