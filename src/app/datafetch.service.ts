import { Injectable } from '@angular/core';
// import bookStore from '../sampleDB/books.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatafetchService {
  // constructor() {}
  constructor(private http: HttpClient) {}

  // getDataLoDB(): object {
  //   const books = bookStore;
  //   return books;
  // }

  getAPI(url: string): any {
    return this.http.get(url);
  }
}
