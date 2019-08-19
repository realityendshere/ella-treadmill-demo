import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | load all', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:load-all');
    assert.ok(route);
  });
});
