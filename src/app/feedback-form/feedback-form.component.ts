import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  feedbackSubmitter = new FormControl('');
  feedbackScore = new FormControl(5);
  feedbackComments = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  submitFeedback() {
    alert('Thank you for submitting your feedback!');

    console.log('Feedback Submitter: ' + this.feedbackSubmitter.value);
    console.log('Feedback Score: ' + this.feedbackScore.value);
    console.log('Feedback Comments: ' + this.feedbackComments.value);
  }
}
