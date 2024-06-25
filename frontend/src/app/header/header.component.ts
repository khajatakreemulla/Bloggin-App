import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ViewChild("authModel") authModel: ElementRef | any;
  showSearch: boolean = false;
  isUserAuthenticated: boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  search(searchTerm: string) {
    console.log('Performing search for:', searchTerm);
    this.showSearch = false;
  }

  handleSignInSuccess(){
    const modalElement = this.elementRef.nativeElement.querySelector('.modal');
    const backdropElement : HTMLElement | null = document.querySelector('.modal-backdrop');
    modalElement.style.display = "none"
    if(backdropElement) backdropElement.style.display = "none"
  }

  isAuthenticated(){
    return this.isUserAuthenticated
  }

  logout(){
    this.authService.logout().subscribe(response=>{
      if(response && response.success){
        this.router.navigate(["/"])
      }
    })
  } 

  constructor(private elementRef: ElementRef, private router : Router, private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.authService.getAuthenticationStatus().subscribe(authenticated=>{
      this.isUserAuthenticated = authenticated
    })
  }

}
