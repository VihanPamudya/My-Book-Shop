import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../interface/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book
  ngOnInit(): void {

  }

  constructor(private cartService: CartService){}

  addToCart() {
    this.cartService.add(this.book)
  }

}
