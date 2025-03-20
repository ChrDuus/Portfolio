import { Component, ElementRef, ViewChild,  } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  @ViewChild('langBtnDe') langBtnDe!: ElementRef<HTMLParagraphElement>;
  @ViewChild('langBtnEn') langBtnEn!: ElementRef<HTMLParagraphElement>;

  toggleLanguageColor() {
    this.langBtnDe.nativeElement.classList.toggle('active'); 
    this.langBtnEn.nativeElement.classList.toggle('active'); 
  }
}

