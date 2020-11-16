import { Component, HostBinding } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictactoe';

  tile:string ="";
  computer : string = "";
  showplay = false;
  showBoard = false;
  showQ = true;

  tilepick(t){
     this.tile = t;
     this.computer = this.checkPicked(t);     
     this.showplay =true;
  }

  checkPicked(t){
    let pc;
    if(t=="O"){
      pc = "X";
    }else{
      pc = "O";
    }
    return pc;
  }

  playgame(){
    this.showBoard =  true;
    this.showplay = false;
    this.showQ = false;
  }
}
