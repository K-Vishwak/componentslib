import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss']
})
export class HorizontalBarComponent implements OnInit {

  constructor() { }

  list: string[] = [
    'Home', 'About', 'Articles', 'Books', 'Videos', 'Stories', 'Feeds', 'Shorts'
  ]

  ngOnInit(): void {
  }

}
