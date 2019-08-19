import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | no help', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:no-help');
    assert.ok(route);
  });
});
