import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Rank } from 'src/app/models/Rank';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent {
rankList: Rank [] = [];
rank: Rank= {};


rankForm: FormGroup = new FormGroup({

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

constructor(private service: GenericService<Rank>) {
}

getAll(): void{
 this.service.getAll('rank').subscribe(data => {
     this.rankList= data;
     console.log(data)
     console.log(this.rankList); }//end getAll
)};

Create(): void {
console.log(this.rankForm.value);
this.rank=this.rankForm.value;
}//end class

}

