import { Component, OnInit } from '@angular/core';
import { IntervalTimerService } from '../services/interval-timer.service';
import { RoutineData, emptyArrayRoutineData, emptyRoutineData } from '../models/routine-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent implements OnInit {

  routineData: RoutineData[] = emptyArrayRoutineData();

  constructor(
    private _intervalTimerService: IntervalTimerService,
    private _router: Router) {
  }

  ngOnInit() {
    this._intervalTimerService.getRoutines().subscribe( result => {
      if (result) {
        this.routineData = result;
      }
    });
  }

  addRoutine() {
    this._router.navigate(['/add-routine']);
  }

  runRoutine(id: number) {
    this._router.navigate([`/intervaltimer/${id}`]);
  }

  deleteRoutine(id: number) {
    this._intervalTimerService.deleteRoutine(id).subscribe( () => {
      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      this._router.onSameUrlNavigation = 'reload';
      this._router.navigate(['/routines']);
    });
  }

}
