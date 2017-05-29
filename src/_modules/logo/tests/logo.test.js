'use strict';

import Logo from '../logo';

describe('Logo View', function() {

  beforeEach(() => {
    this.logo = new Logo();
  });

  it('Should run a few assertions', () => {
    expect(this.logo);
  });

});
