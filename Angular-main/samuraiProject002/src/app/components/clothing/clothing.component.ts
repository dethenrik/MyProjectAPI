import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Clothing } from 'src/app/models/Clothing';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent {
clothingList: Clothing [] = [];
clothing: Clothing= {};


clothingForm: FormGroup = new FormGroup({

id: new FormControl('',[Validators.required]),
name: new FormControl(''),
desciption: new FormControl('')

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

constructor(private service: GenericService<Clothing>) {
}

getAll(): void{
 this.service.getAll('clothing').subscribe(data => {
     this.clothingList= data;
     console.log(data)
     console.log(this.clothingList); }//end getAll
)};

Create(): void {
console.log(this.clothingForm.value);
this.clothing=this.clothingForm.value;
}//end class

}

