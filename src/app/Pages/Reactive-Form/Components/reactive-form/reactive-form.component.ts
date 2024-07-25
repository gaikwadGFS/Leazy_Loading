import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {

  myForm!: FormGroup<any>;

  ngOnInit(): void {
      this.myForm = new FormGroup({
        name: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required])
      })
  }

  addForm(){
    if(this.myForm){
      console.log('Form Submit:', this.myForm.value);
    }
  }
}
