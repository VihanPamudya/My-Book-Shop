import {Injectable} from '@angular/core'

@Injectable()

export class BooksService{
  constructor() {}

  getBooks() {
    return [
      {
        name: 'clean code',
        author: 'robert c martin',
        src:
          'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg',
        amount: 700,
      },
      {
        name: 'pragmatic programmer',
        author: 'david thomas',
        src: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
        amount: 800,
      },
      {
        name: 'Art of Computer Programming',
        author: 'Donald John Fuller',
        src:
          'https://images-na.ssl-images-amazon.com/images/I/41gCSRxxVeL._SY429_BO1,204,203,200_.jpg',
        amount: 18300,
      },
      {
        name: 'Introduction to Algorithms',
        author: 'T Cormen',
        src:
          'https://images-na.ssl-images-amazon.com/images/I/41VndKVtiXL._SX442_BO1,204,203,200_.jpg',
        amount: 1500,
      },
    ];
  }
}