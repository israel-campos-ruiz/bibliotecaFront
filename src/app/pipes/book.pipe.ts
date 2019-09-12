import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'book'
})
export class BookPipe implements PipeTransform {

  transform(book: any): any {
    let url = 'http://localhost:3000/'
    if(book.img){
      return url + book.img;
    }
  }

}
