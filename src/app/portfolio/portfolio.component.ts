import { asNativeElements, Component, ViewChild, ElementRef } from '@angular/core';
import { Projects } from '../interfaces/projects';
import { OverlayComponent } from './overlay/overlay.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
 
  projects: Projects[] =  [
    { 
      name: 'Pokedex',
       technologies: [
        'HTML', 'CSS', 'JavaScript'
      ] ,
      previewImg: '../../assets/img/previews/el_pollo_loco.jpg',
      description:'kommt noch'
    },
    {name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'
      ],
      previewImg: '../../assets/img/previews/el_pollo_loco.jpg',
      description:'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    },
    {name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'
      ],
      previewImg: '../../assets/img/previews/el_pollo_loco.jpg',
      description:'aber nicht heute'
    }
  ];

activePreview: string = '';
previewPosition = { top: '0px', right: '0px' };

onHover(event: MouseEvent, project: any) {  
  
  this.activePreview = project.previewImg;

  const target = event.currentTarget as HTMLElement;
  const wrapper = document.querySelector('.projectWrapper') as HTMLElement;
  
  if (wrapper) {
    const targetRect = target.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();

    this.previewPosition = {
      top: `${targetRect.top - wrapperRect.top}px`,
      right: `0px` 
    };
  }
}

onLeave() {
  this.activePreview = '';
}

selectedProject: any = null;



}
