import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrolly;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  @HostListener('scroll', ['$event']) 
  scrollEvent = (event: any): void => {
    this.scrolly = event.target.scrollingElement.scrollTop;
  }

}
