import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  items: any;

  ngOnInit() {

    this.dataService.getItems().subscribe(data => {
      this.items = data;
    });
  }

}
