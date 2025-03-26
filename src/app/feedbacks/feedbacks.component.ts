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
}
]
}
