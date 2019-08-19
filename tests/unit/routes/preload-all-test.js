import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | preload all', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:preload-all');
    assert.ok(route);
  });
});
