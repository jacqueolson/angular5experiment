import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnChanges {
  @Input() headerUser;
  @Output() deleteUser: EventEmitter<any> = new EventEmitter();

  isAuthenticated: boolean;

  constructor() {
   }

  ngOnChanges() {
    this.isAuthenticated = this.headerUser ? true : false;
    console.log(this.headerUser + ' ' + this.isAuthenticated + ' Header changes');
  }

  onDeleteUser() {
    this.headerUser = null;
    this.deleteUser.emit(null);
  }

  onLogin(): void {
  }
}
