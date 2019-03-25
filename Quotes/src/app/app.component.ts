import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: string[]
  constructor(){
    this.quotes = ['It s not lack of love,but a lack of friendship that makes unhappy marriages.','We accept the love we think we deserve.','Dont cry because it is over,smile because it happened.','For every minute you are angry,you lose sixty seconds of happines.','The good you do today will be forgotten tomorrow.','A friend is someone who knows all about you and still loves you.','Love is like the wind,you cant see it but you can feel it.']
  }
}
