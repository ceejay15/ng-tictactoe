import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';

import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

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
    OverlayModule,
    A11yModule,
    BidiModule,

    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
