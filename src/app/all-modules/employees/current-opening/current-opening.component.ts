import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-opening',
  templateUrl: './current-opening.component.html',
  styleUrls: ['./current-opening.component.css']
})
export class CurrentOpeningComponent implements OnInit {

  job_title:string;
  job_details:string;
  current_opning = [{job_title:'Mean/Mean Stack Developer',job_details:'Developent - Pixonix - Nagpur'},
                    {job_title:'Software Engineer (Data Science)',job_details:'Developent - Pixonix - Nagpur'},
                    {job_title:'Software Developer (Trainee)',job_details:'Developent - Pixonix - Nagpur'},
                    {job_title:'Sr.Software Engineer (Data Engineering - Python)',job_details:'Developent - Pixonix - Nagpur'},
                    {job_title:'Jr.Software Engineer (Data Engineering - Python)',job_details:'Developent - Pixonix - Nagpur'}]

  constructor() { }

  ngOnInit(): void {
  }




}
