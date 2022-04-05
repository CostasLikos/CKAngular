import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cause } from './cause.model';
import { CauseService } from "./cause.service";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.css'],
  template: `
  <ul>
      <li *ngFor="let cause of Causes | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
    </ul>
    <pagination-controls
  previousLabel="Prev"
  nextLabel="Next"
  responsive="true"
></pagination-controls>
    `


})
export class CauseComponent implements OnInit, OnDestroy {

  filterTerm: any
  //Properties
  Causes!: Cause[];
  p: number = 1;
  

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Cause> = new Subject<Cause>();
  //Methods
  //READ
  ReadCauses() {
    this.CauseService.getCauses().subscribe(data =>{this.Causes = data});
    
  }


  constructor(private CauseService: CauseService) { }

  ngOnInit(): void {
    this.ReadCauses();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
