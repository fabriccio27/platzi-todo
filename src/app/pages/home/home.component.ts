import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 tasks = signal([
  'Feel better',
  'Work at your best current capacity',
  'Rest some'
 ])

 changeHandler(event:Event) {
  const input = event.target as HTMLInputElement;
  this.tasks.update((prevState) =>[...prevState, input.value]);
 }
 deleteTask(index: number) {
  this.tasks.update((prevState) => prevState.filter((_, position) => position !== index));
 }
}
