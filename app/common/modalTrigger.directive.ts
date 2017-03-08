import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input('modal-trigger') modalId: string;

  private _el: HTMLElement;

  constructor(@Inject(JQ_TOKEN) private $: any,
              ref: ElementRef) {
    this._el = ref.nativeElement;
  }

  public ngOnInit(): void {
    this._el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
