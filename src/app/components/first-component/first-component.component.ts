import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
 name: string = 'Pentriks';
 age: number = 20;
 job = 'Developer';
 hobbies = ['Run', 'Play', 'Study'];
 car = {
  name: 'i30',
  year: 2019,
 };
}
