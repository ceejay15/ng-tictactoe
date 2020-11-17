import { Component, HostBinding } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {ScoreService} from './score.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictactoe';

  tile:string ="";
  computer : string = "";
  turn : string = "";
  showplay = false;
  showBoard = false;
  showQ = true;

  constructor(private s:ScoreService){}

  tilepick(t){
     this.tile = t;     
     this.computer = this.checkPicked(t);     
     this.showplay =true;

     if(this.tile == "X"){
       this.turn = 'tictac';
     }else{
       this.turn = 'tactoe';
     }

     this.s.updateTurn(this.turn);
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
