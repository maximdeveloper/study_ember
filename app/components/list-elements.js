import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['collection-item'],
  classNameBindings: ['isEnabled:enabled:disabled'],
  isEnabled: true,
  displayDetails: true,

  mouseEnter: function(event) {
    //console.log(event.target);
    this.toggleProperty('displayDetails');//set to oposite value boolean var
    this.toggleProperty('isEnabled');
    return;
  }
});
