import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent {
feedbacks :{name: string; feedback: string, ref: string}[]= 
[
{
  name: 'Patrick Frey',
  feedback: 'With his open and helpful nature, Christian was a great asset to our team. He noticeably strengthened team spirit and was always a reliable source of support for any questions. He quickly grasped new concepts and applied them with dedication. What impressed me most was how calm and composed he remained even in stressful situations.',
  ref: 'Class Member'
},
{
  name: 'Soufiane Nouira',
  feedback: 'Working with Chris during our group projects was a great experience, he impressed us with his exceptional logical thinking. He always had a clear overview of complex structures and delivered structured, reliable solutions even under pressure. His analytical mindset was crucial to the success of our project.',
  ref: 'Group Member / Join'
},
{
  name: 'Marvin Schneemann',
  feedback: `Working with Christian on the Join project was a great experience. A highly skilled developer, he delivers fast yet maintains code quality and maintainability. Reliable, proactive, and a strong team player, Christian is solution-oriented and always ready to help. His calm, focused attitude boosts team dynamics. With his technical talent, speed, and collaboration skills, he’s an asset to any project.
`,
  ref: 'Group Member / Join'
},
{ feedback: "I have worked closely with Chris on two programming projects and was always impressed by his structured approach and technical expertise. He brings innovative solutions, works very reliably, and is always willing to share his knowledge with the team. Through his analytical skills and open communication, he contributed significantly to the success of our projects.",
   name: "Mihaela Aghirculesei",
    ref: "Group Member / Join"
   },
{ feedback: "I loved working with Chris. His thoughtful leadership shone in how he assigned tasks based on each team member’s strengths and preferences. Friendly, easy-going, and humorous, he made collaboration effective and enjoyable. His programming is logical and structured & he tackles problems step-by-step. Both technically and personally, he is a team asset. I recommend him without hesitation.",
   name: "Ha Dao",
    ref: "Group Member / Join"
   },
  
];
currentOffset = 0;

middleIndex = 2; 


slideLeft() {
  if(this.middleIndex < this.feedbacks.length -1){
    this.middleIndex++;
  }else{this. middleIndex = this.middleIndex}  
  this.shiftCards('right');
  
}

slideRight() {
  if (this.middleIndex != 0) {
    this.middleIndex--; 
  }else{
    this.middleIndex = 0
  }
  this.shiftCards('left'); 
}

shiftCards(direction: string) {
  const feedbackCards = document.querySelectorAll('.feedback-card');
  if (direction === 'left') {
    this.currentOffset += 100; 
  } else if (direction === 'right') {
    this.currentOffset -= 100; 
  }
  if(this.currentOffset > 200){
    this.currentOffset = 200;
  }if(this.currentOffset < -200){
    this.currentOffset= -200
  }
  feedbackCards.forEach((card: any, index:number) => {
    let isActive:boolean = index === this.middleIndex;
    card.style.transform = `translateX(${this.currentOffset}%) scale(${isActive ? 1.1 : 0.8})` ;
    
  });
}
getCardClass(index: number): string {
  if (index < this.middleIndex) return 'left feedback-card';
  if (index > this.middleIndex) return 'right feedback-card';
  return 'feedback-card';
}



}
