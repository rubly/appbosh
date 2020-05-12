import { Component, OnInit } from '@angular/core';
import { IntervalTimerService } from '../services/interval-timer.service';
import { RoutineData, emptyArrayRoutineData, emptyRoutineData } from '../models/routine-data';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss']
})
export class IntervalTimerComponent implements OnInit {

  routineData: RoutineData = emptyRoutineData();
  routineId: number;
  workTime: number;
  restTime: number;
  workTimerId;
  restTimerId;
  pause = false;

  constructor(
    private _intervalTimerService: IntervalTimerService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.routineId = this.getRoutineId(this._activatedRoute);
    this._intervalTimerService.getRoutine(this.routineId).subscribe( result => {
      this.routineData = result;
      this.workTime = this.routineData.workTime;
      this.restTime = this.routineData.restTime;
    });
  }

  runRoutine() {
      if (!this.pause) {
        this.workTime = this.routineData.workTime;
        this.restTime = this.routineData.restTime;
      } else {
        this.pause = false;
      }
      this.workTimerId = setInterval(() => {
        this.workTime --;
        if (this.workTime === 0) {
          clearInterval(this.workTimerId);
          this.restTimerId = setInterval(() => {
              this.restTime --;
              if (this.restTime === 0) {
                clearInterval(this.restTimerId);
              }
          }, 1000 );
        }
      }, 1000 );
  }

  stopRoutine() {
    clearInterval(this.workTimerId);
    clearInterval(this.restTimerId);
  }

  pauseRoutine() {
    this.pause = true;
    clearInterval(this.workTimerId);
    clearInterval(this.restTimerId);
  }

  getRoutineId(route: ActivatedRoute): number {
    const id = route.snapshot.paramMap.get('id') as unknown as number;
    if (id != null) {
        return id;
    } else {
        return 0;
    }
  }

  backToRoutines() {
    this._router.navigate(['/routines']);
  }

}
