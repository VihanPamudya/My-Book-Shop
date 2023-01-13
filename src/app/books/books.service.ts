import {Injectable} from '@angular/core'

@Injectable()

export class BookService{
    constructor(){}

    getBooks(){
        return [
            {
              name: 'Clean Code',
              author: 'Robert C Martin',
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo',
              amount: 700
        
            }, {
              name: 'Clean Code',
              author: 'Robert C Martin',
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo',
              amount: 800
            }
          ]
    }
}