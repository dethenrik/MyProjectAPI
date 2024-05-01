import { Component } from '@angular/core';
import { Samurai } from './models/Samurai';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //variable name: Type=value
  title = 'samuraiProject002'; //javascript

  //variables
  name: string = 'Selin'; //typescript
  surname: string= 'Chaprazla';
  age: number= 25;
  favcolor: string = 'red';
  phonenum: number = 52342234;
  animal: string= 'dog';
  
  
  sand: boolean = true;

  list: string [] = ["one","two","three",];


  ngOnInit(): void{
    console.log("first test");

    //invoke a function
    this.create(); //this is a "pointer" to the object
  }


  //function
  create(): void {

    console.log("Create function called")

  }

cancel(): void {
  console.log("Cancel function is called.")
}
  
}

