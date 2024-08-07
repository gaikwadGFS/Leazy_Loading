import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  getuserId(id: number){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createUser(data:any){
    return this.http.post(this.apiUrl,data);
  }

  updateUser(data:any){
    debugger;
    return this.http.put(`${this.apiUrl}/${data.id}`, data);
  }

  deleteUser(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
