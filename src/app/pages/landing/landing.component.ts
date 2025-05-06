import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  currentSlide = 0;

  slides = [
    {
      title: 'Welcome to Cold Store',
      description: 'Track inventory, manage sales and optimize storage.',
      imageUrl: 'assets/images/slide1.jpg'
    },
    {
      title: 'Smart Purchase Planning',
      description: 'Seamless purchase and procurement workflow.',
      imageUrl: 'assets/images/slide2.jpg'
    },
    {
      title: 'Stock Management',
      description: 'Know what’s in your freezer — always!',
      imageUrl: 'assets/images/slide3.jpg'
    }
  ];
  

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000);
    }
  }
}
