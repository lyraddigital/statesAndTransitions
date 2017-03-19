import { Component, OnInit } from '@angular/core';

import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: Task[];
  showTasks = true;

  ngOnInit() {
    this.tasks = new Array<Task>();
    this.tasks.push(new Task("Finish Angular 2 Video", "Happy YouTubers"));
    this.tasks.push(new Task("Watch sports", "My team better win tonight"));
  }

  toggleShow(showTasks: boolean) {
    this.showTasks = showTasks;
  }
}
