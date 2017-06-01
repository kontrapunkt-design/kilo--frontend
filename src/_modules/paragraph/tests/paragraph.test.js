'use strict';

import Paragraph from '../paragraph';

describe('Paragraph View', function() {

  beforeEach(() => {
    this.paragraph = new Paragraph();
  });

  it('Should run a few assertions', () => {
    expect(this.paragraph);
  });

});
