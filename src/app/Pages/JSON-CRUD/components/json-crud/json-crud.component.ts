import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonService } from '../../../../Services/json.service';

@Component({
  selector: 'app-json-crud',
  templateUrl: './json-crud.component.html',
  styleUrl: './json-crud.component.css'
})
export class JsonCrudComponent implements OnInit {
  userForm!: FormGroup;
  usersData:any = [];
  isEdit:Boolean = false;

  constructor(
    private userService: JsonService,
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.getAllUsers();
  }

  getAllUsers(){
   this.userService.getUsers().subscribe((data) => {
    console.log(data);
    this.usersData = data;
   });
  }

  // Add User
  addUser(){
    debugger;
    let userList = this.userForm.value;
    // Ternary Operator
    userList.id = this.usersData.length > 0 ? 
                  Math.max(...this.usersData.map((u: any) => u.id!)) + 1 
                  : 1;
    this.userService.createUser(userList).subscribe((data) => {
      debugger;
      this.getAllUsers();
    });
  }

  // Edit User
  editUser(data:any){
    console.log(data);
    this.isEdit = true;
    this.userForm.patchValue(data);
  }

  //Update User
  updateUser(){
    debugger;
    let userUpdate = this.userForm.value;

    this.userService.updateUser(userUpdate).subscribe((data) => {
      debugger;
      this.getAllUsers()
    })
  }

  // Delete User
  deleteUser(data:any){
    console.log(data);
    this.userService.deleteUser(data.id).subscribe((data) => {
      this.getAllUsers();
    });
  }
}
