import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Options } from './Options';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  testForm: NgForm;
  dropdown: string = '';

  @Input()
  options: Options[] = [
    {
      value: 'first',
      isActive: false
    },
    {
      value: 'second',
      isActive: false
    }
  ];
  public isDropDownOpen: boolean = false;

  ngOnInit() {
    this.options.forEach((opt) => {
      opt.isActive = false;
    });
    this.options.splice(0, 0, { value: '', isActive: true });
  }

  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  selectOption(evt: any, optionIndex: number) {
    this.options.forEach((opt: any, index: number) => {
      opt.isActive = optionIndex === index;
    });
    this.dropdown = evt.target.innerHTML;
  }

}
