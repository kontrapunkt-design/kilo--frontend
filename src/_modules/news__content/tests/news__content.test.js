'use strict';

import NewsContent from '../news__content';

describe('NewsContent View', function() {

  beforeEach(() => {
    this.newsContent = new NewsContent();
  });

  it('Should run a few assertions', () => {
    expect(this.newsContent);
  });

});
