import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number):Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAll():Food[]{
    return [
      {
        id:1,
        name:'Pasta aglio olio e peperoncino',
        cookTime:'10',
        price: 9,
        imageUrl:'/assets/image/foods/aglio-olio.jpg',

      },
      {
        id:2,
        name:'Pasta carbonara',
        cookTime:'25',
        price: 11,
        imageUrl:'/assets/image/foods/carbonara.jpg',

      },
      {
        id:3,
        name:'Filetto di manzo',
        cookTime:'10',
        price: 17,
        imageUrl:'/assets/image/foods/filetto-manzo.jpg',

      },
      {
        id:4,
        name:'Fiorentina',
        cookTime:'15-20',
        price: 25,
        imageUrl:'/assets/image/foods/fiorentina.jpg',

      },
      {
        id:5,
        name:'Hamburger',
        cookTime:'40-55',
        price: 7,
        imageUrl:'/assets/image/foods/hamburger.jpg',

      },
      {
        id:6,
        name:'Patatine fritte',
        cookTime:'25',
        price: 5,
        imageUrl:'/assets/image/foods/patatine.jpg',

      },
      
     
      
      
      
      
    ]
  }
}
