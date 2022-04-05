import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.css']
})
export class PaginationControlsComponent implements OnInit {

  constructor() { }

  

  @Input() id!: string ;
  @Input() maxSize!: number;
  @Output() pageChange!: EventEmitter<number>;
  @Output() pageBoundsCorrection!: EventEmitter<number>;

  ngOnInit(): void {
  }

}
