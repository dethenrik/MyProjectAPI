import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Armour } from 'src/app/models/Armour';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-armour',
  templateUrl: './armour.component.html',
  styleUrls: ['./armour.component.css']
})
export class ArmourComponent {
armourList: Armour [] = [];
armour: Armour= {};


armourForm: FormGroup = new FormGroup({

id: new FormControl('',[Validators.required, Validators.minLength(5)]),
name: new FormControl(''),
description: new FormControl(''),
email: new FormControl('',[Validators.required, Validators.email]),
age: new FormControl(''),

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

constructor(private service: GenericService<Armour>) {
}

getAll(): void{
 this.service.getAll('armour').subscribe(data => {
     this.armourList= data;
     console.log(data)
     console.log(this.armourList); }//end getAll
)};

Create(): void {
console.log(this.armourForm.value);
this.armour=this.armourForm.value;
}//end class

}

