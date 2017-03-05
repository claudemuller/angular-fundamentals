import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ISession } from '../shared/event.model';

import { restrictedWords } from '../shared/restrictedWords.validator';

@Component({
  templateUrl: 'app/events/event-details/create-session.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }
    .error input,
    .error select,
    .error textarea {background-color: #e3c3c5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :-ms-input-placeholder {color: #999;}
  `]
})
export class CreateSessionComponent implements OnInit {
  public newSessionForm: FormGroup;
  public name: FormControl;
  public presenter: FormControl;
  public duration: FormControl;
  public level: FormControl;
  public abstract: FormControl;

  public ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  public saveSession(formValues): void {
    let session: ISession = {
      id: null,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: +formValues.level,
      abstract: formValues.abstract,
      voters: []
    };

    console.log(session);
  }
}
