import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
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
  name = 'Fabricio';
}
