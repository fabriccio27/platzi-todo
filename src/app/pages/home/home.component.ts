import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 tasks = signal<Task[]>([
  {
    id: 1,
    title: 'Instalar Angular CLI',
    completed: false
  },
  {
    id: 2,
    title: 'Crear proyecto',
    completed: false
  },
  {
    id: 3,
    title: 'Agregar componente',
    completed: false
  },
  {
    id: 4,
    title: 'Agregar servicio',
    completed: false
  },
 ])

 changeHandler(event:Event) {
  const input = event.target as HTMLInputElement;
  this.addTask(input.value);
 }

 addTask(title:string) {
  const newTask ={
    id: Date.now(),
    title,
    completed:false
  }
  this.tasks.update((prevState) =>[...prevState, newTask]);
 }

 deleteTask(index: number) {
  this.tasks.update((prevState) => prevState.filter((_, position) => position !== index));
 }
}
