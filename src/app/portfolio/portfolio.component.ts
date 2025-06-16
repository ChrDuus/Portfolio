import { Component } from '@angular/core';
import { Projects } from '../interfaces/projects';
import { OverlayComponent } from './overlay/overlay.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [OverlayComponent, TranslatePipe, TranslateDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: Projects[] = [
    { 
      name: 'Pokedex',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      previewImg: '../../assets/img/previews/pokedex.jpg',
      description: 'A classic Pokedex with stats, evolutions and some more. Made with PokeAPI',
      link:'/Pokedex/',
      github:'https://github.com/ChrDuus/Pokedex'
    },
    { 
      name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      previewImg: '../../assets/img/previews/el_pollo_loco.jpg',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      link:'',
      github:''
    },
    { 
      name: 'Join',
      technologies: ['Angular', 'TypeScript'],
      previewImg: '../../assets/img/previews/Join.jpg',
      description: 'Kanban porject management Tool, made with Angular',
      link:'',
      github:''
    }
  ];

  activePreview: string = '';
  previewPosition = { top: '0px', right: '0px' };

  onHover(event: MouseEvent, project: any) {  
    if (window.innerWidth < 1050) { 
      return;
    }
    this.activePreview = project.previewImg;

    const target = event.currentTarget as HTMLElement;
    const wrapper = document.querySelector('.project') as HTMLElement;

    if (wrapper) {
      const targetRect = target.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();

      this.previewPosition = {
        top: `${targetRect.top - wrapperRect.top}px`,
        right: `250px`
      };
    }
  }

  onLeave() {
    this.activePreview = '';
  }

  selectedProject: any ;
  selectedIndex: number = 0;

  openProjectOverlay(project: Projects, index: number) {
    this.selectedProject = project;
    this.selectedIndex = index;
    document.body.style.overflow = 'hidden';
  }

  closeOverlay() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
  nextProject() {
    if (this.selectedIndex < this.projects.length - 1) {
      this.selectedIndex++;
    } else {
      this.selectedIndex = 0; 
    }
  
    this.selectedProject = this.projects[this.selectedIndex];
  }
}
