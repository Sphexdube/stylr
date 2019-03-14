import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

// import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getItems().subscribe(data => {
      this.items = data;
      this.galleryImages = this.items.map(a => {
        return {
          small: a.SOURCE,
          medium: a.SOURCE,
          big: a.SOURCE,
          description: a.NAME + '<b>' + '<br>' + '<i> By </i> ' + camelize(a.RETAILER) + '<br>' + 'R' + a.PRICE + '</b>',
          select: false
        };
      });


    });

    this.galleryOptions = [
      {
        width: '60%',
        height: '40%',
        thumbnailsColumns: 4,
        imageDescription: true,
        imageArrows: false,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '97%',
        // thumbnailsRemainingCount: true,
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        imageSwipe: true,
        thumbnailsSwipe: true
      }
    ];

    function camelize(str) {
      return str.replace(/\b\w/g, chr => chr.toUpperCase()).replace(' ', ' ');
    }

    // $('.ngx-gallery-thumbnail.ngx-gallery-active').on('touchstart', () => {
    //   alert('Sphe');
    // });

  }

  onChange(data: any): void {
    console.log(data);
  }



}
