import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/Book';
import { BookService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  books: Book[] = [];

  isShowing: boolean = false;

}
