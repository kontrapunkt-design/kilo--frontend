'use strict';

import Loading from '../loading';

describe('Loading View', function() {

  beforeEach(() => {
    this.loading = new Loading();
  });

  it('Should run a few assertions', () => {
    expect(this.loading);
  });

});
