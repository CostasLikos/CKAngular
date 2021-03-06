import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cause } from './cause.model';
import { CauseService } from "./cause.service";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.css'],
})
export class CauseComponent implements OnInit, OnDestroy {
  //Filtering
  filterTerm: any
  //Properties
  Causes!: Cause[];
  //Paging
  totalRecords!: number;
  page: number = 1;
  //Sorting
  orderHeader: string = '';
  isDescOrder: boolean = true;


  dtTrigger: Subject<Cause> = new Subject<Cause>();
  //Methods
  //READ
  ReadCauses() {
    this.CauseService.getCauses().subscribe(data => {
      this.Causes = data
      this.totalRecords = data.length
    });
  }


  constructor(private CauseService: CauseService) { }

  ngOnInit(): void {
    this.ReadCauses();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  handlePageChangeCause(event: any) {
    this.page = event;
    this.ReadCauses();
  }
  sort(headerName: string) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }

}
