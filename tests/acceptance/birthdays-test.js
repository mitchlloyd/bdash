import { test } from 'qunit';
import Ember from 'ember';
import moduleForAcceptance from 'bdash/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | birthdays');

test('showing employees with birthdays today', function(assert) {
  this.application.__deprecatedInstance__.register('service:employees', Ember.Service.extend({
    all() {
      return Ember.RSVP.resolve([
        { name: 'today', dob: '2016-12-13' },
        { name: 'tomorrow', dob: '2016-12-14' }
      ]);
    }
  }));

  visit('/');

  andThen(function() {
    let names = find('[data-test-name]').toArray().map(el => el.innerText);

    assert.deepEqual(names, ['today']);
  });
});
