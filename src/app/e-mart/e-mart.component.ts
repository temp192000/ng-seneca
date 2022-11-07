import { Component, OnInit } from '@angular/core';
import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-e-mart',
  templateUrl: './e-mart.component.html',
  styleUrls: ['./e-mart.component.css'],
})
export class EMartComponent implements OnInit {
  productList: any = [];
  constructor(private getDB: DatafetchService) {}
  ngOnInit(): void {
    this.getDB
      .getAPI('https://fakestoreapi.com/products')
      .subscribe((response: any) => (this.productList = response));
  }
}
