import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Projects } from '../../interfaces/projects';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  @Input() singleProject: Projects = {
    name: '',
    technologies: [],
    previewImg: '',
    description: ''
  };
  
  @Input() index: number = 0;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  closeOverlay() {
    this.close.emit();
  }
}
