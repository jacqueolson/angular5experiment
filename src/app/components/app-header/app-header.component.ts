import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnChanges {
  @Input() headerUser;
  isAuthenticated;

  constructor() {
    this.isAuthenticated = this.headerUser ? true : false;
   }

  ngOnChanges() {
    this.isAuthenticated = this.headerUser ? true : false;
    console.log(this.headerUser + ' ' + this.isAuthenticated + ' Header changes');
  }
}
