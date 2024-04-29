import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

samuraiForm: FormGroup = new FormGroup({
        //its a class even though its a method
id: new FormControl(''),
  // if u bring the word "new" then its still a class but, its the copy of it. its a class too, but its not the first one created.
name: new FormControl(''),
description: new FormControl(''),
age: new FormControl(''),

}); 

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

