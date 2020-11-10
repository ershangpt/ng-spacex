import {Component, Input, OnInit} from '@angular/core';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards;
  constructor(private spaceService: SpaceService){}
  ngOnInit(): void {
    this.getData({});
    this.spaceService.filter.subscribe(data => {
      this.getData(data);
    })
  }

  getData(data) {
    this.spaceService.getData(data).subscribe(data => {
      this.cards = data;
      console.log(this.cards)
    })
  }
}
