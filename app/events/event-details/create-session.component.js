"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var restrictedWords_validator_1 = require('../shared/restrictedWords.validator');
var CreateSessionComponent = (function () {
    function CreateSessionComponent() {
        this.saveNewSession = new core_1.EventEmitter();
        this.cancelAddSession = new core_1.EventEmitter();
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.name = new forms_1.FormControl('', forms_1.Validators.required);
        this.presenter = new forms_1.FormControl('', forms_1.Validators.required);
        this.duration = new forms_1.FormControl('', forms_1.Validators.required);
        this.level = new forms_1.FormControl('', forms_1.Validators.required);
        this.abstract = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(400), restrictedWords_validator_1.restrictedWords(['foo', 'bar'])]);
        this.newSessionForm = new forms_1.FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    CreateSessionComponent.prototype.saveSession = function (formValues) {
        var session = {
            id: null,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    };
    CreateSessionComponent.prototype.cancel = function () {
        this.cancelAddSession.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CreateSessionComponent.prototype, "saveNewSession", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CreateSessionComponent.prototype, "cancelAddSession", void 0);
    CreateSessionComponent = __decorate([
        core_1.Component({
            selector: 'create-session',
            templateUrl: 'app/events/event-details/create-session.component.html',
            styles: ["\n    em {\n      float: right;\n      color: #e05c65;\n      padding-left: 10px;\n    }\n    .error input,\n    .error select,\n    .error textarea {background-color: #e3c3c5;}\n    .error ::-webkit-input-placeholder {color: #999;}\n    .error ::-moz-placeholder {color: #999;}\n    .error :-moz-placeholder {color: #999;}\n    .error :-ms-input-placeholder {color: #999;}\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], CreateSessionComponent);
    return CreateSessionComponent;
}());
exports.CreateSessionComponent = CreateSessionComponent;
//# sourceMappingURL=create-session.component.js.map