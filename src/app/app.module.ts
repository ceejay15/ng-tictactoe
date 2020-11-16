import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { ScoreComponent } from './score/score.component';
import { BoardComponent } from './board/board.component';
import { TileComponent } from './tile/tile.component';
import { TileDirective } from './tile.directive';
import { ScoreDirective } from './score.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    BoardComponent,
    TileComponent,
    TileDirective,
    ScoreDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
