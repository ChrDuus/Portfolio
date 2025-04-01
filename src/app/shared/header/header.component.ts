import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, Renderer2  } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';
import { TranslationService } from '../../services/translationservice.service'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective, AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private translationService: TranslationService) {

  }
mobileMenuActive:boolean = false

  @ViewChild('langBtnDe') langBtnDe!: ElementRef<HTMLParagraphElement>;
  @ViewChild('langBtnEn') langBtnEn!: ElementRef<HTMLParagraphElement>;
  

  toggleLanguageColor() {
    this.langBtnDe.nativeElement.classList.toggle('active'); 
    this.langBtnEn.nativeElement.classList.toggle('active'); 
   
  }
  
  changeLanguage() {
    const newLang = this.translationService.getCurrentLanguage() === 'en' ? 'de' : 'en';
    this.translationService.switchLanguage(newLang);
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

