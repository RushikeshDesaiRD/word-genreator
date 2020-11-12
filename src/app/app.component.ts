import { Component } from '@angular/core';
import arryaWords from "./words"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  words=''
  limit=10
  handleSlideChange(newLimit:number){
   this.limit=newLimit
   console.log(this.limit)
  }

  genrate(){
    this.words=arryaWords.slice(0, this.limit).join(' ')
    console.log(this.words)
  }
}
