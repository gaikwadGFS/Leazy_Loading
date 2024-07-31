import { AfterViewInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements AfterViewInit {

  inputValue:string='';

 

  constructor(){
    // console.log("Demo Parent Componet called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Hooks called");
    
  }
  save(txt:HTMLInputElement){
   this.inputValue=txt.value;
  }
  

}
