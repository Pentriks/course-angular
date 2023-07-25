import { Injectable } from '@angular/core';
import { Weapons } from './Weapons.ts/Weapons.ts/Weapons.ts.module';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(weapons: Weapons[], weapon: Weapons) {
    return weapons.filter((a) => weapon.name !== a.name);
  }
}
