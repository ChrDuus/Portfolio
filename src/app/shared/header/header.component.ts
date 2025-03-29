import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private renderer: Renderer2) {

  }
mobileMenuActive:boolean = false

  @ViewChild('langBtnDe') langBtnDe!: ElementRef<HTMLParagraphElement>;
  @ViewChild('langBtnEn') langBtnEn!: ElementRef<HTMLParagraphElement>;
  

  toggleLanguageColor() {
    this.langBtnDe.nativeElement.classList.toggle('active'); 
    this.langBtnEn.nativeElement.classList.toggle('active'); 
  }

 toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;

    if (this.mobileMenuActive) {
      this.renderer.addClass(document.body, 'menu-open');
    } else {
      this.renderer.removeClass(document.body, 'menu-open');
    }
  }
}

