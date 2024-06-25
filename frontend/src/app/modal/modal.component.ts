import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() signInSuccess = new EventEmitter<string>()
  activeTab: any = 'signin';
  successMessage: string = '';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  isTabActive(tab: string): boolean {
    return this.activeTab === tab;
  }

  handleRegistrationSuccess(message: string) {
    this.successMessage = message;
    this.setActiveTab('signin');
  }

  handleSignInSuccess(message : any){
    this.signInSuccess.emit("SignIn successful")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
