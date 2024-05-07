import { Component } from '@angular/core';
import { Samurai } from 'src/app/models/Samurai';
import { CreateSamuraiComponent } from '../../CreateSamurai/create-samurai/create-samurai.component';
import { SamuraiService } from 'src/app/services/create-samurai.service';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent{

  samuraiVisible: boolean = false;
  clanVisible: boolean = false;
  weaponVisible: boolean = false;
  armourVisible: boolean = false;
  timeperiodVisible: boolean = false;
  warVisible: boolean = false;
  clothingVisible: boolean = false;
  horsesVisible: boolean = false;


  toggleVisibility(section: string) {
    switch (section) {
      case 'samurai':
        this.samuraiVisible = !this.samuraiVisible;
        break;
      case 'clan':
        this.clanVisible = !this.clanVisible;
        break;
      case 'weapon':
        this.weaponVisible = !this.weaponVisible;
        break;
      case 'armour':
        this.armourVisible = !this.armourVisible;
        break;
      case 'timeperiod':
        this.timeperiodVisible = !this.timeperiodVisible;
        break;
      case 'war':
        this.warVisible = !this.warVisible;
        break;
      case 'clothing':
        this.clothingVisible = !this.clothingVisible;
        break;
      case 'horses':
        this.horsesVisible = !this.horsesVisible;
        break;
      default:
        break;
    }
  }
}
