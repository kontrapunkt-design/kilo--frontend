'use strict';

import Wipe from '../wipe';

describe('Wipe View', function() {

  beforeEach(() => {
    this.wipe = new Wipe();
  });

  it('Should run a few assertions', () => {
    expect(this.wipe);
  });

});
