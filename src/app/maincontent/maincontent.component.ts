import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [AboutmeComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
