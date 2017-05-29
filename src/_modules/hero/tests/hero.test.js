'use strict';

import Hero from '../hero';

describe('Hero View', function() {

  beforeEach(() => {
    this.hero = new Hero();
  });

  it('Should run a few assertions', () => {
    expect(this.hero);
  });

});
