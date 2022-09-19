import { ChangeDetectionStrategy, Component} from '@angular/core';
import { NbCalendarRange, NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-leave',
  templateUrl: './leave.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./leave.component.scss'] 
})
export class LeaveComponent  {
  date :Date = new Date();
  date2:Date = new Date();
  range: NbCalendarRange<Date>;

  // days= this.date.getTime()-this.date2.getTime();
  // finalDays = this.days/(1000 * 3600 * 24);

 timeInMilisec: number = this.date.getTime() - this.date2.getTime();
 daysBetweenDates: number = Math.ceil(this.timeInMilisec / (1000 * 60 * 60 * 24));



 constructor(protected dateService: NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }

  }

