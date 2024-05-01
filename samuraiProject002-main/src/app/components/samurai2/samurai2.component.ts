import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Samurai } from 'src/app/models/Samurai';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-samurai2',
  templateUrl: './samurai2.component.html',
  styleUrls: ['./samurai2.component.css']
})
export class Samurai2Component {
  samurai: Samurai = {};
  error: string = 'Name is required';

  samuraiForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    age: new FormControl(''),
  });

  constructor(private service: GenericService<Samurai>) {}

  create(): void {
    if (this.samuraiForm.valid) {
      // Check if the name field is provided
      if (this.samuraiForm.value.name.trim() !== '') {
        // If the name is provided, proceed with creating the samurai
        console.log(this.samuraiForm.value);
        this.service.create(this.samuraiForm.value, "samurai").subscribe(
          response => {
            // Handle successful creation
            console.log("Samurai created successfully:", response);
          },
          error => {
            // Handle error
            console.error("Error creating samurai:", error);
          }
        );
      } else {
        // If the name is not provided, show an error message
        this.error = 'Name is required';
      }
    }
  }

  getAll(): void {
    // Make a GET request to your API to retrieve all samurais
    this.service.getAll("samurai")
      .subscribe(
        (data: Samurai[]) => {
          // Handle successful response from the server
          console.log('All samurais:', data);
        },
        (error: any) => {
          // Handle error response from the server
          console.error('Error fetching data:', error);
        }
      );
  }
}
