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
      imageUrl: 'https://placehold.co/400x300?text=Cold+Storage+1'
    },
    {
      title: 'Smart Purchase Planning',
      description: 'Seamless purchase and procurement workflow.',
      imageUrl: 'https://placehold.co/400x300?text=Cold+Storage+2'
    },
    {
      title: 'Stock Management',
      description: 'Know what’s in your freezer — always!',
      imageUrl: 'https://placehold.co/400x300?text=Cold+Storage+3'
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
