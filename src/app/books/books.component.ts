import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
 
  ngOnInit(): void {
  }

  books: Book[] = [
    {
      name : 'Clean Code',
      author : 'Robert C Martin',
      src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo',
      amount: 700
    
    },{
      name : 'Clean Code',
      author : 'Robert C Martin',
      src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo',
      amount: 800
    }
  ]

  isShowing: boolean = false;

  show(){
    this.isShowing = !this.isShowing;
  }

}
