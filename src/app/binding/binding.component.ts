import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  message = "howdy y'all";
  imgSRC = 'https://http.cat/599';
  isLoggedIn = true;
  customHTML = '<i>itallic!!</i>';
  dummyInput = 'enter something 😒';

  btn2S = 'Login';
  btn5S = true;

  mouseEventText = 'Imma Handle MouseEvents';

  skills = ['Java', 'JavaScript', 'GoLang', 'Elixir'];

  user = {
    name: 'Ranjith',
    city: 'London',
  };

  products = [
    {
      id: 1,
      name: 'Chair',
    },
    {
      id: '2',
      name: 'Table',
    },
  ];

  userCity: string = 'Chennai';
  public tourRecommender = [
    { city: 'Chennai', mustVisit: 'Mahaballipuram' },
    { city: 'Vizag', mustVisit: 'Kailashgiri' },
    { city: 'Kashmir', mustVisit: 'Dal lake' },
  ];

  recResult(): any {
    let result = this.tourRecommender.find((a) => a.city == this.userCity);
    // console.log(userCity);
    return result?.mustVisit; //optional chaining circumvents undefined
  }

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.btn2S === 'Login') {
        this.btn2S = 'LogOut';
      } else {
        this.btn2S = 'Login';
      }
    }, 2000);

    setInterval(() => {
      if (this.btn5S) {
        this.btn5S = false;
      } else this.btn5S = true;
    }, 5000);
  }

  greet(): string {
    return 'hiya';
  }

  greetUser(userName: string): string {
    return `${userName}`;
  }

  isValid(): boolean {
    return true;
  }

  userIn = '';
  updateInput(e: any) {
    this.userIn = e.target.value;
  }

  showAlert() {}
  changeMessage() {}
  restoreMessage() {}
}
