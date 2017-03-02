import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
      </div>
      <div>Price: R{{ event?.price }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location.address }}</span>
        <span class="pad-left">{{ event?.location.city }}, {{ event?.location.country }}</span>
      </div>
    </div>
  `,
  styles: [
    '.pad-left {margin-left: 10px;}',
    '.well div {color: #bbb;}',
    '.thumbnail {min-height: 210px;}',
    '.green {color: #003300 !important;}',
    '.bold {font-weight: bold;}'
  ]
})
export class EventThumbnailComponent {
  @Input() event: any;

  public getStartTimeClass(): Array<string> {
    if (this.event && this.event.time === '8:00 am') return ['green bold'];

    return [];
  }
}
