import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { DefaultComponent } from './default/default.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutineComponent } from './routine/routine.component';
import { AddRoutineComponent } from './add-routine/add-routine.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervalTimerComponent,
    DefaultComponent,
    RoutineComponent,
    AddRoutineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
