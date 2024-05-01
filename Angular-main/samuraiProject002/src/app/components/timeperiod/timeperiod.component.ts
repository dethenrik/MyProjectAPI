import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Rank } from 'src/app/models/Rank';
import { TimePeriod } from 'src/app/models/TimePeriod';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-timeperiod',
  templateUrl: './timeperiod.component.html',
  styleUrls: ['./timeperiod.component.css']
})
export class TimeperiodComponent {
timeperiodList: TimePeriod [] = [];
timeperiod: TimePeriod= {};


timeperiodForm: FormGroup = new FormGroup({

id: new FormControl('',[Validators.required]),
date: new FormControl(''),
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

constructor(private service: GenericService<TimePeriod>) {
}

getAll(): void{
 this.service.getAll('timeperiod').subscribe(data => {
     this.timeperiodList= data;
     console.log(data)
     console.log(this.timeperiodList); }//end getAll
)};

Create(): void {
console.log(this.timeperiodForm.value);
this.timeperiod=this.timeperiodForm.value;
}//end class

}

