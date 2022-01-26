import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [TaskService]
})
export class EditTaskComponent implements OnInit {


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

  onSubmit(){
    this.taskService.UpdateTask(this.model, this.taskId);
    location.reload();
  }
}
