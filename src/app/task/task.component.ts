import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';

import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  animations: [
    trigger('taskStatus', [
      state('highlighted', style(
        {  
          background: '#33A',
          transform: 'rotate(-5deg)',
          color: 'white',
          border: '3px solid #006'
        })),
      state('unhighlighted', style(
        { 
          background: '#127',
          transform: 'rotate(0deg)',
          color: '#BBB'
        })),
      state('activated', style(
        {
          background: '#2B3',
          color: 'white',
          transform: 'rotate(-8deg)',
          border: '3px solid #060'
        }
      )),
      transition('highlighted => unhighlighted', animate('150ms ease-in')),
      transition('unhighlighted => highlighted', animate('150ms ease-out'))
    ])
  ]
})
export class TaskComponent {
  @Input() task: Task;
  taskStatus = 'unhighlighted';
  isChosen = false;

  toggleStatus(isMouseOver: boolean) 
  {
    if(!this.isChosen)
    {
      this.taskStatus = isMouseOver ? 'highlighted' : 'unhighlighted';
    }
  }

  toggleChosen() {
    this.isChosen = !this.isChosen;
    this.taskStatus = this.isChosen ? 'activated' : 'highlighted';
  }
}