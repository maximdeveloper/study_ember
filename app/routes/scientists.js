import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Einstein', 'Petr Kulhanek', 'Lomonosov'];
  }
});
