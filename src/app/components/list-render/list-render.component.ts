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

  weaponDetails = '';

  constructor(private listService: ListService) {
    this.getWeapons()
  }

  ngOnInit(): void {}

  showCaliber(weapon: Weapons): void {
    this.weaponDetails = `The gun ${weapon.name} has a ${weapon.caliber} gauge!`
  }

  removeWeapons(weapon: Weapons) {
    this.weapons = this.weapons.filter((a) => weapon.name !== a.name);
    this.listService.remove(weapon.id).subscribe();
  }

  getWeapons(): void {
    this.listService.getAll().subscribe((weapons) => (this.weapons = weapons));
  }
}
