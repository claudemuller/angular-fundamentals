import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="voting-widget-container pointable" (click)="onClick()">
      <div class="well voting-widget">
        <div class="voting-buttons">
          <i [style.color]="iconColour" class="glyphicon glyphicon-heart"></i>
        </div>
      </div>
      <div class="badge badge-inverse voting-count">
        <div>{{ count }}</div>
      </div>
    </div>
  `,
  stylesUrls: ['/app/events/event-details/upvote.component.css']
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColour = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();

  public iconColour: string;

  public onClick(): void {
    this.vote.emit({});
  }
}
