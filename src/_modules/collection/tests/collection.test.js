'use strict';

import Collection from '../collection';

describe('Collection View', function() {

  beforeEach(() => {
    this.collection = new Collection();
  });

  it('Should run a few assertions', () => {
    expect(this.collection);
  });

});
