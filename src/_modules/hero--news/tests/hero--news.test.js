'use strict';

import HeroNews from '../hero--news';

describe('HeroNews View', function() {

  beforeEach(() => {
    this.heroNews = new HeroNews();
  });

  it('Should run a few assertions', () => {
    expect(this.heroNews);
  });

});
