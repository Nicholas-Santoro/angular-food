import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/image/foods/aglio-olio-peperoncino.jpg',
      '/assets/image/foods/carbonara.jpeg',
      '/assets/image/foods/zuppa-patate-cipolle.jpg',
      '/assets/image/foods/hamburger.jpg',
      '/assets/image/foods/filetto-manzo.jpg',
      '/assets/image/foods/fiorentina.jpg',
      '/assets/image/foods/patatine.jpg',
      
    ]
  }
}
