import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles/articles.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSearch: boolean = false;
  isUserAuthenticated: boolean = false;
  authorProfilePic: string = ""
  user:any = {}

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  search(searchTerm: string) {
    this.showSearch = false;
    this.router.navigate(['/article/search'], { queryParams: { q: searchTerm } });
  }

  handleSignInSuccess(){
    const buttonClose = this.elementRef.nativeElement.querySelector('.btn-close');
    buttonClose.click()
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

  constructor(private elementRef: ElementRef, private router : Router, private authService : AuthenticationService, private userService: UserService) { }

  ngOnInit(): void {
    this.authService.getAuthenticationStatus().subscribe(authenticated=>{
      this.isUserAuthenticated = authenticated
    })

    this.userService.getUserDetails().subscribe(response=>{
      this.authorProfilePic = response.user.profilePic
      this.user = response.user
    })
  }

}
