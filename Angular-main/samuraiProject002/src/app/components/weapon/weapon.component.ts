import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Rank } from 'src/app/models/Rank';
import { War } from 'src/app/models/War';
import { Weapon } from 'src/app/models/Weapon';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent {
weaponList: Weapon [] = [];
weapon: Weapon= {};


weaponForm: FormGroup = new FormGroup({

id: new FormControl('',[Validators.required]),
name: new FormControl(''),
});
// [validators.required] bruges når du skal checke om feltet er Clicked, og [validators.minlenght(5)] sætter længden af din sætning.
// [validators.email] checker om email er indtasted correct(Skal indeholde @ plus 2 bogstaver foran '@' og 2 efter)



profileForm: FormGroup = new FormGroup({
  //its a class even though its a method
firstName: new FormControl(''),
LastName: new FormControl(''),
}); 

ngOnInit(): void{
   this.getAll();
}

constructor(private service: GenericService<Weapon>) {
}

getAll(): void{
 this.service.getAll('weapon').subscribe(data => {
     this.weaponList= data;
     console.log(data)
     console.log(this.weaponList); }//end getAll
)};

Create(): void {
console.log(this.weaponForm.value);
this.weapon=this.weaponForm.value;
}//end class

}

