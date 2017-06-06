'use strict';

import HeroProject from '../hero--project';

describe('HeroProject View', function() {

  beforeEach(() => {
    this.heroProject = new HeroProject();
  });

  it('Should run a few assertions', () => {
    expect(this.heroProject);
  });

});
