import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  serviceUrl: string= "api/taskitem/";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.serviceUrl = baseUrl + this.serviceUrl;
  }

  //all crud functions go here
  //CREATE/POST
  CreateTask(task: Task): void {
    let apiURL:string = this.serviceUrl + 'create';
    this.http.post(apiURL, task).subscribe(
      (response:any) =>
      {console.log("Created Task");
       console.log(response)}
    );
  }

  //GET/READ
  //get list
  GetTaskList(): Observable<any> {
    let apiURL:string = this.serviceUrl;
    return this.http.get(apiURL);
  }
  //get single
  GetTask(id:number) : Observable<any> {
    let apiURL:string = this.serviceUrl + `${id}`;
    return this.http.get(apiURL);
  }

  //UPDATE/PUT
  UpdateTask(task: Task, id:number): void {
    let apiURL:string = this.serviceUrl + `update/${id}`;
    this.http.put(apiURL, task).subscribe(
      (response:any) =>
      {console.log("Updated Task");
       console.log(response)}
    );
  }
  
  //DELETE
  DeleteTask(id: number): void {
    let apiURL:string = this.serviceUrl + `delete/${id}`;
    this.http.delete(apiURL).subscribe(
      (response:any) =>
      {console.log("Deleted Task");
       console.log(response)}
    );
  }


}
