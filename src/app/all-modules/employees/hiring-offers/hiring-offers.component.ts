import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AllModulesService } from '../../all-modules.service';

@Component({
  selector: 'app-hiring-offers',
  templateUrl: './hiring-offers.component.html',
  styleUrls: ['./hiring-offers.component.css']
})
export class HiringOffersComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public url: any = "appliedCandidates";
  public allAppliedCandidates: any = [];
  constructor(private allModuleService: AllModulesService) {}

  ngOnInit() {
    this.getAppliedCandidates();
    // for data table configuration
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip",
    };
  }

  getAppliedCandidates() {
    this.allModuleService.get(this.url).subscribe((data) => {
      this.allAppliedCandidates = data;
      this.dtTrigger.next();
    });
  }
  // for unsubscribe datatable
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}




