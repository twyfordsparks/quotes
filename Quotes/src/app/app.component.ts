import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote: string[];
  constructor(){
    this.quote = ["You only live once", "Education is the most powerful weapon which you can use to change the world.", "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform", "Be the change you want to see in the world"]
    
  }
}
