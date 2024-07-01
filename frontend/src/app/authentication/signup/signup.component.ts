import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() registrationSuccess = new EventEmitter<string>();
  errorMessage: string = '';
  passNotMatch: string = "Passwords do not match!"

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      this.authService.signup(formData.email, formData.fullName, formData.password).subscribe(
        response => {
          console.log('Signup successful', response);
          if(response && response.message){
              this.registrationSuccess.emit('Signup successful! Please log in with your credentials.');
          }
        },
        error => {
          this.errorMessage = error.error.error
        }
      );
      form.resetForm();
    }
  }

  closeAlert() {
    this.errorMessage = '';
  }

  constructor( private authService : AuthenticationService) { }

  ngOnInit(): void {
  }

}
