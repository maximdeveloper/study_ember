import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { validator, buildValidations } from 'ember-cp-validations';

var Validations = buildValidations({
  title: [
    validator('presence', true),
    validator('length', {
        max: 20,
        message: 'BLA BLA !!'
    })
  ]
});

export default Model.extend(Validations, {
  title: attr('string'),
  owner: attr(),
  city: attr(),
  type: attr(),
  image: attr(),
  bedrooms: attr()
});
