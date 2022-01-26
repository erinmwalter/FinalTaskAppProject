import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  providers: [TaskService]
})
export class TaskDetailComponent implements OnInit {

  @Input() taskId: number;
  model: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log(this.taskId);
    this.taskService.GetTask(this.taskId).subscribe(
      (response:any) => {
        this.model = response;
      });
  }

}
