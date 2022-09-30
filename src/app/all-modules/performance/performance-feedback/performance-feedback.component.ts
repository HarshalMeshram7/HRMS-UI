import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-feedback',
  templateUrl: './performance-feedback.component.html',
  styleUrls: ['./performance-feedback.component.css']
})
export class PerformanceFeedbackComponent implements OnInit {

  ngOnInit(): void {
  }
  
  todayString : string = new Date().toDateString();
}
