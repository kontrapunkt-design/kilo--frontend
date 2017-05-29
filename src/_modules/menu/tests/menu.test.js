'use strict';

import Menu from '../menu';

describe('Menu View', function() {

  beforeEach(() => {
    this.menu = new Menu();
  });

  it('Should run a few assertions', () => {
    expect(this.menu);
  });

});
