import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todoapp';
  tasks = [
    'Install angular CLI',
    'Reset html',
    'Say hello world',
    'Use directives'
  ];
}
