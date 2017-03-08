import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="voting-widget-container pointable" (click)="onClick()">
      <div class="well voting-widget">
        <div class="voting-buttons">
          <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
          <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
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
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();

  public onClick(): void {
    this.vote.emit({});
  }
}
