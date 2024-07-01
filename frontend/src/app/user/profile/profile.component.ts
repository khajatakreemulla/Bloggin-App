import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {
    profilePic: 'https://via.placeholder.com/150',
    fullName: 'Your Name',
    bio: ""
  };

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  onProfilePicClick(): void {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.profilePic = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    const formData : any = {}
    // formData.append('profilePic', this.fileInput.nativeElement.files[0]);
    formData.fullName =  this.user.fullName
    formData.bio = this.user.bio

    this.userService.updateUserDetails(formData, this.user.id).subscribe(response => {
      if(response && response.success && response.user){
        this.router.navigate(["/user/profile"])
      }
    }, error => {
      console.error('Error updating profile', error);
    });
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(response=>{
      if(response && response.success && response.user){
        this.user = response.user
      }
    })
  }

}
