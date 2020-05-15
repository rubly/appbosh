import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IntervalTimerService } from '../services/interval-timer.service';
import { RoutineData, emptyRoutineData } from '../models/routine-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-routine',
  templateUrl: './add-routine.component.html',
  styleUrls: ['./add-routine.component.scss']
})
export class AddRoutineComponent implements OnInit {

  routineDataToAdd: RoutineData = emptyRoutineData();
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private _intervalTimerService: IntervalTimerService,
    private _router: Router,
    ) {
    this.form = this.formBuilder.group({
      'routineName': [this.routineDataToAdd.routineName],
      'workTime': [this.routineDataToAdd.workTime],
      'restTime': [this.routineDataToAdd.restTime],
      'numberRounds': [this.routineDataToAdd.numberRounds],
    });
  }

  ngOnInit() {
  }

  addRoutine() {
    this._intervalTimerService.saveRoutine(this.form.value).subscribe( result => {
      if (result) {
        this._router.navigate(['/routines']);
      }
    });
  }

  toRoutines() {
    this._router.navigate(['/routines']);
  }

}
