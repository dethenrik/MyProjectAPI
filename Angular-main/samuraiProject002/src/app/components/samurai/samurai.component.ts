import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Samurai } from 'src/app/models/Samurai';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-samurai',
  templateUrl: './samurai.component.html',
  styleUrls: ['./samurai.component.css']
})
export class SamuraiComponent {
samuraiList: Samurai [] = [];
samurai: Samurai= {};


//its a class even though its a method
samuraiForm: FormGroup = new FormGroup({
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

constructor(private service: GenericService<Samurai>) {
}

getAll(): void{
 this.service.getAll('samurai').subscribe(data => {
     this.samuraiList= data;
     console.log(data)
     console.log(this.samuraiList); }//end getAll
)};

Create(): void {
console.log(this.samuraiForm.value);
this.samurai=this.samuraiForm.value;
}//end class

}

