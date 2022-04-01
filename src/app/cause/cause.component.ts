import { Component, OnInit } from '@angular/core';
import { Cause } from './cause.model';
import { CauseService } from "./cause.service";

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.css']
})
export class CauseComponent implements OnInit {


  //Properties
Causes!: Cause[];
  //Methods
  ReadCauses(){
    this.CauseService.getCauses().subscribe(data => this.Causes = data);
  }


  constructor(private CauseService: CauseService) { }

  ngOnInit(): void {
    this.ReadCauses();
  }

}
