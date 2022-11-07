import { Component, OnInit } from '@angular/core';
import { DatafetchService } from '../datafetch.service';
// import books from 'src/sampleDB/books.json';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css'],
})
export class BookStoreComponent implements OnInit {
  // book = books; // for import books from 'src/sampleDB/books.json';

  book: any = [];
  constructor(private bookDB: DatafetchService) {}
  ngOnInit(): void {
    // this.book = this.bookDB.getDataLoDB();
    this.bookDB
      .getAPI(
        'https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books'
      )
      // .subscribe((response: any) => (this.book = response));
      .subscribe((response: any) => {
        this.book = response;
        console.log(typeof this.book.cover_image);
      });
  }
}
