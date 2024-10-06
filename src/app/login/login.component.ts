import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name = '';
  email = '';
  phone = '';
  password = '';

  @Output() userSubmitted = new EventEmitter<any>();

  submit() {
    const user = { name: this.name, email: this.email, phone: this.phone, password: this.password };
    this.userSubmitted.emit(user);
  }

  viewDetails() {
    alert('Please submit the form first!');
  }
}