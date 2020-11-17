import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }

  winner:string = "";
  turn : any;
  openSlots: any = [];
  hasWinner: boolean = false;
  board: any = ["","","","","","","","",""];
  tile : string = "";
  computer : string = "";
  player:string="";

  getWinner(){
    return this.hasWinner;
  }

  setComputer(computer){
    this.computer = computer;
  }
  
  putToSlot(index, tile){
    this.tile = tile;
    
    if(this.board[index] != "" || this.board[index]!="X" || this.board[index]!="O"){
      this.board[index] = tile;

      this.openSlots.splice(index,1);
    
      this.openSlots = this.getAvailableSlot();
      console.log(index,this.openSlots);
    }
  }

  getAvailableSlot(){
    let i = 0;

    this.openSlots = [];
    
    for(i; i <=(this.board.length)-1; i++){
      if(this.board[i] ==""){
        this.openSlots.push(i);
         continue;
      }      
    }
    return this.openSlots;
  }

  computerPlay(computer){
   // this.openSlots = this.getAvailableSlot();
    console.log("openSlots", this.openSlots);

    

    

    //this.openSlots = this.getAvailableSlot();
    
  }

  getBoard(){
    return this.board;
  }

  updateTurn(t){
    this.turn = t;
  }

  switchTurn(){
    return this.turn;
  }

  updatePlyer(player){
    this.player = player;
  }

  getPlayer(){
    return this.player;
  }

  analyzeWinner(){
    if(this.board[0] == this.computer && this.board[1] == this.computer && this.board[2] == this.computer){
      this.hasWinner = true;
      this.winner = "PC";
   }else if(this.board[0] == this.tile && this.board[1] == this.tile && this.board[2] == this.tile){
      console.warn("YABANG");
      this.hasWinner = true;
      this.winner = "YOU"
   }else if(this.board[3] == this.computer && this.board[4] == this.computer && this.board[5]== this.computer){
       this.hasWinner = true;
       this.winner = "PC";
   }else if(this.board[3] == this.tile && this.board[4] == this.tile && this.board[5] == this.tile){
      this.hasWinner = true;
      this.winner = "YOU";
   }else if(this.board[6] == this.computer && this.board[7] == this.computer && this.board[8] == this.computer){
      this.hasWinner = true;
      this.winner = "PC"
   }else if(this.board[6] == this.tile && this.board[7] == this.tile && this.board[8] == this.tile){
     this.hasWinner = true;
     this.winner = "YOU";
   }else if(this.board[0] == this.computer && this.board[4] == this.computer && this.board[8] == this.computer){
     this.hasWinner = true;
     this.winner = "PC";
   }else if(this.board[0] == this.tile && this.board[4] ==  this.tile && this.board[8] == this.tile){
    this.hasWinner = true;
    this.winner = "YOU";
   }else if(this.board[2] == this.computer && this.board[4] == this.computer && this.board[6] == this.computer){
    this.hasWinner = true;
    this.winner = "PC";
   }else if(this.board[2] == this.tile && this.board[4] == this.tile && this.board[6] == this.tile){
    this.hasWinner = true;
    this.winner = "YOU";
   }else if(this.board[0] == this.computer && this.board[4]  == this.computer && this.board[8] == this.computer){
    this.hasWinner = true;
    this.winner = "PC";
   }else if(this.board[0] == this.tile && this.board[4]  == this.tile && this.board[8] == this.tile){
    this.hasWinner = true;
    this.winner = "YOU";
   }else if(this.board[0] == this.computer && this.board[1] == this.computer && this.board[7] == this.computer){
    this.hasWinner = true;
    this.winner = "PC";
   }else if(this.board[0] == this.tile && this.board[1] == this.tile && this.board[7] == this.tile){
    this.hasWinner = true;
    this.winner = "YOU";
   }else if(this.board[2] == this.computer && this.board[5] == this.computer && this.board[8] == this.computer){
    this.hasWinner = true;
    this.winner = "PC";
   }else if(this.board[2] == this.tile && this.board[5] == this.tile && this.board[8] == this.tile){
    this.hasWinner = true;
    this.winner = "YOU";
   }else if(this.board[3] == this.computer && this.board[4]  == this.computer && this.board[5] == this.computer){
    this.hasWinner = true;
    this.winner = "PC";
   }else if(this.board[3] == this.tile && this.board[4]  == this.tile && this.board[5] == this.tile){
    this.hasWinner = true;
    this.winner = "YOU";
   }else if(this.board[1] == this.computer && this.board[4] == this.computer && this.board[7] == this.computer){
    this.hasWinner = true;
    this.winner = "PC";
   }else if(this.board[1] == this.tile && this.board[4] == this.tile && this.board[7] == this.tile){
    this.hasWinner = true;
    this.winner = "YOU";
   }else if(this.board[3] == this.computer && this.board[5] == this.computer  && this.board[8] == this.computer){
    this.hasWinner = true;
    this.winner = "PC";
   }else if(this.board[3] == this.tile && this.board[5] == this.tile  && this.board[8] == this.tile){
    this.hasWinner = true;
    this.winner = "YOU";
   }else if(this.board[0] == this.computer && this.board[3] == this.computer && this.board[6] == this.computer){
    this.hasWinner = true;
    this.winner = "PC";
   }else if(this.board[0] == this.tile && this.board[3] == this.tile && this.board[6] == this.tile){
    this.hasWinner = true;
    this.winner = "YOU";
  }
}

getWhoWon(){
  return this.winner;
}


}
