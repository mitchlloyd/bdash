import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  employees: inject.service(),

  model() {
    return this.get('employees').all();
  }
});
