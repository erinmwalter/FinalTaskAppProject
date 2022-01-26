import { Component, Input, OnInit } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { Task } from '../task'
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  model: Task = {taskId: 0, tmName: "", taskName: "", description: "", isCompleted: false, dueDate: ""};

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.taskService.CreateTask(this.model);
    this.router.navigate(['/task-list']);
  }

}
