import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { RoutineComponent } from './routine/routine.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'intervals',
    component: IntervalTimerComponent,
  },
  {
    path: 'routines',
    component: RoutineComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
