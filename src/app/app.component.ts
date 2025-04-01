import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,
     FooterComponent, MaincontentComponent, LandingpageComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-Portfolio';

  constructor(private translate: TranslateService) {
   
  }
  toggleLanguage(language:string){
   
  }
}
