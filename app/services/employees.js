import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Service.extend({
  all() {
    return RSVP.resolve([
      { name: "Mitch", dob: "1983-03-26" },
      { name: "Joe",   dob: "1960-12-14" },
      { name: "Ellie", dob: "2012-02-10" },
      { name: "Brian", dob: "1960-12-15" },
      { name: "Sally", dob: "1990-01-08" },
      { name: "Mark",  dob: "1960-12-14" },
      { name: "Liz",   dob: "1960-12-15" }
    ]);
  }
});
