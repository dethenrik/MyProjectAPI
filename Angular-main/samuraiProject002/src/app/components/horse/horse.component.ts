import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Horse } from 'src/app/models/Horse';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})
export class HorseComponent {
horseList: Horse [] = [];
horse: Horse= {};


horseForm: FormGroup = new FormGroup({

id: new FormControl('',[Validators.required]),
name: new FormControl(''),
description: new FormControl('')

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

constructor(private service: GenericService<Horse>) {
}

getAll(): void{
 this.service.getAll('horse').subscribe(data => {
     this.horseList= data;
     console.log(data)
     console.log(this.horseList); }//end getAll
)};

Create(): void {
console.log(this.horseForm.value);
this.horse=this.horseForm.value;
}//end class

}

