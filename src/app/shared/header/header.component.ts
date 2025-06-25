import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, Renderer2, HostListener  } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';
import { TranslationService } from '../../services/translationservice.service'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective, AppComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private translationService: TranslationService, private elementRef: ElementRef) {
    this.screenWidth = window.innerWidth;
    this.activeLanguage = this.translationService.getCurrentLanguage(); 
  }

  screenWidth: number;
  mobileMenuActive: boolean = false;
  activeLanguage: string = 'en';

  @ViewChild('langBtnDe') langBtnDe!: ElementRef<HTMLParagraphElement>;
  @ViewChild('langBtnEn') langBtnEn!: ElementRef<HTMLParagraphElement>;
  @ViewChild('langBtnDeMobile') langBtnDeMobile!: ElementRef<HTMLParagraphElement>;
  @ViewChild('langBtnEnMobile') langBtnEnMobile!: ElementRef<HTMLParagraphElement>;
  @ViewChild('overlay') overlayRef!: ElementRef;

  toggleLanguageColor() {
    this.langBtnDe.nativeElement.classList.toggle('active');
    this.langBtnEn.nativeElement.classList.toggle('active');
  }

  changeLanguage() {
    const newLang = this.translationService.getCurrentLanguage() === 'en' ? 'de' : 'en';
    this.translationService.switchLanguage(newLang);
    this.activeLanguage = newLang; 
  }

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;

    if (this.mobileMenuActive) {
      this.renderer.addClass(document.body, 'menu-open');
    } else {
      this.renderer.removeClass(document.body, 'menu-open');
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
  }

 @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (clickedInside && this.mobileMenuActive) {
      setTimeout(() => {
        this.mobileMenuActive = false;
      }, 500);      
    } 
}

}

