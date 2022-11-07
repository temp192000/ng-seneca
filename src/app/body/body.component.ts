import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  template: `
    <app-header></app-header>
    <p>body works!</p>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
