import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Output() signInSuccess = new EventEmitter<string>()
  @Input() successMessage: string = '';
  errorMessage : string = ""

  closeAlert() {
    this.successMessage = '';
  }
  
  closeErrorAlert(){
    this.errorMessage = ""
  }

  constructor(private authService : AuthenticationService, private router : Router) { }

  signIn(form : NgForm){
    if (form.valid) {
      console.log(form.value)
      let formData = form.value
      this.authService.login(formData.email, formData.password).subscribe(response=>{
        if(response && response.success){
          this.signInSuccess.emit(response.message)
          this.router.navigate(["/user/dashboard"])
        }
      },error => {
          this.errorMessage = error.error.errorMessage
          console.log(this.errorMessage)
      })
    }
  }

  ngOnInit(): void {
  }

}
