import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'intervals',
    component: IntervalTimerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
