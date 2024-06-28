import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-articles',
  templateUrl: './trending-articles.component.html',
  styleUrls: ['./trending-articles.component.css']
})
export class TrendingArticlesComponent implements OnInit {
  articles = [
    {
      title: 'Master JavaScript: Comprehensive Guide for Beginners to Advanced Programmers with Hands-On Projects and Exercises',
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2079868327/display_1500/stock-vector-this-colorful-illustration-shows-the-young-developers-building-a-program-using-the-python-2079868327.jpg',
      content: 'Unlock the full potential of JavaScript with our comprehensive guide, featuring step-by-step tutorials, hands-on projects, and exercises for both beginners and advanced programmers.',
      id : 1,
      tags: "Html, CSS, JS"
    },
    {
      title: 'Python Programming: Mastering the Language from Basics to Advanced Concepts',
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2060615657/display_1500/stock-photo-programmer-developer-typing-script-source-languages-coding-symbols-icon-development-project-data-2060615657.jpg',
      content: 'Unlock the power of Python programming with this comprehensive guide. From fundamental syntax to advanced algorithms, build your expertise through practical examples and projects.',
      id : 2,
      tags: "Html, CSS, JS"
    },
    {
      title: 'Front-End Web Development: Building Modern User Interfaces with HTML, CSS, and JavaScript',
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/1906572394/display_1500/stock-vector-website-programming-and-coding-web-development-and-coding-d-vector-illustrations-1906572394.jpg',
      content: 'Learn front-end web development essentials! Dive into HTML, CSS, and JavaScript to create responsive and interactive user interfaces for modern web applications.',
      id : 3,
      tags: "Html, CSS, JS"
    },
    {
      title: 'Mastering Data Science: A Hands-On Approach to Big Data Analytics and Machine Learning',
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2001397658/display_1500/stock-photo-concept-of-java-programming-language-web-development-software-technology-2001397658.jpg',
      content: 'Gain expertise in data science with practical exercises and real-world applications. Learn big data analytics, machine learning, and data visualization techniques.',
      id : 4,
      tags: "Html, CSS, JS"
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
