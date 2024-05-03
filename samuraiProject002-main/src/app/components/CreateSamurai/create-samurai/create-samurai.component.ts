import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Samurai } from 'src/app/models/Samurai';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-create-samurai',
  templateUrl: './create-samurai.component.html',
  styleUrls: ['./create-samurai.component.css']
})
export class CreateSamuraiComponent implements OnInit {
  samuraiList: Samurai[] = [];
  samuraiVal?: Samurai;
  error: string = 'Name is required';

  samuraiForm: FormGroup = new FormGroup({
    samuraiName: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    age: new FormControl(''),
  });

  constructor(private service: GenericService<Samurai>) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll('samurai').subscribe(data => {
      this.samuraiList = data;
      console.log(data);
      console.log(this.samuraiList);
    });
    
  }
  Create(): void {
    if (this.samuraiForm.valid) {
      console.log('Form value:', this.samuraiForm.value);
  
      this.service.create(this.samuraiForm.value, 'samurai')
        .subscribe({
          next: (data) => {
            console.log('Create successful:', data);
            // Add the newly created samurai to the list
            this.samuraiList.push(data);
          },
          error: (error) => {
            console.error('Error creating samurai:', error);
          }
        });
    } else {
      console.log('Form is invalid. Cannot create samurai.');
    }
  }

   deleteSamurai(id: number): void {
     this.service.delete('samurai', id).subscribe(() => {
       // Reload the list after deletion
       this.getAll();
     });
   }
}