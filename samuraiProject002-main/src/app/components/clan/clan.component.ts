import { Component, OnInit } from '@angular/core';
import { Clan } from 'src/app/models/Clan';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit {

  clanList: Clan[] = [];

  constructor(private service: GenericService<Clan>) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll('clan').subscribe(data => {
      this.clanList = data;
      console.log(data);
      console.log(this.clanList);
    });
  }

}
