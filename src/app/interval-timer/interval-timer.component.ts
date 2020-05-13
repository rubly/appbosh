import { Component, OnInit } from '@angular/core';
import { IntervalTimerService } from '../services/interval-timer.service';
import { RoutineData, emptyArrayRoutineData, emptyRoutineData } from '../models/routine-data';
import { ActivatedRoute, Router } from '@angular/router';

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
  currentRound: number;
  workTimerId;
  restTimerId;
  pause = false;
  run = true;

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
      this.currentRound = this.routineData.numberRounds;
    });
  }

  runRoutine() {
      if (!this.pause) {
        this.workTime = this.routineData.workTime;
        this.restTime = this.routineData.restTime;
        this.currentRound = this.routineData.numberRounds;
      } else {
        this.pause = false;
      }
      this.runIntervals(this.currentRound);
  }

  runIntervals(numberRounds: number) {
    this.workTimerId = setInterval(() => {
      if (this.workTime > 0) {
        this.workTime --;
      }
      if (this.workTime <= 0) {
        clearInterval(this.workTimerId);
        this.restTimerId = setInterval(() => {
            this.restTime --;
            if (this.restTime === 0) {
              clearInterval(this.restTimerId);
              this.currentRound --;
              numberRounds --;
              if (numberRounds > 0) {
                  this.workTime = this.routineData.workTime;
                  this.restTime = this.routineData.restTime;
                  this.runIntervals(numberRounds);
              }
            }
        }, 1000 );
      }
    }, 1000 );
  }

  stopRoutine() {
    clearInterval(this.workTimerId);
    clearInterval(this.restTimerId);
    this.workTime = this.routineData.workTime;
    this.restTime = this.routineData.restTime;
    this.currentRound = this.routineData.numberRounds;
  }

  pauseRoutine() {
    if (!this.pause) {
      this.pause = true;
      clearInterval(this.workTimerId);
      clearInterval(this.restTimerId);
    }
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
