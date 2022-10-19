import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation-in-progress',
  templateUrl: './evaluation-in-progress.component.html',
  styleUrls: ['./evaluation-in-progress.component.css']
})
export class EvaluationInProgressComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  employee: string;
  employee_series: string;
  job_title: string;
  department: string;
  location: string;
  date_of_joining: string;
  end_date:string;
  extension: string;
  action:string;


  series = [
            {employee:'Prahlad',employee_series:'PIX00563',job_title:'Project CIP_',department:'01',location:'Mumbai',date_of_joining:'25 july 2022',end_date:'22 oct 2022',extension:'2 months'},
            {employee:'Rituraj Nira',employee_series:'PIX00564',job_title:'Project CIP_WR',department:'02',location:' Kadugodi',date_of_joining:'26 july 2022',end_date:'23 oct 2022',extension:'5 months'},
            {employee:'Ishwar Rema',employee_series:'PIX00565',job_title:'Project CIP_MB',department:'03',location:' Mumbai',date_of_joining:'27 july 2022',end_date:'24 oct 2022',extension:'0 months'},
            {employee:'Harkrishna Nalini',employee_series:'PIX00566',job_title:'Project CIP_HM',department:'04',location:'Heritage',date_of_joining:'28 july 2022',end_date:'25 oct 2022',extension:'1 months'},
  ]

}
