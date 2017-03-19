import { Component, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

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
      transition('highlighted <=> unhighlighted', animate(150)),
      transition(':enter', [
        style({ transform: 'scale(0.5)'}),
        animate('500ms cubic-bezier(.6, -0.24, .51, 1.13)')
      ]),
      transition(':leave', animate('500ms cubic-bezier(.6, -0.24, .51, 1.13)', style({ transform: 'scale(0.5)'})))
    ])
  ]
})
export class TaskComponent {
  @Input() task: Task;
  @Input() showTask = true;
  taskStatus = '';
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