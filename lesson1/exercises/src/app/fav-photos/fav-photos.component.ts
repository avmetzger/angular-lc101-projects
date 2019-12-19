import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Look at this good cat';
  image1 = '../../assets/img/0b8af63e-01d1-49b8-bc49-5316c3724dd6.jpg';
  image2 = '../../assets/img/2c1c5efc-43f1-4749-9a1e-ab26008044a0.jpg';
  image3 = '../../assets/img/5ff155d2-baa9-4965-affd-b8f1f63545e1.jpg';
  constructor() { }

  ngOnInit() {
  }

}