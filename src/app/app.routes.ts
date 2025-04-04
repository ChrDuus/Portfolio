import { Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    { path: '', component: MaincontentComponent},
    { path:'imprint', component: ImpressumComponent},
    { path: 'skillsSection', component: MaincontentComponent},
    { path: 'aboutMeSection', component: MaincontentComponent},
    { path: 'skillsSection', component: MaincontentComponent}
];