import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchanges',
  templateUrl: './ng-onchanges.component.html',
  styleUrl: './ng-onchanges.component.css'
})
export class NgOnchangesComponent implements OnChanges,OnInit {

  @Input() msg:string='';

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Hooks Called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("NgonInit Hooks called");
  }
 
}
