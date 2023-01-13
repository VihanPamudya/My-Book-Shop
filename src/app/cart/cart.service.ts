import { Injectable } from '@angular/core';
import { Book } from '../interface/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<Book> = [];

  constructor() { }

  add(book:Book){
    this.cart.push(book);
  }
}
