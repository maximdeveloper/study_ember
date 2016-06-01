import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { validator, buildValidations } from 'ember-cp-validations';

var Validations = buildValidations({
  title: [
    validator('presence', true),
    validator('length', {
        max: 10,
        message: 'Maximum 10 characters'
    })
  ],
  username: [
    validator('presence', true)
  ],
  email: [
    validator('presence', true),
    validator('format', {
      type: 'email'
    })
  ]
});

export default Model.extend(Validations, {
  title: attr('string'),
  username: attr('string'),
  email: attr('string'),
  city: attr('string')
});
