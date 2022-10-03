import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-series',
  templateUrl: './employee-series.component.html',
  styleUrls: ['./employee-series.component.css']
})
export class EmployeeSeriesComponent implements OnInit {


  series_Name: string;
  prefix: string;
  suffix: string;
  next_Number: number;
  status: string;
  actions: string;
  constructor() { }

  ngOnInit(): void {
  }

  series = [
            {series_Name:'PIX01RK',prefix:'PIX',suffix:'RK',next_Number:'01',status:'Active'},
            {series_Name:'PIX02WR',prefix:'PIX',suffix:'WR',next_Number:'02',status:'Active'},
            {series_Name:'PIX03MB',prefix:'PIX',suffix:'MB',next_Number:'03',status:'Active'},
            {series_Name:'PIX04HM',prefix:'PIX',suffix:'HM',next_Number:'04',status:'Active'},
  ]



  edit(value){
    alert(value);
  }
}
