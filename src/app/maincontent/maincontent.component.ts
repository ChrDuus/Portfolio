import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { FeedbacksComponent } from '../feedbacks/feedbacks.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [AboutmeComponent, FeedbacksComponent, ContactComponent, SkillsComponent, PortfolioComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
