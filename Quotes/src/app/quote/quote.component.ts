import { Component, OnInit } from '@angular/core';
import {Quote}  from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Its not lack of love,but a lock of friendship that makes unhappy marriages.'),
    new Quote(2, 'We accept the love we think we desreve.'),
    new Quote(3, 'Dont cry because it is over,smile because it happened.'),
    new Quote(4, 'For every minute you are angry,you lose sixty seconds of happines.'),
    new Quote(5, 'The good you do today will be forgotten tomorrow.'),
    new Quote(6, 'A friend is someone who knows all about you and still loves you.'),
    new Quote(7, 'Love is like the wind, you cant see it but you can feel it.'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
