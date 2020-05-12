import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { RoutineComponent } from './routine/routine.component';
import { AddRoutineComponent } from './add-routine/add-routine.component';


const routes: Routes = [
  {
    path: '',
    component: RoutineComponent,
  },
  {
    path: 'intervaltimer/:id',
    component: IntervalTimerComponent,
  },
  {
    path: 'routines',
    component: RoutineComponent,
  },
  {
    path: 'add-routine',
    component: AddRoutineComponent,
  },
  {
    path: 'default',
    component: DefaultComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
