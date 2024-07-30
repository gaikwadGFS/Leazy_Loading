import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  inputValue:string='';

 

  constructor(){
    console.log("Demo Parent Componet called");
  }
  save(txt:HTMLInputElement){
   this.inputValue=txt.value;
  }
  

}
