import { ListService } from './../../list.service';
import { Component } from '@angular/core';
import { Weapons } from 'src/app/Weapons.ts/Weapons.ts/Weapons.ts.module';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  weapons: Weapons[] = [];

  weapon: Weapons = {
    name: 'Teste',
    type: 'Alguma coisa',
    caliber: 10,
  };

  weaponDetails = '';

  constructor(private listService: ListService) {
    this.getWeapons()
  }

  ngOnInit(): void {}

  showCaliber(weapon: Weapons): void {
    this.weaponDetails = `The gun ${weapon.name} has a ${weapon.caliber} gauge!`
  }

  removeWeapons(weapon: Weapons) {
    console.log('Removing weapon...');
    this.weapons = this.listService.remove(this.weapons, weapon);
  }

  getWeapons(): void {
    this.listService.getAll().subscribe((weapons) => (this.weapons = weapons));
  }
}
