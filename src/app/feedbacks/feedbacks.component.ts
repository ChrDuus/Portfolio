import { Component } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent {
feedbacks :{name: string; feedback: string, ref: string}[]= 
[
{
  name: 'test',
  feedback: 'doppelter test',
  ref: 'Boss'
},
{
  name: 'anderer test',
  feedback: 'hier wird auch getestet',
  ref: 'employee'
},
{
  name: 'mustermann, max',
  feedback: 'ewige testung',
  ref: 'putzfrau'
},
{ feedback: "Great teamwork!",
   name: "Alice",
    ref: "Software Engineer"
   },
{ feedback: "Very reliable.",
   name: "Bob",
    ref: "Project Manager"
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
    this.currentOffset += 105; 
  } else if (direction === 'right') {
    this.currentOffset -= 105; 
  }
  if(this.currentOffset > 210){
    this.currentOffset = 210;
  }if(this.currentOffset < -210){
    this.currentOffset= -210
  }
  feedbackCards.forEach((card: any, index:number) => {
    const isActive = index === this.middleIndex;
    card.style.transform = `translateX(${this.currentOffset}%) scale(${isActive ? 1.1 : 0.8})` ;
  });
}




}
