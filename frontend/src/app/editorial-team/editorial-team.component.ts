import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial-team',
  templateUrl: './editorial-team.component.html',
  styleUrls: ['./editorial-team.component.css']
})
export class EditorialTeamComponent implements OnInit {
  items = [
    { name: 'Harsh Aggarwal', imageUrl: 'https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2019/12/Harsh-Aggarwal-1.jpg' },
    { name: 'Amit Aggarwal', imageUrl: 'https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2019/12/Amit-Aggarwal.jpg' },
    { name: 'Shradha Sharma', imageUrl: 'https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2019/12/Shradha-Sharma.jpg' },
    { name: 'Varun Krishnan', imageUrl: 'https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2019/12/Varun-Krishnan.jpg' },
    { name: 'Ashish Sinha', imageUrl: 'https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2019/12/Ashish-Sinha.jpeg' },
    { name: 'Arun Prabhudesai', imageUrl: 'https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2019/12/Arun-Prabhudesai.jpg' },
    { name: 'Srinivas Tamada', imageUrl: 'https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2019/12/Srinivas-Tamada.png' }
  ];
  chunkedItems() {
    const chunkSize = 5;
    const chunks = [];
    for (let i = 0; i < this.items.length; i += chunkSize) {
      chunks.push(this.items.slice(i, i + chunkSize));
    }
    return chunks;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
