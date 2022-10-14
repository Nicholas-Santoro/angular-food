import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/image/foods/aglio-olio.jpg',
      '/assets/image/foods/carbonara.jpg',
      '/assets/image/foods/hamburger.jpg',
      '/assets/image/foods/filetto-manzo.jpg',
      '/assets/image/foods/fiorentina.jpg',
      '/assets/image/foods/patatine.jpg',
      
    ]
  }
}
