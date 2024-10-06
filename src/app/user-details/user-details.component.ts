import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  searchPhone = '';
  foundUser: any = null;

  @Input() user: any;
  @Output() goToLoginPage = new EventEmitter<void>();

  // Search for the user based on phone number
  search() {
    if (this.user && this.user.phone === this.searchPhone) {
      this.foundUser = this.user;
    } else {
      alert('User not found!');
      this.foundUser = null;
    }
  }

  // Emit event to go back to login page
  goToLogin() {
    this.goToLoginPage.emit();
  }
}
