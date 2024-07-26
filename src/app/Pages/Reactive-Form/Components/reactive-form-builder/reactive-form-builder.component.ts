import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrl: './reactive-form-builder.component.css'
})
export class ReactiveFormBuilderComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required,Validators.email],
      address: this.fb.array([])
    })
  }

  get address(): FormArray{
    return this.myForm.get('address') as FormArray;
  }

  addAddress(){
    debugger;
    this.address.push(this.fb.group({
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    }))
  }

  removeAddress(index:number){
    this.address.removeAt(index);
  }

  submitForm(){
    if(this.myForm.valid){
      console.log('Form Array: ', this.myForm);
    }
  }
}
