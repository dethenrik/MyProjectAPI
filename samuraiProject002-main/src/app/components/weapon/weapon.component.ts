import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/models/Weapon';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {

  weaponList: Weapon[] = [];

  constructor(private service: GenericService<Weapon>) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll('weapon').subscribe(data => {
      this.weaponList = data;
      console.log(data);
      console.log(this.weaponList);
    });
  }

}
