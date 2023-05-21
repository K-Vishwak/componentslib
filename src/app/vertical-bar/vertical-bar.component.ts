import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.scss']
})
export class VerticalBarComponent implements OnInit {

  constructor() { }
  list: string[] = [
    'Home', 'About', 'Articles', 'Books', 'Videos', 'Stories', 'Feeds', 'Shorts'
  ]
  isClosed = false;

  ngOnInit(): void {
  }

}
