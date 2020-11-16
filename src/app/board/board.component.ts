import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { exit } from 'process';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() tile : string = ""; 
  @Input() computer :string = "";
  board : any = ["","","","","","","","",""];
  openSlots : any = [];
  player:any =[];
  AI : any = [];

  constructor() { }

  ngOnInit(): void {   
    
  }

  checkSlot(index){
    let open = this.getSlot();    
    this.pushToTile(index);

    this.computerSlot(open);
  }

  getSlot(){
    let i = 0;

    this.openSlots = [];
    
    for(i; i <= (this.board.length)-1; i++){
      if(this.board[i] ==""){
        this.openSlots.push(i);
         continue;
      }      
    }
    return this.openSlots;
  }

  pushToTile(index){
    if(this.board[index] == "" || this.board[index] != this.computer){
      this.board[index] = this.tile;
      this.openSlots.splice(index,1);
    }
    console.log("has winner?",this.board);

    this.analyzeWinner();
  }
 

  computerSlot(open){
    console.log("forPC",Math.floor(Math.random() * Math.floor(this.openSlots.length)));

    let index = Math.floor(Math.random() * Math.floor(this.openSlots.length));
    
    console.log("pc index", index, this.board[index]);

    if(this.board[index] == ""){
      this.openSlots.splice(index,1);
      this.board[index] = this.computer;
    }
  
    this.analyzeWinner();
  }

  analyzeWinner(){
    console.log("TILE", this.tile);
      //[0,1,2], [0,4,8],[2,4,6], [0,3,6],[1,4,7],[2,5,8], [3.4,5],[6,7,8]

      this.player = [];
      this.AI = [];
   for(let i=0; i <= (this.board.length)-1; i++){
      if(this.board[i] == this.tile){
        this.player.push(i);
      }

      if(this.board[i] == this.computer){
        this.AI.push(i);
      }
   }
    console.log("PLAYER", this.player);
    console.log("AI", this.AI);
  }

  

}
