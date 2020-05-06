import { Component, OnInit } from '@angular/core';
import { IntervalTimerService } from '../services/interval-timer.service';
import { RoutineData, emptyArrayRoutineData, emptyRoutineData } from '../models/routine-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss']
})
export class IntervalTimerComponent implements OnInit {

  routineData: RoutineData[] = emptyArrayRoutineData();
  routineDataToAdd: RoutineData = emptyRoutineData();
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private _intervalTimerService: IntervalTimerService) {
    this.form = this.formBuilder.group({
      'routineId': [this.routineDataToAdd.routineId],
      'routineName': [this.routineDataToAdd.routineName],
      'workTime': [this.routineDataToAdd.workTime],
      'restTime': [this.routineDataToAdd.restTime]
    });
  }

  ngOnInit() {
    this._intervalTimerService.getRoutines().subscribe( result => {
      if (result) {
        this.routineData = result;
      }
    });
  }

  addRoutine() {
    this.routineData.push(this.form.value);
  }

}
