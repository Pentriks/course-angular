import { Component } from '@angular/core';
import { Weapons } from 'src/app/Weapons.ts/Weapons.ts/Weapons.ts.module';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  weapon?: Weapons;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getWeapons()
  }

  ngOnInit(): void {}

  getWeapons() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((weapon) => (this.weapon = weapon));
  }
}
