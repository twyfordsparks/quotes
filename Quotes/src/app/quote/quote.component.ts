import { Component, OnInit } from '@angular/core';
import {Quote}  from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Its not lack of love,but a lack of friendship that makes unhappy marriages','Happiness is a direction, not a place.',new Date(25,4,2019)),
    new Quote(2, 'We accept the love we think we desreve', 'Happiness is a direction, not a place.', new Date(25, 4, 2019)),
    new Quote(3, 'Dont cry because it is over,smile because it happened', 'Happiness is a direction, not a place.', new Date(25, 4, 2019)),
    new Quote(4, 'For every minute you are angry,you lose sixty seconds of happines', 'Happiness is a direction, not a place.', new Date(25, 4, 2019)),
    new Quote(5, 'The good you do today will be forgotten tomorrow', 'Happiness is a direction, not a place.', new Date(25, 4, 2019)),
    new Quote(6, 'A friend is someone who knows all about you and still loves you', 'Happiness is a direction, not a place.', new Date(25, 4, 2019)),
    new Quote(7, 'Love is like the wind, you cant see it but you can feel it', 'Happiness is a direction, not a place.', new Date(25, 4, 2019))
  ]
   addNewQuote(quote){
     let quoteLength = this.quotes.length;
     quote.id = quoteLength + 1;
     quote.completeDate = new Date(quote.completeDate)
     this.quotes.push(quote)

   }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
      if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }
}
  
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  constructor() { }

  ngOnInit() {
  }

}
