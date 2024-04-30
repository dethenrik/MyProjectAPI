import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Armour } from 'src/app/models/Armour';
import { Clan } from 'src/app/models/Clan';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent {
clanList: Clan [] = [];
clan: Clan= {};


clanForm: FormGroup = new FormGroup({

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

constructor(private service: GenericService<Clan>) {
}

getAll(): void{
 this.service.getAll('clan').subscribe(data => {
     this.clanList= data;
     console.log(data)
     console.log(this.clanList); }//end getAll
)};

Create(): void {
console.log(this.clanForm.value);
this.clan=this.clanForm.value;
}//end class

}

