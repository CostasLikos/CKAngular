import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.css']
})
export class BackbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goBack():void{
    window.location.href="https://localhost:44342/Home/Index";
  }

}
