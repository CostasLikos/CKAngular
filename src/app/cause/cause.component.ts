import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cause } from './cause.model';
import { CauseService } from "./cause.service";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.css']
})
export class CauseComponent implements OnInit, OnDestroy {


  //Properties
  Causes!: Cause[];

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
