import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
 name: string = 'Matheus';
 age: number = 30;
 job = 'Programador';
 hobbies = ['Correr', 'Jogar', 'Estudar'];
 car = {
  name: 'Polo',
  year: 2019,
 };
}
