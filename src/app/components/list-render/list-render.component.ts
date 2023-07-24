import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  weapons = [
    { name: 'Kalashnikov', type: 'Machine gun' },
    { name: 'Uzi', type: 'Machine gun' },
    { name: 'M4', type: 'Machine gun' },
    { name: 'Ceska', type: 'Machine gun' },
  ];
}
