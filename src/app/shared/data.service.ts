import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  private products = [
    {
      id: 1,
      name: 'egg',
      category: 'Food',
      description: 'Lorem egg',
      price: 1
    },
    {
      id: 2,
      name: 'Coca cola',
      category: 'Drink',
      description: 'Lorem drink',
      price: 12
    },
    {
      id: 3,
      name: 'Cookie',
      category: 'Food',
      description: 'Lorem cookie',
      price: 5
    }
  ];

  getAllProducts(){
    return this.products;
  }

  getProductById(id){
    return this.products.filter((product) => product.id == id);
  }
}
