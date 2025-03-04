import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
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
 newTaskCtrl = new FormControl('', {
  nonNullable:true,
  validators: [
    Validators.required,
  ]
});
 changeHandler() {
  const value = this.newTaskCtrl.value;
  if (this.newTaskCtrl.valid && value.trim() !== '' ) {
    
    this.addTask(value);
    this.newTaskCtrl.setValue('');
  }
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
 onClickHandler(index: number) {
  this.tasks.update((prevState) => prevState.map((task, position) => {
    if (index === position) {
      return {...task, completed: !task.completed}
    }
    return task;
  }));
 }
}
