'use strict';

import ProjectMetaInfo from '../project__meta-info';

describe('ProjectMetaInfo View', function() {

  beforeEach(() => {
    this.projectMetaInfo = new ProjectMetaInfo();
  });

  it('Should run a few assertions', () => {
    expect(this.projectMetaInfo);
  });

});
