import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() tile: string = "";
  @Input() computer: string = "";
  board: any = ["", "", "", "", "", "", "", "", ""];
  hasWinner: boolean = false;
  winner: string = "";
  player: string;
  openSlots: any = [];

  constructor(public dialog: MatDialog, private s: ScoreService) {

  }
  // @ViewChild('nonTemplate', { static: false }) mdDialog: TemplateRef<any>;

  ngOnInit(): void {

  }

  checkSlot(index) {
    let open = this.getAvailableSlots();

    this.getWinner();

    if(!this.hasWinner){
      console.log("allow");
      this.putToSlot(index); 

       this.computerToSlot();
    }
  }

  putToSlot(index){
    if(this.board[index]!=this.computer || this.board[index]!=this.tile){
      this.board[index] =this.tile;
      
      this.openSlots.splice(index,1);      
    }

    this.getWinner();
  }

  getAvailableSlots() {
    this.openSlots = [];

    for (let i = 0; i <= (this.board.length) - 1; i++) {
      if (this.board[i] == "") {
        this.openSlots.push(i);
        continue;
      }
    }

    return this.openSlots;
  }
  
  computerToSlot(){
    this.openSlots = this.getAvailableSlots();

    console.log("",this.openSlots);
    let index = this.openSlots[Math.floor(Math.random()*this.openSlots.length)] 
    
    console.log("index returned", index);

     this.board[index] = this.computer;

     this.openSlots.splice(index,0);   
     
     this.getWinner();
  }


  getWinner() {
    if (this.board[0] == this.computer && this.board[1] == this.computer && this.board[2] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[0] == this.tile && this.board[1] == this.tile && this.board[2] == this.tile) {
      console.warn("YABANG");
      this.hasWinner = true;
      this.winner = "YOU"
    } else if (this.board[3] == this.computer && this.board[4] == this.computer && this.board[5] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[3] == this.tile && this.board[4] == this.tile && this.board[5] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[6] == this.computer && this.board[7] == this.computer && this.board[8] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC"
    } else if (this.board[6] == this.tile && this.board[7] == this.tile && this.board[8] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[0] == this.computer && this.board[4] == this.computer && this.board[8] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[0] == this.tile && this.board[4] == this.tile && this.board[8] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[2] == this.computer && this.board[4] == this.computer && this.board[6] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[2] == this.tile && this.board[4] == this.tile && this.board[6] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[0] == this.computer && this.board[4] == this.computer && this.board[8] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[0] == this.tile && this.board[4] == this.tile && this.board[8] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[0] == this.computer && this.board[1] == this.computer && this.board[7] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[0] == this.tile && this.board[1] == this.tile && this.board[7] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[2] == this.computer && this.board[5] == this.computer && this.board[8] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[2] == this.tile && this.board[5] == this.tile && this.board[8] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[3] == this.computer && this.board[4] == this.computer && this.board[5] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[3] == this.tile && this.board[4] == this.tile && this.board[5] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[1] == this.computer && this.board[4] == this.computer && this.board[7] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[1] == this.tile && this.board[4] == this.tile && this.board[7] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[3] == this.computer && this.board[5] == this.computer && this.board[8] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[3] == this.tile && this.board[5] == this.tile && this.board[8] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[0] == this.computer && this.board[3] == this.computer && this.board[6] == this.computer) {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[0] == this.tile && this.board[3] == this.tile && this.board[6] == this.tile) {
      this.hasWinner = true;
      this.winner = "YOU";
    }
  }  

  reset(){
    this.board= ["","","","","","","","",""];
    this.openSlots = [];
    this.winner = "";
    this.hasWinner =  false;
  }

}

