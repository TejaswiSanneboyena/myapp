import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any = null;
  showLogin = true;  // Control view switching

  // Receive user data from the login component
  onUserSubmitted(user: any) {
    this.user = user;
    this.showLogin = false;
  }

  // Handle the event to go back to the login page
  goToLoginPage() {
    this.showLogin = true;
  }
}