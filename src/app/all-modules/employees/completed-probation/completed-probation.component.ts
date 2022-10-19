import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-probation',
  templateUrl: './completed-probation.component.html',
  styleUrls: ['./completed-probation.component.css']
})
export class CompletedProbationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  employee: string;
  employee_series: string;
  job_title: string;
  department: string;
  location: string;
  date_of_joining: string;
  end_date:string;
  status: string;
  feedback: string;
  action:string;


  series = [
            {employee:'Prahlad',employee_series:'PIX00563',job_title:'Project CIP_',department:'01',location:'Mumbai',date_of_joining:'25 july 2022',end_date:'22 oct 2022',status:'Probation Ended',feedback:'0/0'},
            {employee:'Rituraj Nira',employee_series:'PIX00564',job_title:'Project CIP_WR',department:'02',location:' Kadugodi',date_of_joining:'26 july 2022',end_date:'23 oct 2022',status:'Probation Ended',feedback:'0/0'},
            {employee:'Ishwar Rema',employee_series:'PIX00565',job_title:'Project CIP_MB',department:'03',location:' Mumbai',date_of_joining:'27 july 2022',end_date:'24 oct 2022',status:'Probation Ended',feedback:'0/0'},
            {employee:'Harkrishna Nalini',employee_series:'PIX00566',job_title:'Project CIP_HM',department:'04',location:'Heritage',date_of_joining:'28 july 2022',end_date:'25 oct 2022',status:'Probation Ended',feedback:'0/0'},
  ]

}
