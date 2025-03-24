import { Component } from '@angular/core';

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
      ] 
    },
    {name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'
      ],
      previewImg: '../../assets/img/previews/el_pollo_loco.jpg'
    }
  ];
}
