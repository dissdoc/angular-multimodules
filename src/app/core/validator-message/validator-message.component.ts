import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator-message',
  templateUrl: './validator-message.component.html',
  styleUrls: ['./validator-message.component.css']
})
export class ValidatorMessageComponent {

  @Input() field: FormControl;

  public get validatorMessages() {
    const field = this.field;

    if (!field || !field.errors) {
      return false;
    }

    const errors = [];

    const config = {
      required: 'Field is required'
    };

    if (field.errors.hasOwnProperty('custom')) {
      config['custom'] = (typeof field.errors.custom === 'string' && field.errors.custom.length) ?
        field.errors.custom : 'Does not match to format';
    }

    if (field.errors.hasOwnProperty('minLength')) {
      config['minLength'] = `Minimum length ${field.errors.minLength.requiredLength}`;
    }

    Object.keys(field.errors).forEach((error: string) => {
      errors.push(config[error]);
    });

    return errors;
  }
}
