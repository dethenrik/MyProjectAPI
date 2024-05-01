import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Samurai } from 'src/app/models/Samurai';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-samurai',
  templateUrl: './samurai.component.html',
  styleUrls: ['./samurai.component.css']
})
export class SamuraiComponent implements OnInit {
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
    Create() {
    this.samuraiVal = this.samuraiForm.value;
    this.service.create(this.samuraiVal!, 'Samurai').subscribe(data =>
      {
        console.log(data);
      }
    )
  }

  // deleteSamurai(id: number): void {
  //   this.service.delete('samurai', id).subscribe(() => {
  //     // Reload the list after deletion
  //     this.getAll();
  //   });
  // }
}
