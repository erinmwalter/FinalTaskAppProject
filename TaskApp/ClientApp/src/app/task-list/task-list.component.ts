import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Convert, Task} from '../task'
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {

  taskList: any;
  filteredtaskList: any;

  private _listFilter: string = '';
  get listFilter(): string{
      return this._listFilter;
  }
  set listFilter(value:string){
      this._listFilter = value;
      console.log("In Setter:", value);
      this.filteredtaskList = this.performFilter(value);
  }

  constructor(private tDB: TaskService, private router: Router) { }

  ngOnInit() {
    this.tDB.GetTaskList().subscribe(
      (response:any) => {
        console.log(response);
        let toJson = Convert.taskArrayToJson(response);
        let taskResult = Convert.toTaskArray(toJson);
        this.taskList = taskResult;
        this.filteredtaskList= taskResult;
        console.log(this.taskList);
      }
    );
    this.listFilter = '';
  }

  DeleteEntry(id:number){
    this.tDB.DeleteTask(id);
    location.reload();
  }

  DisplayDetails(id:number){
    let displayPanel = document.getElementById("taskDetail" + id);
    console.log(displayPanel);

    if(displayPanel.style.display === "none"){
      displayPanel.style.display = "inherit";
    }
    else if(displayPanel.style.display === "inherit" || displayPanel.style.display === ""){
      displayPanel.style.display = "none";
    }
  }

  DisplayEdit(id:number){
    let displayPanel = document.getElementById("taskEdit" + id);
    console.log(displayPanel);

    if(displayPanel.style.display === "none"){
      displayPanel.style.display = "inherit";
    }
    else if(displayPanel.style.display === "inherit" || displayPanel.style.display === ""){
      displayPanel.style.display = "none";
    }
  }

  CloseDisplays(){
    console.log(this.taskList.length);
    for(let i=0; i< this.taskList.length; i++){
      let editPanel= document.getElementById("taskEdit" + this.taskList[i].taskId);
      let displayPanel = document.getElementById("taskDetail" + this.taskList[i].taskId);
      console.log("edit" + editPanel);
      console.log(displayPanel);


      if(editPanel.style.display === "inherit" || editPanel.style.display === ""){
        editPanel.style.display = "none";
      }
      if(displayPanel.style.display === "inherit" || displayPanel.style.display === ""){
        displayPanel.style.display = "none";
      }
    }
  }

  ExpandDisplays(){
    console.log(this.taskList.length);
    for(let i=0; i< this.taskList.length; i++){
      let editPanel= document.getElementById("taskEdit" + this.taskList[i].taskId);
      let displayPanel = document.getElementById("taskDetail" + this.taskList[i].taskId);
      console.log(editPanel);
      console.log(displayPanel);


      if(editPanel.style.display === "none"){
        editPanel.style.display = "inherit";
      }
      if(displayPanel.style.display === "none"){
        displayPanel.style.display = "inherit";
      }
    }
  }

  performFilter(filterBy: string) {
    console.log(filterBy);
    filterBy = filterBy.toLocaleLowerCase();
    return this.taskList.filter( (task:Task) => task.taskName.toLocaleLowerCase().includes(filterBy));
  }

}
