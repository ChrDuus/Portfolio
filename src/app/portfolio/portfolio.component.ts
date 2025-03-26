import { asNativeElements, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
 
  projects =  [
    { 
      name: 'Pokedex',
       technologies: [
        'HTML', 'CSS', 'JavaScript'
      ] ,
      previewImg: '../../assets/img/previews/el_pollo_loco.jpg'
    },
    {name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'
      ],
      previewImg: '../../assets/img/previews/el_pollo_loco.jpg'
    },
    {name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'
      ],
      previewImg: '../../assets/img/previews/el_pollo_loco.jpg'
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

    // Position berechnen: Rechtsbündig und auf gleicher Höhe wie das Projekt
    this.previewPosition = {
      top: `${targetRect.top - wrapperRect.top}px`,
      right: `0px` // Fixiert am rechten Rand des Containers
    };
  }
}

onLeave() {
  this.activePreview = '';
}



}
