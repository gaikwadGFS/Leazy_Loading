import { AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements AfterViewInit ,AfterViewChecked {

  inputValue:string='';

  toDestroy:boolean=false;
 

  constructor(){
    // console.log("Demo Parent Componet called");
  }

  ngAfterViewInit(): void {
    console.log("Parent ngAfterViewInit Hooks called");
    
  }

  ngAfterViewChecked(): void {
    console.log("Parent ngAfterViewChecked Hooks called");
    
  }



  destroy(){
   this.toDestroy = !this.toDestroy;
  }

  save(txt:HTMLInputElement){
   this.inputValue=txt.value;
  }

  

}
