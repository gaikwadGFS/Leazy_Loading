import { AfterContentInit, Component,  ContentChild,  ContentChildren,  DoCheck,  ElementRef,  Input, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchanges',
  templateUrl: './ng-onchanges.component.html',
  styleUrl: './ng-onchanges.component.css'
})
export class NgOnchangesComponent implements OnChanges,OnInit,DoCheck,AfterContentInit {

  @Input() msg:string='';

  @ContentChild('para') paraRef!:ElementRef;
  @ContentChildren('para') paraMultiRef!:QueryList<ElementRef>;

  constructor(){
    console.log("ng on changes component parent Called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Hooks Called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("NgonInit Hooks called");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Hooks called");
    console.log("do check:" , this.paraRef);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Hooks called");
    console.log(":After content Init" , this.paraRef.nativeElement);
    console.log(this.paraMultiRef);
  }

 
}

