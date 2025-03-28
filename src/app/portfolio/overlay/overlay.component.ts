import { Component, Input } from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';
import { Projects } from '../../interfaces/projects';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
@Input()
singleProject: Projects = {
  name:'',
  technologies:[],
  previewImg:'',
  description:''
}
@Input() index:number = 0;

}
