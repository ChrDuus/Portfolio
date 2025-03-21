import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
imgURLS= ['../../assets/img/skills/angular.svg',
          '../../assets/img/skills/typescript.svg',
          '../../assets/img/skills/javascript.svg',
          '../../assets/img/skills/html.svg',
          '../../assets/img/skills/css.svg',
          '../../assets/img/skills/firebase.svg',
          '../../assets/img/skills/git.svg',
          '../../assets/img/skills/materialDesign.svg',
          '../../assets/img/skills/rest-api.svg',
          '../../assets/img/skills/scrum.svg',
          '../../assets/img/skills/mindset.svg',
]
}
