import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Rank } from 'src/app/models/Rank';
import { War } from 'src/app/models/War';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.css']
})
export class WarComponent {
warList: War [] = [];
war: War= {};


warForm: FormGroup = new FormGroup({

id: new FormControl('',[Validators.required]),
name: new FormControl(''),
deathCount: new FormControl(''),
location: new FormControl('')
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

constructor(private service: GenericService<War>) {
}

getAll(): void{
 this.service.getAll('war').subscribe(data => {
     this.warList= data;
     console.log(data)
     console.log(this.warList); }//end getAll
)};

Create(): void {
console.log(this.warForm.value);
this.war=this.warForm.value;
}//end class

}

